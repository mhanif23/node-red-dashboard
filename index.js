const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: "./data",
  flowFile: "flows.json",
  functionGlobalContext: {},
  port: process.env.PORT || 1880,

  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2b$08$quNT4HF38EcT4N02fw6Lq.rpfTNLlAYTDZB7B.UYfZxxnuOZO238C",
      permissions: "*"
    }]
  }
};


RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(settings.port, () => {
  console.log(`Node-RED is running on http://localhost:${settings.port}${settings.httpAdminRoot}`);
});

RED.start();
