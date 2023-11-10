/* input.svelte generated by Svelte vx.x.x */
import {
	SvelteComponent,
	append_styles,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "svelte/internal";

import "svelte/internal/disclose-version";

function add_css(target) {
	append_styles(target, "svelte-c78jcb", "html{height:100%}.awesome.svelte-c78jcb{color:orange}");
}

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.textContent = "Divs ftw!";
			attr(div, "class", "awesome svelte-c78jcb");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

class Input extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {}, add_css);
	}
}

export default Input;
//# sourceMappingURL=_actual.js.map