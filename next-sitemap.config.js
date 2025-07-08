/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vortexchain.xyz",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  // NOTE: `next-sitemap` automatically detects images (`<img>` tags) on your pages
  // and adds them to the sitemap. A separate `generateImageSitemap` option
  // is no longer necessary.
}
