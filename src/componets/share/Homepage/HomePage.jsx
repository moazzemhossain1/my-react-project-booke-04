import React from 'react';
import BookImage from '../../../assets/book01.png'

const HomePage = () => {
    return (
        <div className='container mx-auto mt-10'>

            <div className="hero bg-base-200 min-h-screen p-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={BookImage} alt='book image'
                    />
                    <div>
                        <h1 className="text-[56px] text-[#131313] font-bold">Books to freshen up your bookshelf!</h1>
                       
                        <button className="btn mt-4 text-[#FFFFFF] text-[18px] font-semibold bg-[#23BE0A]">View The List</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;