const express = require('express');
const app = express();

function getBody(req, res) {
  const reqBody = {}, resBody = {}

  Object.keys(req).forEach(key => {
    const requestParams = ['baseUrl', 'body', 'cookies', 'fresh', 'hostname', 'ip', 'ips', 'method', 'originalUrl', 'params', 'path', 'protocol', 'query', 'route', 'secure', 'signedCookies', 'stale', 'subdomains', 'xhr']
    if (requestParams.includes(key)) {
      reqBody[key] = req[key]
    }
  })
  Object.keys(res).forEach(key => {
    const responseParams = ['app', 'baseUrl', 'body', 'cookies', 'fresh', 'hostname', 'ip', 'ips', 'method', 'originalUrl', 'params', 'path', 'protocol', 'query', 'route', 'secure', 'signedCookies', 'stale', 'subdomains', 'xhr',]
    if (responseParams.includes(key)) {
      resBody[key] = res[key]
    }
  })

  return {
    reqBody,
    resBody
  }
}

app.get('/*.json', (req, res) => {
  const body = getBody(req, res)
  res.json(body);
});

app.post('/*.json', (req, res) => {
  const body = getBody(req, res)
  console.log('body', body)
  res.json(body);
});

app.listen(3333, () => {
  console.log('server is running at port 3333');
});
