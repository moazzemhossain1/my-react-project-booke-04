


    import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const SingleBokDitles = () => {

    const [storedBook,setStoredBook]=useState([]);





    const handleWishtList=(bookId)=>{
        console.log("Moazze Id",bookId)
        
    }






    const handleReadBook = (creandBood) => {
        console.log("bookId", creandBood);

        const isExzeted=storedBook.find(book => book.bookId === creandBood.bookId);
        if(isExzeted){
            alert("The book is alerd exzeded")
        }
        else{
            setStoredBook([...storedBook,creandBood])
        }
    };

    const book = useLoaderData();

    const { 
        bookId,
        bookName,
        image,
        author,
        rating,
        category,
        review,
        publisher,
        yearOfPublishing,
        totalPages,
        tags
    } = book;
    //  const params=useParams;
    //  console.log(params)
    return (
        <div className='container mx-auto mt-10'>
            <div className="hero bg-base-200 items-start">
                <div className="hero-content flex-col lg:flex-row">
                   <figure  className='
                    p-20 shadow-2xl m-5 bg-[#F3F3F3] rounded-2xl h-[700px] '>
                     <img
                        src={image}
                        className=" max-w-sm h-[400px] rounded-lg shadow-2xl"
                    />
                   </figure>
                    <div className=' items-start mb-10'>
                               <h3 className=' font-bold text-[24px] text-[#131313] ml-5'>{bookName}</h3>
                               <p className='font-medium text-[16px] text-[#131313] ml-5'>{author}</p>
                     
                        <div className='border-1 mt-5 w-full'></div>
                        <h3 className='mt-5'>{category}</h3>
                        <div className='border-1 mt-5 w-full'></div>

                        <h3 className='mt-5 text-[]'><span className='font-bold text-xl'>Review</span>:{review}</h3>
                        <div className='flex gap-4 mt-5'>
                             {book.tags.map((tag,index) => <div key={index} className="badge bg-[#23BE0A]">{tag}</div> )}
                        </div>
                            <div className='border-1 mt-5 w-full'></div>

                            <div className='space-y-2'>
                                <h3 className='font-semibold flex gap-6'>Number of Pages:   {totalPages}</h3>
                                <h3 className='font-semibold flex gap-6'>Publisher:         {publisher}</h3>
                                <h3 className='font-semibold flex gap-6'>Year of Publishing:{yearOfPublishing}</h3>
                                <h3 className='font-semibold flex gap-6'>Rating:            {rating}</h3>

                                 <div className=' flex gap-4'>
                            <button onClick={()=> handleReadBook(book) } className='btn text-[#131313]'>Read List</button>
                            <button onClick={()=> handleWishtList(bookId)} className='btn text-white bg-[#50B1C9]'>Wishlist</button>
                            </div> 
                            </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default SingleBokDitles;