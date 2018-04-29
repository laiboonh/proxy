var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({
  target:'https://localhost:8443',
  secure: false
}).listen(8000);
