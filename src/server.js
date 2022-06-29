// const express = require("express") => OLD IMPORT SYNTAX
import express from "express" // => new import syntax (enabled with "type": "module" in package.json)

const server = express()

const port = 3001

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})