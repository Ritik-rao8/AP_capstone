import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Find Players', path: '/find-players' },
        { label: 'Knowledge Hub', path: '/knowledge' },
        { label: 'About', path: '/about' },
    ];

    const isActive = (path) => location.pathname === path;

    const handleNavClick = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-yellow-400/30 z-[1000] transition-all duration-300">
            <div className="max-w-[1400px] mx-auto px-5 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0 min-w-fit">
                    <button 
                        onClick={() => navigate('/')} 
                        className="bg-transparent border-none cursor-pointer p-0 flex items-center group"
                    >
                        <span 
                            className="text-yellow-400 text-base sm:text-sm md:text-base lg:text-lg font-bold tracking-[2px] transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(247,183,49,0.6)]"
                            style={{ 
                                fontFamily: 'Orbitron, sans-serif',
                                textShadow: '0 0 10px rgba(247, 183, 49, 0.3)'
                            }}
                        >
                            BGMI Squad Finder
                        </span>
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex list-none gap-10 m-0 p-0 flex-1 justify-center items-center">
                    {navLinks.map((link) => (
                        <li key={link.path} className="relative">
                            <button 
                                onClick={() => handleNavClick(link.path)} 
                                className={`relative bg-transparent border-none font-medium text-sm tracking-wide uppercase cursor-pointer transition-all duration-300 py-2 group ${
                                    isActive(link.path) 
                                        ? 'text-yellow-400' 
                                        : 'text-gray-200 hover:text-yellow-400'
                                }`}
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                {link.label}
                                <span 
                                    className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 shadow-[0_0_10px_rgba(247,183,49,0.5)] ${
                                        isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                ></span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex gap-3 flex-shrink-0">
                    <button 
                        onClick={() => navigate('/login')} 
                        className="relative px-5 py-2.5 bg-transparent text-yellow-400 border-[1.5px] border-yellow-400 rounded-md font-semibold text-xs cursor-pointer transition-all duration-300 overflow-hidden hover:bg-yellow-400/10 hover:-translate-y-0.5 hover:shadow-[inset_0_0_15px_rgba(247,183,49,0.2),0_0_25px_rgba(247,183,49,0.5)] active:translate-y-0 shadow-[inset_0_0_15px_rgba(247,183,49,0.1),0_0_15px_rgba(247,183,49,0.2)]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        <span className="relative z-10 whitespace-nowrap">Log In</span>
                    </button>
                    <button 
                        onClick={() => navigate('/signup')} 
                        className="relative px-5 py-2.5 bg-yellow-400 text-black border-none rounded-md font-semibold text-xs cursor-pointer transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(247,183,49,0.6),0_0_60px_rgba(247,183,49,0.3)] active:translate-y-0 shadow-[0_0_20px_rgba(247,183,49,0.4),0_0_40px_rgba(247,183,49,0.2)]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        <span className="relative z-10 whitespace-nowrap">Sign Up</span>
                    </button>
                </div>

                {/* Mobile Hamburger Menu */}
                <button 
                    className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span 
                        className={`w-6 h-0.5 bg-yellow-400 rounded-sm transition-all duration-300 shadow-[0_0_10px_rgba(247,183,49,0.5)] ${
                            isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
                        }`}
                    ></span>
                    <span 
                        className={`w-6 h-0.5 bg-yellow-400 rounded-sm transition-all duration-300 shadow-[0_0_10px_rgba(247,183,49,0.5)] ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span 
                        className={`w-6 h-0.5 bg-yellow-400 rounded-sm transition-all duration-300 shadow-[0_0_10px_rgba(247,183,49,0.5)] ${
                            isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
                        }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-yellow-400/30 animate-slide-down">
                    <div className="p-5 max-w-[1400px] mx-auto">
                        {/* Mobile Nav Links */}
                        <ul className="list-none m-0 mb-5 p-0 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <button 
                                        onClick={() => handleNavClick(link.path)} 
                                        className={`w-full text-left bg-transparent border-none font-medium text-sm tracking-wide uppercase cursor-pointer transition-all duration-300 p-2.5 rounded-md ${
                                            isActive(link.path)
                                                ? 'text-yellow-400 bg-yellow-400/10 shadow-[inset_0_0_15px_rgba(247,183,49,0.1),0_0_15px_rgba(247,183,49,0.2)]'
                                                : 'text-gray-200 hover:text-yellow-400 hover:bg-yellow-400/10 hover:shadow-[inset_0_0_15px_rgba(247,183,49,0.1),0_0_15px_rgba(247,183,49,0.2)]'
                                        }`}
                                        style={{ 
                                            fontFamily: 'Poppins, sans-serif',
                                            textShadow: isActive(link.path) ? '0 0 10px rgba(247,183,49,0.5)' : 'none'
                                        }}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Auth Buttons */}
                        <div className="flex flex-col gap-3 border-t border-yellow-400/20 pt-4">
                            <button 
                                onClick={() => handleNavClick('/login')} 
                                className="w-full px-5 py-3 bg-transparent text-yellow-400 border-[1.5px] border-yellow-400 rounded-md font-semibold text-xs cursor-pointer transition-all duration-300 text-center hover:bg-yellow-400/10 hover:shadow-[inset_0_0_15px_rgba(247,183,49,0.2),0_0_25px_rgba(247,183,49,0.5)] shadow-[inset_0_0_15px_rgba(247,183,49,0.1),0_0_15px_rgba(247,183,49,0.2)]"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                <span className="relative z-10">Log In</span>
                            </button>
                            <button 
                                onClick={() => handleNavClick('/signup')} 
                                className="w-full px-5 py-3 bg-yellow-400 text-black border-none rounded-md font-semibold text-xs cursor-pointer transition-all duration-300 text-center hover:shadow-[0_0_30px_rgba(247,183,49,0.6),0_0_60px_rgba(247,183,49,0.3)] shadow-[0_0_20px_rgba(247,183,49,0.4),0_0_40px_rgba(247,183,49,0.2)]"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                <span className="relative z-10">Sign Up</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
