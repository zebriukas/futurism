describe('record', function () {

	var mongoose = require('mongoose');
	var mockgoose = require('mockgoose');
	mockgoose(mongoose);

	var RecordGoose = require('../../models/record');


	beforeEach(function () {

	});

	afterEach(function () {
		mockgoose.reset();
	});

	it('should insert a document', function () {
		RecordGoose.create({
			_id: 'Zn5hVVrpX3kj',
			time: new Date(),
			turns: 0,
			users: [
				{ _id: 34162,
					team: 34162,
					name: 'Fred The Giant Cactus',
					site: 'j',
					hand: [Object],
					graveyard: [],
					cards: [],
					futures: [],
					pride: 2,
					deckPride: 6,
					deck: { _id: '34162-HYE6EOeo',
						name: 'New Deck',
						userId: 34162,
						pride: 6,
						cards: [
							{ _id: '34162-uTKm7A87',
								userId: 34162,
								story: '',
								name: 'snowman',
								__v: 0,
								version: 1,
								hasImage: true,
								updated: new Date(),
								abilities: [],
								health: 1,
								attack: 1,
								faction: 'en',
								canon: false },
							{ _id: '34162-uTKm7A87',
								userId: 34162,
								story: '',
								name: 'snowman',
								__v: 0,
								version: 1,
								hasImage: true,
								updated: new Date(),
								abilities: [],
								health: 1,
								attack: 1,
								faction: 'en',
								canon: false },
							{ _id: '34162-uTKm7A87',
								userId: 34162,
								story: '',
								name: 'snowman',
								__v: 0,
								version: 1,
								hasImage: true,
								updated: new Date(),
								abilities: [],
								health: 1,
								attack: 1,
								faction: 'en',
								canon: false }
						] },
					oldElo: 140.66035072171178,
					elo: 149.09004353690372,
					oldFame: 40.63184660323901,
					fame: 54.061539418430954,
					oldFractures: 5,
					fractures: 5 },
				{ _id: 389222,
					team: 389222,
					name: 'Represent-S4S',
					site: 'g',
					hand: [Object],
					graveyard: [],
					cards: [Object],
					futures: [],
					pride: 0,
					deckPride: 11,
					deck: { _id: '389222-HHCeHJZI',
						userId: 389222,
						name: 'Ulto',
						__v: 0,
						pride: 11,
						cards: [
							{ __v: 2,
								_id: '389222-MCaGSxv4',
								name: 'Cool Catz',
								story: '',
								userId: 389222,
								version: 6,
								hasImage: true,
								updated: new Date(),
								abilities: [Object],
								health: 1,
								attack: 1,
								faction: 'ze',
								canon: false },
							{ _id: '389222-TUQWmeJ1',
								userId: 389222,
								story: '',
								name: 'MofoBro',
								__v: 0,
								version: 1,
								hasImage: true,
								updated: new Date(),
								abilities: [],
								health: 1,
								attack: 1,
								faction: 'el',
								canon: false },
							{ _id: '389222-SUD0xpxP',
								userId: 389222,
								story: '',
								name: 'Stahp',
								__v: 0,
								version: 1,
								hasImage: true,
								updated: new Date(),
								abilities: [],
								health: 1,
								attack: 1,
								faction: 'ze',
								canon: false },
							{ _id: '389222-B5sFvP3y',
								userId: 389222,
								story: '',
								name: 'Surf Dude 2',
								__v: 0,
								version: 4,
								hasImage: true,
								updated: new Date(),
								abilities: [],
								health: 1,
								attack: 1,
								faction: 'en',
								canon: false },
							{ _id: '389222-B5sFvP3y',
								userId: 389222,
								story: '',
								name: 'Surf Dude 2',
								__v: 0,
								version: 4,
								hasImage: true,
								updated: new Date(),
								abilities: [],
								health: 1,
								attack: 1,
								faction: 'en',
								canon: false }
						] },
					oldElo: 159.33964927828822,
					elo: 150.90995646309628,
					oldFame: 49.97149588152723,
					fame: 54.97149588152723,
					oldFractures: 5,
					fractures: 5 }
			],
			actions: []
		}, function(err, result) {
			expect(err).toBe(null);
			expect(result).toBeTruthy();
		});
	});
});