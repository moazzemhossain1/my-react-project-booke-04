import React, { use } from 'react';
import BookDetile from './BookDetile';

const booksPromise=fetch('/booksData.json').then(res => res.json());


const AllBooks = () => {
    const booksData=use(booksPromise);
    console.log(booksData)
   
    return (
        <div className='my-12'>
            <h3 className="text-center text-4xl font-bold">Books</h3>
            <div className='container mx-auto mt-10 grid sm:grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 text-left gap-4'>
                {
                    booksData.map((book) => <BookDetile book={book}></BookDetile> )
                }
            </div>
            
            
        </div>
    );
};

export default AllBooks;