import { test } from '../../test';
import { flushSync } from 'svelte';
import { log } from './log.js';

export default test({
	before_test() {
		log.length = 0;
	},

	async test({ assert, target }) {
		const [b1] = target.querySelectorAll('button');
		flushSync(() => {
			b1.click();
		});
		flushSync(() => {
			b1.click();
		});
		assert.deepEqual(log, ['init 0', 'cleanup 2', null, 'init 2', 'cleanup 4', null, 'init 4']);
	}
});
