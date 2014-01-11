angular.module('futurism')
	.factory('targeter', function($routeParams, state, shared, board, players, socket) {

		var actions = shared.actions;

		var targeter = {


			onCooldown: false,


			/**
			 * Choose an action to use
			 * @param {String} actionId
			 * @param {Number} cid
			 */
			selectAction: function(actionId, cid) {
				if(state.name !== 'thinking') {
					return false;
				}
				var action = actions[actionId];
				var target = board.cidToTarget(cid);
				state.set(state.TARGETING, {
					actionId: actionId,
					restrict: action.restrict,
					targets: [target]
				});
				targeter.cooldown();
				return targeter.checkTargetChain();
			},


			/**
			 * Choose a target to use an ability on
			 * @param {Object} target
			 */
			selectTarget: function(target) {
				if(targeter.onCooldown) {
					return false;
				}
				if(state.name !== state.TARGETING) {
					return false;
				}
				if(!targeter.isValidTarget(target)) {
					state.toDefault();
					return false;
				}
				state.data.targets.push(target);
				return targeter.checkTargetChain();
			},


			/**
			 * Send an action with its targets to the server if all targets have been selected
			 */
			checkTargetChain: function() {
				if(state.data.targets.length >= state.data.restrict.length) {
					socket.authEmit('doAction', {
						gameId: $routeParams.gameId,
						actionId: state.data.actionId,
						targets: state.data.targets
					});
					state.toDefault();
				}
			},


			/**
			 * Returns if target is allowed by current filter
			 */
			isValidTarget: function(target) {
				if(state.name !== state.TARGETING) {
					return false;
				}
				var filters = state.data.restrict[state.data.targets.length];
				var targets = [target];
				_.each(filters, function(filter) {
					targets = filter(targets, players.me);
				});
				return targets.length !== 0;
			},


			/**
			 * prevent targeting immediately after an action
			 * handy for preventing double clicks from messing things up
			 */
			cooldown: function() {
				targeter.onCooldown = true;
				_.delay(function() {
					targeter.onCooldown = false;
				}, 500);
			}
		};

		return targeter;
	});