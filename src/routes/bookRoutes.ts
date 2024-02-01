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
 *       400:
 *         description: Invalid data sent
 */

/**
 * @openapi
 * /api/v1/books:
 *   post:
 *     tags:
 *      - Books
 *     description: Creates a book!
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               category:
 *                 type: string
 *               isbn:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Invalid data sent
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
 *        required: true
 *        description: The title of the book
 *        schema:
 *           type: string
 *     responses:
 *       200:
 *         description: book data retrieved successfully
 *       404:
 *         description: book not found
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
 *        required: true
 *        description: The author of the book
 *        schema:
 *           type: string
 *     responses:
 *       200:
 *         description: book data retrieved successfully
 *       404:
 *         description: book not found
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
 *        required: true
 *        description: The category of the book
 *        schema:
 *           type: string
 *     responses:
 *       200:
 *         description: book data retrieved successfully
 *       404:
 *         description: book not found
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
 *        required: true
 *        description: The isbn of the book
 *        schema:
 *           type: string
 *     responses:
 *       200:
 *         description: book data retrieved successfully
 *       404:
 *         description: book not found
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
 * /**
 * @openapi
 * /api/v1/books/author:
 *   get:
 *     tags:
 *      - Books
 *     description: get a book by author!
 *      parameters:
 *      - in: path
 *        name: author
 *        required: true
 *        description: The author of the book
 *        schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the modfied book with updated fields
 *       404:
 *         description: book not found
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
 *      schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the deleted book
 *       404:
 *         description: book not found
 */

// http://localhost:8000/books
router
    .route('/')
    .get(asyncHandler(getAllBooks)) // GET  http://localhost:8000/books
    .post(asyncHandler(addBook)) // POST  http://localhost:8000/books

router.route('/author').get(asyncHandler(getBookByTitle))
router.route('/auther').get(asyncHandler(getBookByAuther))
router.route('/category').get(asyncHandler(getBookByCategory))
router.route('/isbn/').get(asyncHandler(getBookByISBN))

router.route('/update').patch(asyncHandler(updateBook))

router.route('/delete').delete(asyncHandler(deleteBook))

export default router
