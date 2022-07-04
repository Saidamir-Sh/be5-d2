import express from 'express'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import  uniqid  from 'uniqid'

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
const authorsJSON = join(currentFolderPath, "authors.json")


authorRouter.get('/', (req, res)  => {
    const authors = JSON.parse(fs.readFileSync(authorsJSON))
    res.send(authors)
})

authorRouter.get('/', (req, res) => {
    console.log("Query: " , req.query)
    if(req.query && req.query.category) {
        const adminAuth = authors.filter(auth => auth.admin === req.query.category)
        res.send(adminAuth) 
    } else {
        res.send(authors)
    }
})

authorRouter.get('/:authorID', (req, res) => {
    const authors = JSON.parse(fs.readFileSync(authorsJSON))
    const authorID = req.params.authorID
    const selectedAuthor = authors.find(author => author.id === authorID)
    res.send(selectedAuthor)
})

authorRouter.post('/', (req, res) => {
    const authors = JSON.parse(fs.readFileSync(authorsJSON))
    const newAuthor = {...req.body, id: uniqid()}
    authors.push(newAuthor)
    fs.writeFileSync(authorsJSON, JSON.stringify(authors))
    res.status(201).send(newAuthor)
})

authorRouter.put('/:authorID', (req, res) => {
    const authors = JSON.parse(fs.readFileSync(authorsJSON))
    const index = authors.findIndex(author => author.id === req.params.authorID)
    const updatedAuthor = { ...authors[index], ...req.body }
    authors[index] = updatedAuthor
})

authorRouter.delete('/:authorID', (req, res) => {
    res.send('I will delete the author')
})

export default authorRouter