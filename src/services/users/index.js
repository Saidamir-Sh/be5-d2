/* *********************    USERS ENDPOINT ************************** */


/* ********************     USERS CRUD      ************************* */

// 1. CREATE  ---> POST http://localhost:3001/users (+body)
// 2. READ  ---> GET http://localhost:3001/users (+optional query params)
// 3. READ  ---> GET http://localhost:3001/users/:userID 
// 4. UPDATE  ---> PUT http://localhost:3001/users/:userID (+body)
// 5. DELETE  ---> DELETE http://localhost:3001/users/:userID 

import express from "express";

const usersRouter = express.Router()

// 1.
usersRouter.post('/')

// 2.
usersRouter.get('/')

// 3.
usersRouter.get('/:userID')

// 4.
usersRouter.put('/:userID')

// 5.
usersRouter.delete('/:userID')

export default usersRouter