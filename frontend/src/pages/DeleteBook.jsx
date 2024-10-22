import { useState } from "react"
import axios from "axios";
import BackButton from "../components/backButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";


const DeleteBook = () => {
       const [loading, setLoaging] = useState(false);
       const navigate = useNavigate();
       const { id } = useParams();
       const { enqueueSnackbar } = useSnackbar();

       const handleDeleteBook = () => {
              setLoaging(true);
              axios.delete(`https://mern-book-management-app-y77p.onrender.com/books/${id}`)
                     .then(() => {
                            setLoaging(false);
                            enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
                            navigate('/');
                     })
                     .catch((error) => {
                            setLoaging(false);
                            console.log(error);
                            //alert('Error deleting book check consloe');
                            enqueueSnackbar('Error', { varient: 'error' });

                     })
       };
       return (
              <div className='p-4'>
                     <BackButton />
                     <h1 className='text-3xl my-4'>Delete Book</h1>
                     {loading ? <Spinner /> : ''}
                     <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                            <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

                            <button
                                   className='p-4 bg-red-600 text-white m-8 w-full'
                                   onClick={handleDeleteBook}
                            >
                                   Yes, Delete it
                            </button>
                     </div>
              </div>
       )
}

export default DeleteBook