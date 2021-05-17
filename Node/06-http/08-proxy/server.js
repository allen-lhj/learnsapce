const http = require('http')
const url = require('url')
const {createProxyMiddleware} = require('http-proxy-middleware')
console.log(createProxyMiddleware)
const server = http.createServer((req, res) => {
  const urlStr = req.url
  if (/\/ajax/.test(urlStr)) {
    const proxy = createProxyMiddleware('/ajax', {
      target: 'https://lady.vip.com',
      changeOrigin: true
    })
    proxy(req, res)
  } else {
    console.log('error')
  }
})

server.listen(8080, () => {
  console.log('localhost:8080')
})