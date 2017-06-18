const express = require('express');
const next = require('next');
const config = require('./config');
const httpProxy = require('http-proxy');

const forceSsl = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

const proxy = httpProxy.createProxyServer({
  target: config.apiHost,
  changeOrigin: true,
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.set('port', (process.env.PORT || 3000));

    server.use('/api', (req, res) => {
      proxy.web(req, res);
    });

    if (process.env.NODE_ENV === 'production' && (server.get('port') * 1) !== 3000) {
      server.use(forceSsl);
    }

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(server.get('port'), (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${server.get('port')}`)
    })
  })