// HTTP module

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome to our homepage')
    
    } else if (req.url === '/about') {
        res.end('Welcome to our about page')
    } else {
        res.end(`
        <h1> Oops! </h1>
        <p>Page cannot be found</p>
        <a href = "/">Home</a>
        `)
    }
   
})

server.listen(8000)