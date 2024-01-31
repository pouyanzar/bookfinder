import { type InferSchemaType, Schema, model } from 'mongoose'

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
    },
    categories: {
        type: String,
        enum: [
            'Animals, Bugs & Pets',
            'Art, Creativity & Music',
            'General Literature',
            'Hobbies, Sports & Outdoors',
            'Science Fiction & Fantasy',
            'Science & Technology',
            'Mystery & Suspense',
            'Reference',
        ],
    },
    ISBN: {
        type: Number,
    },
})

type Book = InferSchemaType<typeof bookSchema>

export default model<Book>('Book', bookSchema)
