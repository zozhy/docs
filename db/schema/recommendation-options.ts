import { column, defineTable } from 'astro:db';

import { Recommendations } from './recommendations';

export const RecommendationOptions = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		recommendationId: column.number({ references: () => Recommendations.columns.id }),

		qualifier: column.text({
			enum: ['moderate_to_vigorous', 'moderate', 'vigorous', 'muscle_strength'],
		}),

		lowerBound: column.number({ optional: true }),
		upperBound: column.number({ optional: true }),
	},
});
