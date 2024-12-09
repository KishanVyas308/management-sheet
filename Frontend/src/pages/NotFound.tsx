import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src: string;
                loop: boolean;
                autoplay: boolean;
            };
        }
    }
}

const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navigates to the previous page
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-black">
            <LottieAnimation />
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="mb-8 text-lg">Sorry, the page you are looking for does not exist.</p>
            <button
                onClick={goBack}
                className="px-6 py-3 text-lg bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Go Back
            </button>
        </div>
    );
};

const LottieAnimation = () => {
    return (
        <DotLottieReact
            src="https://lottie.host/4a1d4d80-b739-4ef3-b33c-fa6a4fddd668/HOyGcuLdTk.lottie"
            loop
            autoplay
            className="w-1/2 mb-8"
        />
    );
};


export default NotFound;
