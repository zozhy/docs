import { defineDb } from 'astro:db';

import { AgeBands } from './schema/age-bands';

// https://astro.build/db/config
export default defineDb({
	tables: { AgeBands },
});
