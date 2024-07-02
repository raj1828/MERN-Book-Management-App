import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();
// Route for Save a new Book
router.post('/', async (req, res) => {
       try {
              const { title, author, publishYear } = req.body;
              if (!title || !author || !publishYear) {
                     return res.status(400).send({ message: 'Send all required fields: title, author, publishYear' });
              }
              const newBook = { title, author, publishYear };
              const book = await Book.create(newBook);
              return res.status(201).send(book);
       } catch (error) {
              console.log(error.message);
              res.status(500).send({ message: error.message });
       }
});
// Route to get all books form database
router.get('/', async (req, res) => {
       try {
              const books = await Book.find({});

              return res.status(200).json({
                     count: books.length,
                     data: books
              });
       } catch (error) {
              console.log(error.message);
              res.status(500).send({ message: error.message });
       }
});
// Route to get all books form database by id
router.get('/:id', async (req, res) => {
       try {
              const { id } = req.params;

              const book = await Book.findById(id);

              return res.status(200).json(book);
       } catch (error) {
              console.log(error.message);
              res.status(500).send({ message: error.message });
       }
});
// Route for Update a Book
router.put('/:id', async (req, res) => {
       try {
              const { title, author, publishYear } = req.body;
              if (!title || !author || !publishYear) {
                     return res.status(400).send({ message: 'Send all required fields: title, author, publishYear' });
              }

              const { id } = req.params;
              const result = await Book.findByIdAndUpdate(id, req.body);

              if (!result) {
                     return res.status(404).json({ message: 'Book not found' });
              }
              return res.status(200).send({ message: 'Book updated successfully' });


       } catch (error) {
              console.log(error.message);
              res.status(500).send({ message: error.message });
       }
})
// Delete the book
router.delete('/:id', async (req, res) => {
       try {
              const { id } = req.params;
              const result = await Book.findByIdAndDelete(id);
              if (!result) {
                     return res.status(404).json({ message: 'Book not found' });
              }
              return res.status(200).send({ message: 'Book Delete successfully' });
       } catch (error) {
              console.log(error.message);
              res.status(500).send({ message: error.message });
       }
})

export default router;