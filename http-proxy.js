const fs = require('fs');
const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', request.headers.origin);
  // response.setHeader("Access-Control-Allow-Credentials", "true");
  // response.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, HDB-App-Version");
  debugger;
  if (request.method === 'OPTIONS') {
    response.writeHead(200);
    response.end();
    return;
  }
  proxy.web(request, response, {
    target: 'https://www.zhchhong.shop/api',
    // ssl: {
    //   key: fs.readFileSync("./cert/8796139_zhchhong.shop.key", "utf8"),
    //   cert: fs.readFileSync("./cert/8796139_zhchhong.shop.pem", "utf8"),
    // },
    secure: false,
  });
  proxy.on('error', (error) => {
    console.log(error);
  });
});
server.listen(8888);
