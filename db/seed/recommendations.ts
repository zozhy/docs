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
	]);
}
