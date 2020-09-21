const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  baseUrl: 'https://alihaistore.com',
  ignoredPaths: ['/favicon', '/404', '/robots', '/index', '/manifest', '/sitemap'],
  extraPaths: ['/'],
  pagesDirectory: path.resolve(__dirname, '../out'),
  targetDirectory: path.resolve(__dirname, '../'),
  sitemapFilename: path.resolve(__dirname, '../out/sitemap.xml'),
  nextConfigPath: path.resolve(__dirname, '../next.config.js'),
});

// eslint-disable-next-line
console.log('✅ sitemap.xml generated!');
