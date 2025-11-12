import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full bg-black">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black overflow-hidden">
                {/* Background Image with Parallax */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                >
                    <div 
                        className="absolute inset-0 object-cover opacity-50 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')`,
                        }}
                    ></div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>

                {/* Animated Particles */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-float-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${4 + Math.random() * 3}s`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Heading with Fade-in Animation */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-fade-in-up"
                        style={{
                            fontFamily: 'Orbitron, sans-serif',
                            textShadow: '0 0 10px rgba(247, 183, 49, 0.6), 0 0 20px rgba(247, 183, 49, 0.4)',
                            filter: 'drop-shadow(0 0 10px rgba(247, 183, 49, 0.6))',
                        }}>
                        Find Your Perfect BGMI Squad
                    </h1>

                    {/* Subtext with Fade-in Animation */}
                    <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                        }}>
                        Connect with skilled players, form unbeatable teams, and climb to Conqueror together.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
                        <button 
                            onClick={() => navigate('/find-players')}
                            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-lg shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                            }}>
                            <span className="relative z-10">Find Players</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 blur-xl bg-yellow-400/50 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        </button>

                        <button 
                            onClick={() => navigate('/signup')}
                            className="group relative px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:scale-105 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(247,183,49,0.5)] transition-all duration-300"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                            }}>
                            <span className="relative z-10">Create Profile</span>
                        </button>
                    </div>

                    {/* Stats Badge */}
                    <div className="mt-16 animate-fade-in-up animation-delay-600">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-300 text-sm md:text-base font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Join 10,000+ active BGMI players
                            </span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
                    <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1.5 h-3 bg-yellow-400 rounded-full animate-scroll-down"></div>
                    </div>
                </div>
            </section>

            {/* Additional Content Sections Can Go Here */}
        </div>
    );
};

export default Homepage;
