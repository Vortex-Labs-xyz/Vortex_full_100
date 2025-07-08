/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vortex.group",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  // HINWEIS: `next-sitemap` erkennt Bilder (`<img>`-Tags) auf Ihren Seiten
  // automatisch und fügt sie der Sitemap hinzu. Eine separate Option
  // `generateImageSitemap` ist nicht mehr notwendig.
}
