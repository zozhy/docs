import seedGuidelines from './seed/guidelines';
import seedRecommendationOptions from './seed/recommendation-options';
import seedRecommendations from './seed/recommendations';

// https://astro.build/db/seed
export default async function seed() {
	await seedGuidelines();
	await seedRecommendations();
	await seedRecommendationOptions();
}
