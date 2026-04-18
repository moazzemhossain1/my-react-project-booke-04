import React from 'react';
import { Link } from 'react-router';

const ErrorePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">

            {/* Image */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="Error"
                className="w-60 mb-6"
            />

            {/* Title */}
            <h1 className="text-5xl font-bold text-red-500">404</h1>

            {/* Subtitle */}
            <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>

            {/* Description */}
            <p className="mt-3 text-gray-500 max-w-md">
                Oops! The page you're looking for doesn’t exist or has been moved.
            </p>

            {/* Button */}
            <Link to="/" className="btn bg-[#23BE0A] text-[18px] text-white font-semibold mt-6">
                Go Back Home
            </Link>

        </div>
    );
};

export default ErrorePage;