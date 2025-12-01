import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import bgImage from '../assets/wp5119089-pubg-desktop-wallpapers.jpg'

export default function HomePage(){
    const [showSuccess, setShowSuccess] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Check for token in URL (from Google OAuth redirect)
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const name = urlParams.get('name');
        const email = urlParams.get('email');
        const error = urlParams.get('error');

        if (error) {
            alert('Google authentication failed. Please try again.');
            // Clean URL
            window.history.replaceState({}, document.title, '/');
        } else if (token && name && email) {
            // Store token in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify({ name, email }));
            
            setUserName(name);
            setShowSuccess(true);
            
            // Clean URL
            window.history.replaceState({}, document.title, '/');
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        }
    }, []);

    return (
        <section className="min-h-screen relative bg-center bg-cover flex items-center justify-center" style={{backgroundImage:`url(${bgImage})`}}>
            <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

            {showSuccess && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-900/90 border border-green-700 text-green-100 px-6 py-3 rounded-lg shadow-lg">
                    Welcome back, {userName}! You're successfully logged in.
                </div>
            )}

            <div className="relative z-10 max-w-4xl text-center px-6">
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                    <span className="block text-transparent bg-clip-text" style={{backgroundImage:'linear-gradient(90deg,#f7b731,#ff8c00)'}}>Find Your Perfect BGMI Squad</span>
                </h1>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">Connect with skilled players and dominate the battlegrounds.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/find-players" className="inline-block rounded-md px-6 py-3 font-semibold text-white shadow-md hover:scale-105 transition" style={{backgroundImage:'linear-gradient(90deg,#f7b731,#ff8c00)'}} aria-label="Find Players">Find Players</Link>

                    <Link to="/create-profile" className="inline-block rounded-md px-6 py-3 font-semibold text-white border-2 border-[#f7b731] hover:bg-[#f7b731] hover:text-black transition" aria-label="Create Profile">Create Profile</Link>
                </div>
            </div>
        </section>
    )
}
