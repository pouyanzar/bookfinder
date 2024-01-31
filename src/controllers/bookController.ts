import { type ExpressFunction } from '../types/expressFunction'
import Book from '../models/bookModel'

export const getAllBooks: ExpressFunction = async (req, res) => {
    try {
        const books = await Book.find()

        res.status(200).json({
            status: 'success',
            results: books.length,
            data: {
                books,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export const getBookByTitle: ExpressFunction = async (req, res) => {
    try {
        const books = await Book.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: { books },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export const getBookByAuther: ExpressFunction = async (req, res) => {
    try {
        const books = await Book.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: { books },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export const getBookByCategory: ExpressFunction = async (req, res) => {
    try {
        const books = await Book.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: { books },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export const getBookByISBN: ExpressFunction = async (req, res) => {
    try {
        const books = await Book.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: { books },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export const addBook: ExpressFunction = async (req, res) => {
    try {
        const newBook = await Book.create(req.body)

        res.status(200).json({
            status: 'success',
            data: {
                book: newBook,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}

export const updateBook: ExpressFunction = async (req, res) => {
    try {
        // console.log(String(Object.keys(req.body)[0]))
        // const newfield = await Book.findByIdAndUpdate(req.params.id, {[Object.keys(req.body)[0]]: Object.values(req.body)},()=>{
        const newfield = await Book.findByIdAndUpdate(req.params.id, {
            author: req.body.author,
        })

        res.status(200).json({
            status: 'success',
            data: {
                book: newfield,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        })
    }
}
