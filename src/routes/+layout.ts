import type { Load } from '@sveltejs/kit';

export const prerender = true;

export const load: Load = async ({ url }) => {
	return {
		url: url.pathname
	};
};
