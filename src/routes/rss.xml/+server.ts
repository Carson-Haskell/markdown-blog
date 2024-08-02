import * as config from '$lib/config';
import type { Post } from '$lib/types';
import type { LoadEvent } from '@sveltejs/kit';

export const prerender = true;

export async function GET({ fetch }: LoadEvent) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
  <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
      <title>${config.title}</title>
      <descriptoin>${config.description}</descriptoin>
      <link>${config.url}</link>
      <atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml" />
      ${posts
				.map((post) => {
					return `
          <item>
            <title>${post.title}</title>
            <description>${post.description}</description>
            <link>${config.url}/${post.slug}</link>
            <guid isPermaLink="true">${config.url}/${post.slug}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>
          `;
				})
				.join('')}
    </channel>
  </rss>
  `.trim();

	return new Response(xml, { headers });
}
