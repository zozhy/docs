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
	]);
}
