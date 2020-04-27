const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    console.log(q);

    let filename = "";
    q.pathname === "/" ? (filename = "./index.html") : (filename = `.${q.pathname}.html`);

    fs.readFile(filename, (err, data) => {
      if (err) {
        fs.readFile("./404.html", (err, data) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);
