import express from 'express'

const authorRoutes = express.Router()

// 1. READ  ---> GET http://localhost:3001/authors (+body)
// 2. READ  ---> GET http://localhost:3001/authors/:authorID (+optional query params)
// 3. READ  ---> GET http://localhost:3001/users/:userID 
// 4. UPDATE  ---> PUT http://localhost:3001/users/:userID (+body)
// 5. DELETE  ---> DELETE http://localhost:3001/users/:userID 

