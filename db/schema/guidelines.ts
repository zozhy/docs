import { column, defineTable } from 'astro:db';

export const Guidelines = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		authority: column.text({ enum: ['who'] }),

		title: column.text(),

		year: column.number(),

		url: column.text(),
	},
});
