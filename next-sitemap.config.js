/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sutra-mastodont.vercel.app/',
  exclude: ['/icon.svg', '/apple-icon.png', '/manifest.webmanifest', '/tags/*'],
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};