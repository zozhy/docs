import { column, defineTable } from 'astro:db';

export const MeasurementTypes = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		operator: column.text({ enum: ['gt', 'lt', 'eq'] }),

		unit: column.text({ enum: ['minute', 'day'] }),

		period: column.text({ enum: ['day', 'week'] }),
	},
});
