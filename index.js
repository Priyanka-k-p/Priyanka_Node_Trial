const http = require('node:http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Helloo welcome to the app")
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log("Listening on the server")
})