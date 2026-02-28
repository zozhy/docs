import { defineDb } from 'astro:db';

import { Guidelines } from './schema/guidelines';
import { RecommendationOptions } from './schema/recommendation-options';
import { Recommendations } from './schema/recommendations';

// https://astro.build/db/config
export default defineDb({
	tables: { Guidelines, RecommendationOptions, Recommendations },
});
