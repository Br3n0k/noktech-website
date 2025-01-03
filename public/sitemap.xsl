<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>NokTech.com.br - XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            margin: 0;
            padding: 2rem;
            background: #f5f5f5;
          }
          .wrapper {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1 {
            color: #0f172a;
            font-size: 2rem;
            margin: 0 0 1rem;
          }
          .intro {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
          }
          .intro p {
            margin: 0.5rem 0;
            color: #666;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
          }
          th {
            background: #0f172a;
            color: white;
            text-align: left;
            padding: 1rem;
          }
          td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #eee;
          }
          tr:hover td {
            background: #f8f9fa;
          }
          .url {
            color: #2563eb;
            text-decoration: none;
          }
          .url:hover {
            text-decoration: underline;
          }
          .priority, .changefreq {
            text-align: center;
          }
          .lastmod {
            color: #666;
          }
          .alternate {
            font-size: 0.875rem;
            color: #666;
            margin-top: 0.25rem;
          }
          .alternate a {
            color: #2563eb;
            text-decoration: none;
            margin-right: 0.5rem;
          }
          .alternate a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="intro">
            <h1>NokTech.com.br - XML Sitemap</h1>
            <p>Este sitemap contém <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.</p>
            <p>Última atualização: <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/></p>
          </div>
          
          <table>
            <tr>
              <th>URL</th>
              <th>Prioridade</th>
              <th>Frequência</th>
              <th>Última Modificação</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a class="url" href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  <xsl:if test="xhtml:link">
                    <div class="alternate">
                      Alternativas:
                      <xsl:for-each select="xhtml:link">
                        <a href="{@href}"><xsl:value-of select="@hreflang"/></a>
                      </xsl:for-each>
                    </div>
                  </xsl:if>
                </td>
                <td class="priority"><xsl:value-of select="sitemap:priority"/></td>
                <td class="changefreq"><xsl:value-of select="sitemap:changefreq"/></td>
                <td class="lastmod"><xsl:value-of select="sitemap:lastmod"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 