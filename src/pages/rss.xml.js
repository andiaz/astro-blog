import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const creativityPosts = await getCollection('creativity');
  const uxPosts = await getCollection('uxDesign');
  const musicProductionPosts = await getCollection('musicProduction');
  const techPosts = await getCollection('tech');

  // Merge all posts into one list
  const allPosts = [...creativityPosts, ...uxPosts, ...musicProductionPosts, ...techPosts];

  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
