import { column, defineTable } from 'astro:db';

export const AgeBands = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		ageMin: column.number(),

		ageMax: column.number(),
	},
});
