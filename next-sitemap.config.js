/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vortexgroup.xyz",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/admin/*"],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://vortexgroup.xyz/sitemap.xml',
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7
    let changefreq = 'weekly'
    
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.startsWith('/blog/')) {
      priority = 0.8
      changefreq = 'weekly'
    } else if (path.startsWith('/products/')) {
      priority = 0.9
      changefreq = 'weekly'
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
