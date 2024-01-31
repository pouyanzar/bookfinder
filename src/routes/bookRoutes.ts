import express from 'express'
import asyncHandler from 'express-async-handler'
import {
    getAllBooks,
    getBookByAuther,
    getBookByCategory,
    getBookByISBN,
    getBookByTitle,
    addBook,
    updateBook,
} from '../controllers/bookController'
const router = express.Router()

// http://localhost:8000/books
router
    .route('/')
    .get(asyncHandler(getAllBooks)) // GET  http://localhost:8000/books
    .post(asyncHandler(addBook)) // POST  http://localhost:8000/books

router.route('/title/:title').get(asyncHandler(getBookByTitle))
router.route('/auther/:author').get(asyncHandler(getBookByAuther))
router.route('/category/:category').get(asyncHandler(getBookByCategory))
router.route('/isbn/:isbn').get(asyncHandler(getBookByISBN))

router.route('/:id').patch(asyncHandler(updateBook))

export default router
