const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  let urlStr = req.url
  let urlObj = url.parse(urlStr, true)
  switch(urlObj.pathname) {
    case '/api/data':
      res.writeHead(200, {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'// 允许任何域名的请求
      })
      res.write('{"ret": true}')
      break;
    default:
      res.write('page not found.')
  }
  res.end()
})

server.listen(8080, () => {
  console.log('localhost:8080')
})