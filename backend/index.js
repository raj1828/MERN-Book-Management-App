import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

// Middleware to parse JSON
app.use(express.json());

//Middleware to handle CORS Policy
// Custom  Origin 
app.use(
       cors({
              origin: 'https://mern-book-management-app.vercel.app', // No trailing slash
              methods: ['GET', 'POST', 'DELETE', 'PUT'],
              allowedHeaders: ['Content-Type'],
              credentials: true
       })
);

// Creating new route
app.get('/', (req, res) => {
       console.log(req);
       return res.status(234).send('Welcome to Mern STacker');
});

app.use('/books', booksRoutes);
mongoose
       .connect(mongoDBURL)
       .then(() => {
              console.log('App connected to database');
              app.listen(PORT, () => {
                     console.log(`App listening on port: ${PORT}`);
              });
       })
       .catch((error) => {
              console.error(error);
       });
