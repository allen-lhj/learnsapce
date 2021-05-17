const http = require('http')
const querystring = require('querystring')
const server = http.createServer((request, response) => {

    response.writeHead(200, {
      'content-type': 'application/json;charset=utf-8'
      // 'content-type': 'text/html'
      // 'content-type': 'text/plain'
    })
  // response.write('<h1>234</h1>')
  response.write(JSON.stringify(querystring.parse(data)))
  response.end()
  })

server.listen(3000, ()=> {
  console.log('http')
})