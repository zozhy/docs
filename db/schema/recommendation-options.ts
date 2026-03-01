import { column, defineTable } from 'astro:db';

import { Recommendations } from './recommendations';

export const RecommendationOptions = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		recommendationId: column.number({ references: () => Recommendations.columns.id }),

		sex: column.text({ enum: ['male', 'female'], optional: true }),

		ageMin: column.number({ optional: true }),

		ageMax: column.number({ optional: true }),

		condtions: column.json({ optional: true }),

		qualifier: column.text({
			enum: [
				'moderate_to_vigorous',
				'vigorous',
				'moderate',

				'fruits_and_vegetables',

				'total_fat',
				'saturated_fat',
				'trans_fat',
				'fiber',
				'free_sugar',

				'sodium',
				'potassium',

				'bmi',
			],
		}),

		lowerBound: column.number({ optional: true }),

		upperBound: column.number({ optional: true }),
	},
});
