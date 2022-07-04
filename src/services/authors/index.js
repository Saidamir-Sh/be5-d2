import express from 'express'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// 1. READ  ---> GET http://localhost:3001/authors (+body)
// 2. READ  ---> GET http://localhost:3001/authors/:authorID (+optional query params)
// 3. CREATE  ---> POST http://localhost:3001/authors 
// 4. UPDATE  ---> PUT http://localhost:3001/authors/:authorsID (+body)
// 5. DELETE  ---> DELETE http://localhost:3001/authors/:authorsID 

const authorRouter = express.Router()


// current file path
const currentFilePath = fileURLToPath(import.meta.url)

// parent folder derived from currentFilePath
const currentFolderPath = dirname(currentFilePath)

// concatenating currentFodlerPath with authorsJSON file
const authorsJSONPath = join(currentFolderPath, "authors.json")

authorRouter.get('/', (req, res)  => {
    res.send({message: 'I am author router'})
})

authorRouter.get('/:authorID', (req, res) => {
    res.send('Hello Author ID')
})

authorRouter.post('/', (req, res) => {
    res.send('I will add new author')
})

authorRouter.put('/:authorID', (req, res) => {
    res.send('I will edit to existing author')
})

authorRouter.delete('/:authorID', (req, res) => {
    res.send('I will delete the author')
})

export default authorRouter