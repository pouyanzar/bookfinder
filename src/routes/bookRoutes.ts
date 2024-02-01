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
    deleteBook,
} from '../controllers/bookController'
const router = express.Router()
/**
 * @openapi
 * /api/v1/books:
 *   get:
 *     tags:
 *      - Books
 *     description: Gets all the books!
 *     responses:
 *       200:
 *         description: Returns all the books
 */

/**
 * @openapi
 * /api/v1/books:
 *   post:
 *     tags:
 *      - Books
 *     description: Post a book!
 *      parameters:
 *      - in: path
 *        name: title
 *        name: author
 *        name: category
 *        name: isbn
 *     responses:
 *       200:
 *         description: Returns the added book
 */

/**
 * @openapi
 * /api/v1/books/title:
 *   get:
 *     tags:
 *      - Books
 *     description: get a book by title!
 *      parameters:
 *      - in: path
 *        name: title
 *     responses:
 *       200:
 *         description: Returns the book with the title
 */

/**
 * @openapi
 * /api/v1/books/author:
 *   get:
 *     tags:
 *      - Books
 *     description: get a book by author!
 *      parameters:
 *      - in: path
 *        name: author
 *     responses:
 *       200:
 *         description: Returns the book with the author
 */

/**
 * @openapi
 * /api/v1/books/category:
 *   get:
 *     tags:
 *      - Books
 *     description: get a book by category!
 *      parameters:
 *      - in: path
 *        name: category
 *     responses:
 *       200:
 *         description: Returns the book with the category
 */

/**
 * @openapi
 * /api/v1/books/isbn:
 *   get:
 *     tags:
 *      - Books
 *     description: get a book by isbn!
 *      parameters:
 *      - in: path
 *        name: isbn
 *     responses:
 *       200:
 *         description: Returns the book with the isbn
 */

/**
 * @openapi
 * /api/v1/books/update:
 *   patch:
 *     tags:
 *      - Books
 *     description: modify a book fields by id!
 *      parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the modfied book with updated fields
 */

/**
 * @openapi
 * /api/v1/books/delete:
 *   delete:
 *     tags:
 *      - Books
 *     description: delete a book fields by id!
 *      parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Returns the deleted book
 */

// http://localhost:8000/books
router
    .route('/')
    .get(asyncHandler(getAllBooks)) // GET  http://localhost:8000/books
    .post(asyncHandler(addBook)) // POST  http://localhost:8000/books

router.route('/title').get(asyncHandler(getBookByTitle))
router.route('/auther').get(asyncHandler(getBookByAuther))
router.route('/category').get(asyncHandler(getBookByCategory))
router.route('/isbn/').get(asyncHandler(getBookByISBN))

router.route('/update').patch(asyncHandler(updateBook))

router.route('/delete').delete(asyncHandler(deleteBook))

export default router
