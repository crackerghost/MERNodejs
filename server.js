const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const host = "localhost";

// Paths to various files
const cssPath = path.join(__dirname, "style.css");
const home = path.join(__dirname, "index.html");
const about = path.join(__dirname, "about.html");
const nf = path.join(__dirname, "notfound.html");
const contact = path.join(__dirname, "contact.html");
const imgPath = path.join(__dirname, "img", "background.avif");
const menu = path.join(__dirname, "img", "menu.webp");
const logo = path.join(__dirname, "img", "logo.png");
const ham = path.join(__dirname, "img", "hamburger.png");

// Read the content of the home page HTML file
fs.readFile(home, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }

  // Read the content of the CSS file
  fs.readFile(cssPath, "utf-8", (err, css) => {
    if (err) {
      throw err;
    }

    // Read the background image
    fs.readFile(imgPath, (err, img) => {
      if (err) {
        throw err;
      }

      // Read menu image
      fs.readFile(menu, (err, menu) => {
        if (err) {
          throw err;
        }

        // Read logo image
        fs.readFile(logo, (err, logo) => {
          if (err) {
            throw err;
          }

          // Read hamburger menu image
          fs.readFile(ham, (err, ham) => {
            if (err) {
              throw err;
            }

            // Read about page HTML file
            fs.readFile(about, (err, about) => {
              if (err) {
                throw err;
              }

              // Read contact page HTML file
              fs.readFile(contact, (err, contact) => {
                if (err) {
                  throw err;
                }

                // Read 404 Not Found page HTML file
                fs.readFile(nf, (err, nf) => {
                  if (err) {
                    throw err;
                  }

                  // Start the server with all the read data
                  startServer(
                    data,
                    css,
                    img,
                    menu,
                    logo,
                    ham,
                    about,
                    contact,
                    nf
                  );
                });
              });
            });
          });
        });
      });
    });
  });
});

// Function to start the HTTP server
function startServer(data, css, img, menu, logo, ham, about, contact, nf) {
  const server = http.createServer((req, res) => {
    // Handle requests based on URL
    if (req.url === "/" || req.url === "/home") {
      // Serve home page HTML
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else if (req.url === "/style.css") {
      // Serve CSS file
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(css);
    } else if (req.url === "/about") {
      // Serve about page HTML
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(about);
    } else if (req.url === "/contact") {
      // Serve contact page HTML
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(contact);
    } else if (req.url === "/img/background.avif") {
      // Serve background image
      res.writeHead(200, { "Content-Type": "image/avif" });
      res.end(img);
    } else if (req.url === "/img/menu.webp") {
      // Serve menu image
      res.writeHead(200, { "Content-Type": "image/webp" });
      res.end(menu);
    } else if (req.url === "/img/logo.png") {
      // Serve logo image
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(logo);
    } else if (req.url === "/img/hamburger.png") {
      // Serve hamburger menu image
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(ham);
    } else {
      // If no matching route is found, serve 404 Not Found page HTML
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(nf);
    }
  });

  // Start the server listening on the specified port and host
  server.listen(PORT, host, () => {
    console.log("Server listening on " + host + ":" + PORT);
  });
}
