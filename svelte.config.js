import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: preprocess({
		//stylus()
	}),
	onwarn: (warning, defaultHandler) => {
		// don't warn on <marquee> elements, cos they're cool
		if (warning.code === 'a11y-distracting-elements') return;
		if (warning.code === 'a11y-click-events-have-key-events') return;
		if (warning.code === 'a11y-invalid-attribute') return;

		// handle all other warnings normally
		defaultHandler(warning);
	}
};

export default config;
