import { column, defineTable } from 'astro:db';

import { AgeBands } from './age-bands';
import { Guidelines } from './guidelines';
import { MeasurementTypes } from './measurement-types';

export const Recommendations = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		guidelineId: column.number({ references: () => Guidelines.columns.id }),

		ageBandId: column.number({ optional: true, references: () => AgeBands.columns.id }),

		measurementTypeId: column.number({ references: () => MeasurementTypes.columns.id }),
		optionsOperator: column.text({ enum: ['and', 'or'], optional: true }),

		outcomes: column.json({ optional: true }),
	},
});
