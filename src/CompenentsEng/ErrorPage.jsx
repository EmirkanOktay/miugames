import React from 'react';
import { Link } from 'react-router-dom'; // Geri dönmek için Link kullanacağız.

function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: "RGB(58, 15, 120)" }}>
            <h1 className="text-8xl font-bold mb-4 text-white animate__animated animate__fadeIn">
                404
            </h1>
            <p className="text-3xl mb-6 text-white animate__animated animate__fadeIn animate__delay-1s">
                Oops! Page Not Found
            </p>
            <p className="text-lg mb-8 text-white animate__animated animate__fadeIn animate__delay-2s">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="px-6 py-3 text-lg font-semibold bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
                Go Back Home
            </Link>
        </div>
    );
}

export default ErrorPage;
