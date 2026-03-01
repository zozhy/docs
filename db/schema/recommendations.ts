import { column, defineTable } from 'astro:db';

import { Guidelines } from './guidelines';

export const Recommendations = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		guidelineId: column.number({ references: () => Guidelines.columns.id }),

		area: column.text({
			enum: [
				'endurance',
				'strength',
				'balance',

				'nutrients',
				'macronutrients',
				'micronutrients',
				'measurements',
			],
		}),

		operator: column.text({ enum: ['gt', 'lt', 'between'] }),

		unit: column.text({ enum: ['minute', 'day', 'kcal_percent', 'g', 'mg', 'index'] }),

		period: column.text({ enum: ['day', 'week', 'lifetime'] }),
	},
});
