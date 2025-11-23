import {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    let [isMenuOpen, setIsMenuOpen]=useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-black/50 backdrop-blur-sm border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-white font-bold text-xl">
                        BGMI <span className="text-yellow-400">HUB</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-gray-200 hover:text-yellow-400 transition">
                        Home
                    </Link>
                    <Link to="/teammates" className="text-gray-200 hover:text-yellow-400 transition">
                        Find Teammates
                    </Link>
                    <Link to="/knowledge" className="text-gray-200 hover:text-yellow-400 transition">
                        Knowledge Hub
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="text-gray-200 hover:text-white transition px-4 py-2">
                        Login
                    </Link>
                    <Link 
                        to="/signup" 
                        className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-600 hover:to-orange-600 transition"
                    >
                        Signup
                    </Link>
                </div>

                <button 
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black border-t border-gray-800">
                    <div className="px-4 py-3 flex flex-col gap-3">
                        <Link 
                            to="/" 
                            className="text-gray-200 hover:text-yellow-400 transition py-2"
                            onClick={()=>setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/teammates" 
                            className="text-gray-200 hover:text-yellow-400 transition py-2"
                            onClick={()=>setIsMenuOpen(false)}
                        >
                            Find Teammates
                        </Link>
                        <Link 
                            to="/knowledge" 
                            className="text-gray-200 hover:text-yellow-400 transition py-2"
                            onClick={()=>setIsMenuOpen(false)}
                        >
                            Knowledge Hub
                        </Link>
                        <div className="border-t border-gray-800 pt-3 mt-2 flex flex-col gap-3">
                            <Link 
                                to="/login" 
                                className="text-gray-200 hover:text-white transition py-2"
                                onClick={()=>setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link 
                                to="/signup" 
                                className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-600 hover:to-orange-600 transition text-center"
                                onClick={()=>setIsMenuOpen(false)}
                            >
                                Signup
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
export default Navbar;
