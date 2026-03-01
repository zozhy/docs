import { db, RecommendationOptions } from 'astro:db';

export default async function seedRecommendationOptions() {
	await db.insert(RecommendationOptions).values([
		{
			ageMax: 17,
			ageMin: 5,
			lowerBound: 60,
			qualifier: 'moderate_to_vigorous',
			recommendationId: 1,
		},
		{
			ageMax: 17,
			ageMin: 5,
			lowerBound: 3,
			qualifier: 'vigorous',
			recommendationId: 2,
		},

		{
			ageMax: 64,
			ageMin: 18,
			lowerBound: 150,
			qualifier: 'moderate',
			recommendationId: 1,
			upperBound: 300,
		},
		{
			ageMax: 64,
			ageMin: 18,
			lowerBound: 75,
			qualifier: 'vigorous',
			recommendationId: 1,
			upperBound: 150,
		},
		{
			ageMax: 64,
			ageMin: 18,
			lowerBound: 2,
			qualifier: 'moderate_to_vigorous',
			recommendationId: 3,
		},
		{
			ageMax: 64,
			ageMin: 18,
			lowerBound: 300,
			qualifier: 'moderate',
			recommendationId: 1,
		},
		{
			ageMax: 64,
			ageMin: 18,
			lowerBound: 150,
			qualifier: 'vigorous',
			recommendationId: 1,
		},

		{
			ageMin: 65,
			lowerBound: 150,
			qualifier: 'moderate',
			recommendationId: 1,
			upperBound: 300,
		},
		{
			ageMin: 65,
			lowerBound: 75,
			qualifier: 'vigorous',
			recommendationId: 1,
			upperBound: 150,
		},
		{
			ageMin: 65,
			lowerBound: 2,
			qualifier: 'moderate_to_vigorous',
			recommendationId: 3,
		},
		{
			ageMin: 65,
			lowerBound: 3,
			qualifier: 'moderate',
			recommendationId: 4,
		},
		{
			ageMin: 65,
			lowerBound: 300,
			qualifier: 'moderate',
			recommendationId: 1,
		},
		{
			ageMin: 65,
			lowerBound: 150,
			qualifier: 'vigorous',
			recommendationId: 1,
		},

		{
			condtions: ['pregnancy', 'postpartum'],
			lowerBound: 150,
			qualifier: 'moderate',
			recommendationId: 1,
			sex: 'female',
		},

		{
			qualifier: 'total_fat',
			recommendationId: 5,
			upperBound: 30,
		},
		{
			qualifier: 'saturated_fat',
			recommendationId: 5,
			upperBound: 10,
		},
		{
			qualifier: 'trans_fat',
			recommendationId: 5,
			upperBound: 1,
		},

		{
			ageMax: 5,
			ageMin: 2,
			qualifier: 'fruits_and_vegetables',
			recommendationId: 6,
			upperBound: 250,
		},
		{
			ageMax: 9,
			ageMin: 6,
			qualifier: 'fruits_and_vegetables',
			recommendationId: 6,
			upperBound: 350,
		},
		{
			ageMin: 10,
			qualifier: 'fruits_and_vegetables',
			recommendationId: 6,
			upperBound: 400,
		},
		{
			ageMax: 5,
			ageMin: 2,
			qualifier: 'fiber',
			recommendationId: 6,
			upperBound: 15,
		},
		{
			ageMax: 9,
			ageMin: 6,
			qualifier: 'fiber',
			recommendationId: 6,
			upperBound: 21,
		},
		{
			ageMin: 10,
			qualifier: 'fiber',
			recommendationId: 6,
			upperBound: 25,
		},

		{
			qualifier: 'free_sugar',
			recommendationId: 7,
			upperBound: 10,
		},
		{
			qualifier: 'free_sugar',
			recommendationId: 7,
			upperBound: 5,
		},

		{
			qualifier: 'sodium',
			recommendationId: 8,
			upperBound: 2,
		},

		{
			qualifier: 'potassium',
			recommendationId: 9,
			upperBound: 3510,
		},
	]);
}
