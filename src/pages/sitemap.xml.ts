import type { APIRoute } from 'astro';

const languages = ['pt', 'en', 'es'];
const sections = ['services', 'portfolio', 'about', 'contact'];

const generatePages = () => {
  const pages = [
    {
      url: '/',
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date().toISOString()
    }
  ];

  // Adiciona páginas principais em cada idioma
  languages.forEach(lang => {
    pages.push({
      url: `/${lang}/`,
      changefreq: 'monthly',
      priority: lang === 'pt' ? 1.0 : 0.9,
      lastmod: new Date().toISOString()
    });

    // Adiciona seções em cada idioma
    sections.forEach(section => {
      pages.push({
        url: `/${lang}/#${section}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      });
    });
  });

  // Adiciona página de agradecimento
  pages.push({
    url: '/obrigado/',
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString()
  });

  return pages;
};

export const GET: APIRoute = async () => {
  const siteURL = 'https://noktech.com.br';
  const pages = generatePages();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${pages.map(page => `
    <url>
      <loc>${siteURL}${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      ${page.url !== '/' && !page.url.includes('#') ? `
      <xhtml:link 
        rel="alternate" 
        hreflang="pt" 
        href="${siteURL}/pt${page.url.replace(/^\/(pt|en|es)/, '')}"/>
      <xhtml:link 
        rel="alternate" 
        hreflang="en" 
        href="${siteURL}/en${page.url.replace(/^\/(pt|en|es)/, '')}"/>
      <xhtml:link 
        rel="alternate" 
        hreflang="es" 
        href="${siteURL}/es${page.url.replace(/^\/(pt|en|es)/, '')}"/>
      <xhtml:link 
        rel="alternate" 
        hreflang="x-default" 
        href="${siteURL}/pt${page.url.replace(/^\/(pt|en|es)/, '')}"/>` : ''}
    </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}; 