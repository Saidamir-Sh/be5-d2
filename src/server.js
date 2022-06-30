// const express = require("express") => OLD IMPORT SYNTAX
import express from "express" // => new import syntax (enabled with "type": "module" in package.json)
import listEndpoints from "express-list-endpoints"
import usersRouter from "./services/users/index.js"

const server = express()

const port = 3001

// > ************ ENDPOINTS ******************
server.use('/users', usersRouter)
console.table(listEndpoints(server))

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})