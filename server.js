const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT) || 3000;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
};

// The original résumé lives one folder up. Served read-only at /resume.md.
function findResume() {
  try {
    const parent = path.resolve(root, "..");
    const file = fs
      .readdirSync(parent)
      .find((name) => name.toLowerCase().endsWith(".md"));
    return file ? path.join(parent, file) : null;
  } catch {
    return null;
  }
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);

  if (pathname === "/resume.md") {
    const resume = findResume();
    if (!resume) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Resume markdown file not found.");
      return;
    }
    return sendFile(res, resume);
  }

  let filePath = path.join(root, pathname === "/" ? "index.html" : pathname);

  if (!filePath.startsWith(root + path.sep) && filePath !== path.join(root, "index.html")) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("403 Forbidden");
    return;
  }

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }
    sendFile(res, filePath);
  });
});

server.listen(port, () => {
  console.log(`Preview running at http://localhost:${port}`);
});
