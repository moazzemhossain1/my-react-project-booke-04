import React from 'react';
import taraImage from '../../../assets/tara.png'
import { Link } from 'react-router';

const BookDetile = ({ book }) => {
    const { bookName, image ,author,rating,category} = book;
    return (
        <Link to={`/bokeDitles/${book.bookId}`} className=' '>
           
            <div className="card bg-base-100  shadow-xl border-2 rounded-2xl">
                <figure className='p-5 m-5 bg-[#F3F3F3] rounded-2xl'>
                    <img
                        src={image}
                        alt="Book Image" className=' w-[150px] h-[200px] mb-8 mt-10 shadow-2xl ' />
                </figure>
                <div className="card-body  flex flex-row gap-8">
                    
                        
                        {book.tags.map((tag,index) => <div key={index} className="badge bg-[#23BE0A]">{tag}</div> )}
                    
                   
                    </div>
                     <h3 className='font-bold text-[24px] text-[#131313] ml-5'>{bookName}</h3>
                     <p className='font-medium text-[16px] text-[#131313] ml-5'>{author}</p>
                     <div className='border-1 w-full mr mt-5 mb-5'></div>
                    <div className="card-actions justify-between">
                        
                        <div className="m-2.5 btn">{category}</div>
                        <div className="flex gap-1 m-2.5 btn"><img src={taraImage}></img>{rating}</div>
                </div>
            </div>
        </Link>
    );
};

export default BookDetile;