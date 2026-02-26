import { column, defineTable } from 'astro:db';

export const Disciplines = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		category: column.text({ enum: ['speed', 'stamina', 'agility', 'strength'] }),
	},
});
