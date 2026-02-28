import { column, defineTable } from 'astro:db';

import { Guidelines } from './guidelines';

export const Recommendations = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		guidelineId: column.number({ references: () => Guidelines.columns.id }),

		area: column.text({ enum: ['endurance', 'strength', 'balance'] }),

		operator: column.text({ enum: ['gt', 'lt'] }),

		unit: column.text({ enum: ['minute', 'day'] }),

		period: column.text({ enum: ['day', 'week'] }),
	},
});
