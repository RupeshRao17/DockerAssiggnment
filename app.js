const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.write("This is the node file");
  res.end();
});
server.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
