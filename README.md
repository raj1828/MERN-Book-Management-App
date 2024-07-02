# Book Management App

A simple Book Management application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows you to perform CRUD operations on a list of books.

## Features

- Add new books
- View all books
- Update book details
- Delete books

## Technologies Used

- Frontend: React, Vite, Axios, Notistack, React Icons, React Router DOM
- Backend: Node.js, Express, Mongoose, Nodemon
- Database: MongoDB

## Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

### Backend Setup

1. Clone the repository
    ```sh
    git clone https://github.com/your-username/book-management-app.git
    cd book-management-app/backend
    ```

2. Install backend dependencies
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string
    ```
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the backend server
    ```sh
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend directory
    ```sh
    cd ../frontend
    ```

2. Install frontend dependencies
    ```sh
    npm install
    ```

3. Start the frontend development server
    ```sh
    npm run dev
    ```

## Usage

1. Ensure MongoDB is running on your local machine or Atlas.

2. Start the backend server (see Backend Setup).

3. Start the frontend development server (see Frontend Setup).

4. Open your browser and go to `http://localhost:3000` to see the app in action.

## Scripts

### Frontend

- `dev`: Start the Vite development server
- `build`: Build the application for production
- `lint`: Lint the code using ESLint
- `preview`: Preview the built application

### Backend

- `start`: Start the server
- `dev`: Start the server with Nodemon

## License

This project is licensed under the ISC License.
