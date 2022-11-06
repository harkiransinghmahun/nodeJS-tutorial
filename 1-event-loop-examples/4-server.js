// HTTP module

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Request event')
    res.end("Hello world")
   
})

server.listen(8000, ()=>{
    console.log("Server is listening on port: 8000")
})