import {
	AgeBands,
	db,
	Guidelines,
	MeasurementTypes,
	RecommendationOptions,
	Recommendations,
} from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Guidelines).values([
		{
			authority: 'who',
			title: 'WHO guidelines on physical activity and sedentary behaviour',
			url: 'https://www.who.int/publications/i/item/9789240015128',
			year: '2020',
		},
	]);

	await db.insert(AgeBands).values([
		// WHO guidelines on physical activity and sedentary behaviour
		{ ageMax: 17, ageMin: 5 },
		{ ageMax: 64, ageMin: 18 },
		{ ageMax: 150, ageMin: 65 },
		{ ageMax: 150, ageMin: 18 },
	]);

	await db.insert(MeasurementTypes).values([
		// WHO guidelines on physical activity and sedentary behaviour
		{ operator: 'gt', period: 'day', unit: 'minute' },
		{ operator: 'gt', period: 'week', unit: 'day' },
	]);

	await db.insert(Recommendations).values([
		// WHO guidelines on physical activity and sedentary behaviour
		{ ageBandId: 1, guidelineId: 1, measurementTypeId: 1 }, // At least 60 minutes a day
		{ ageBandId: 1, guidelineId: 1, measurementTypeId: 2, optionsOperator: 'and' }, // On at least 3 days a week
	]);

	await db.insert(RecommendationOptions).values([
		// WHO guidelines on physical activity and sedentary behaviour
		{ lowerBound: 60, qualifier: 'moderate_to_vigorous', recommendationId: 1 },
		{ lowerBound: 3, qualifier: 'vigorous', recommendationId: 2 },
		{ lowerBound: 3, qualifier: 'muscle_strength', recommendationId: 2 },
	]);
}
