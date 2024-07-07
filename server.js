require("dotenv").config();
const http = require("http");
const app = require("./config/index");

const server = http.createServer(app);
server.listen(process.env.PORT);
