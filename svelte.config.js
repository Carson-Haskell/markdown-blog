import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},

	// Code syntax highlighting for markdown blogs
	highlight: {
		highlighter: async (code) => {
			const highlighter = await createHighlighter({
				themes: ['night-owl', 'poimandres'],
				langs: ['javascript', 'typescript', 'svelte']
			});
			const html = escapeSvelte(
				highlighter.codeToHtml(code, { lang: 'svelte', theme: 'poimandres' })
			);

			return `{@html \`${html}\`}`;
		}
	},

	remarkPlugins: [remarkUnwrapImages, remarkToc],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter()
	}
};

export default config;
