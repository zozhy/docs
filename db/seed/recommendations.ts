import { db, Recommendations } from 'astro:db';

export default async function seedRecommendations() {
	await db.insert(Recommendations).values([
		{
			area: 'endurance',
			guidelineId: 1,
			operator: 'gt',
			period: 'day',
			unit: 'minute',
		},
		{
			area: 'endurance',
			guidelineId: 1,
			operator: 'gt',
			period: 'week',
			unit: 'day',
		},
		{
			area: 'strength',
			guidelineId: 1,
			operator: 'gt',
			period: 'week',
			unit: 'day',
		},
		{
			area: 'balance',
			guidelineId: 1,
			operator: 'gt',
			period: 'week',
			unit: 'day',
		},
		{
			area: 'macronutrients',
			guidelineId: 2,
			operator: 'lt',
			period: 'day',
			unit: 'kcal_percent',
		},
		{
			area: 'macronutrients',
			guidelineId: 3,
			operator: 'gt',
			period: 'day',
			unit: 'g',
		},
		{
			area: 'macronutrients',
			guidelineId: 4,
			operator: 'lt',
			period: 'day',
			unit: 'kcal_percent',
		},
		{
			area: 'micronutrients',
			guidelineId: 5,
			operator: 'lt',
			period: 'day',
			unit: 'g',
		},
		{
			area: 'micronutrients',
			guidelineId: 6,
			operator: 'gt',
			period: 'day',
			unit: 'mg',
		},
	]);
}
