const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');
const files = ['index.html', 'styles.css', 'script.js'];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'images'), { recursive: true });
for (const file of files) fs.copyFileSync(path.join(root, file), path.join(dist, file));
for (const file of ['manus-routes.json', 'robots.txt', 'sitemap.xml']) {
  fs.copyFileSync(path.join(root, 'public', file), path.join(dist, file === 'manus-routes.json' ? file : file));
}
for (const file of fs.readdirSync(path.join(root, 'public', 'images'))) {
  fs.copyFileSync(path.join(root, 'public', 'images', file), path.join(dist, 'images', file));
}
console.log(`Static build ready: ${path.relative(root, dist)}`);
