const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, fs.existsSync(path.join(__dirname, 'dist')) ? 'dist' : '.');
const port = Number(process.env.PORT || 3000);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };

function safePath(urlPath) {
  const pathname = decodeURIComponent((urlPath || '/').split('?')[0]);
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const candidate = path.resolve(root, relative);
  return candidate.startsWith(path.resolve(root)) ? candidate : null;
}

http.createServer((req, res) => {
  const file = safePath(req.url);
  if (!file) return res.writeHead(400).end('Bad request');
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) return res.writeHead(404).end('Not found');
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
  });
}).listen(port, '0.0.0.0', () => console.log(`AutoRIP landing page listening on ${port}`));
