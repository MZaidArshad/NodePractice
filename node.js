// File System Module

const fs = require("fs");

fs.mkdirSync("zaid", (err) => {
  console.log(err);
});

fs.writeFile("zaid/pak.txt", "created with node", (err) => {
  console.log(err);
});

fs.appendFileSync("zaid/pak.txt", "I am appended later", (err) => {
  console.log(err);
});

fs.readFile("zaid/pak.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

fs.rename("zaid/myPak.txt", "zaid/myPakistan.txt", (err) => {
  console.log(err);
});

fs.unlink("zaid/myPakistan.txt", (err) => [console.log(err)]);

fs.rmdir("zaid", (err) => {
  console.log(err);
});

// ##Path Module

const path = require("path");

console.log(path.dirname("F:/MERN/Nodejs/node.js"));
console.log(path.extname("F:/MERN/Nodejs/node.js"));
console.log(path.basename("F:/MERN/Nodejs/node.js"));
console.log(path.parse("F:/MERN/Nodejs/node.js"));

const fs = require("fs");

const bioData = {
  name: "Zaid",
  age: 21,
  dep: "CS",
};

const jsonData = JSON.stringify(bioData);

// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log(err);
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const originalData = JSON.parse(data);
  console.log(originalData);
});

// Node Web Server

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello Home the server");
  } else if (req.url == "/about") {
    res.end("Hello about the server");
  } else if (req.url == "/contact") {
    res.end("Hello contact the server");
  } else {
    res.writeHead(404);
    res.end("404 Error");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port 8000");
});
