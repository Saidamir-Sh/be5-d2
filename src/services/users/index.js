/* *********************    USERS ENDPOINT ************************** */


/* ********************     USERS CRUD      ************************* */

// 1. CREATE  ---> POST http://localhost:3001/users (+body)
// 2. READ  ---> GET http://localhost:3001/users (+optional query params)
// 3. READ  ---> GET http://localhost:3001/users/:userID 
// 4. UPDATE  ---> PUT http://localhost:3001/users/:userID (+body)
// 5. DELETE  ---> DELETE http://localhost:3001/users/:userID 

import express from "express";
import fs from 'fs'
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const usersRouter = express.Router()

// current file path
const currentFilePath = fileURLToPath(import.meta.url)

// from currentfilePath I can obtain the parent folders path 
const currentFolderPath = dirname(currentFilePath)

// I can concatenate currentFolderPath with users.json
const usersJSONPath = join(currentFolderPath, "users.json")

// 1.
usersRouter.post('/', (req, res) => {
    res.send("Hello, I am post method route")
})

// 2.
usersRouter.get('/', (req, res) => {
    res.send({message : "Hello, I am get method route"})
})

// 3.
usersRouter.get('/:userID', (req, res) => {
    res.send("Hello World")
})

// 4.
usersRouter.put('/:userID', (req, res) => {
    res.send("Hello World")
})

// 5.
usersRouter.delete('/:userID', (req, res) => {
    res.send("Hello World")
})

export default usersRouter