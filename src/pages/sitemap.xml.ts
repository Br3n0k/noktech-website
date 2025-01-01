import type { APIContext } from 'astro';

const pages = [
  {
    url: 'https://noktech.com.br',
    lastmod: new Date(),
    changefreq: 'monthly',
    priority: 1.0
  },
  {
    url: 'https://noktech.com.br/obrigado',
    lastmod: new Date(),
    changefreq: 'yearly',
    priority: 0.3
  }
];

export async function GET({ site }: APIContext) {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod.toISOString()}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
} 