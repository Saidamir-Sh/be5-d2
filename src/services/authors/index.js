import express from 'express'

// 1. READ  ---> GET http://localhost:3001/authors (+body)
// 2. READ  ---> GET http://localhost:3001/authors/:authorID (+optional query params)
// 3. CREATE  ---> POST http://localhost:3001/authors 
// 4. UPDATE  ---> PUT http://localhost:3001/authors/:authorsID (+body)
// 5. DELETE  ---> DELETE http://localhost:3001/authors/:authorsID 

const authorRouter = express.Router()




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