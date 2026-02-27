import { defineDb } from 'astro:db';

import { AgeBands } from './schema/age-bands';
import { Guidelines } from './schema/guidelines';
import { MeasurementTypes } from './schema/measurement-types';
import { RecommendationOptions } from './schema/recommendation-options';
import { Recommendations } from './schema/recommendations';

// https://astro.build/db/config
export default defineDb({
	tables: { AgeBands, Guidelines, MeasurementTypes, RecommendationOptions, Recommendations },
});
