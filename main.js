const express = require('express')

const server = express()

const port = 8888

server.get("/", (req, res) => {
  res.json({message: "running!"})
})

server.listen(port, () => console.log(`\nserver listening on port ${port}\n`))


