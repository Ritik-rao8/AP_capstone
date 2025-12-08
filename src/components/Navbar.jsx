import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {User, LogOut} from 'lucide-react';

function Navbar() {
    let [isMenuOpen, setIsMenuOpen]=useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {

        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        
        if (token && userData) {
            setIsLoggedIn(true);
            setUser(JSON.parse(userData));
        }

        // Listen for storage changes (in case user logs in from another tab)
        const handleStorageChange = () => {
            const token = localStorage.getItem('token');
            const userData = localStorage.getItem('user');
            if (token && userData) {
                setIsLoggedIn(true);
                setUser(JSON.parse(userData));
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUser(null);
        setShowProfileMenu(false);
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm z-40" />
            <div className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
                <nav className={`max-w-7xl mx-auto rounded-full bg-black/30 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 ${scrolled ? 'shadow-2xl bg-black/40' : ''}`}>
                <div className="px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white font-bold text-xl hover:scale-105 transition-transform duration-200">
                            BGMI <span className="text-[#f7b731]">HUB</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-200 hover:text-[#f7b731] transition-colors duration-200">
                            Home
                        </Link>
                        <Link to="/find-players" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-200 hover:text-[#f7b731] transition-colors duration-200">
                            Find Teammates
                        </Link>
                        <Link to="/knowledge" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-200 hover:text-[#f7b731] transition-colors duration-200">
                            Knowledge Hub
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {isLoggedIn ? (
                            <div className="relative">
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:text-white transition-colors duration-200 hover:scale-105 transform"
                                >
                                    <User size={20} />
                                    <span>{user?.name}</span>
                                </button>
                                
                                {showProfileMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg py-2">
                                        <Link 
                                            to="/profile" 
                                            className="block px-4 py-2 text-gray-200 hover:bg-white/5 hover:text-white transition-all duration-200 rounded-lg mx-2"
                                            onClick={() => {
                                                setShowProfileMenu(false);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            View Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-gray-200 hover:bg-white/5 hover:text-red-400 transition-all duration-200 flex items-center gap-2 rounded-lg mx-2"
                                        >
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-200 hover:text-white transition-colors duration-200 px-4 py-2">
                                    Login
                                </Link>
                                <Link 
                                    to="/signup"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="px-5 py-2 bg-[#f7b731] text-black font-medium rounded-full hover:bg-[#f7b731]/90 hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    Signup
                                </Link>
                            </>
                        )}
                    </div>

                    <button 
                        onClick={()=>setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2 hover:scale-110 transition-transform duration-200"
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
                    <div className="md:hidden border-t border-white/10 rounded-b-3xl overflow-hidden">
                        <div className="px-6 py-4 flex flex-col gap-3 bg-black/20">
                            <Link 
                                to="/" 
                                className="text-gray-200 hover:text-[#f7b731] transition-colors duration-200 py-2"
                                onClick={()=>{
                                    setIsMenuOpen(false);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/find-players" 
                                className="text-gray-200 hover:text-[#f7b731] transition-colors duration-200 py-2"
                                onClick={()=>{
                                    setIsMenuOpen(false);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                Find Teammates
                            </Link>
                            <Link 
                                to="/knowledge" 
                                className="text-gray-200 hover:text-[#f7b731] transition-colors duration-200 py-2"
                                onClick={()=>{
                                    setIsMenuOpen(false);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                Knowledge Hub
                            </Link>
                            <div className="border-t border-white/10 pt-3 mt-2 flex flex-col gap-3">
                                {isLoggedIn ? (
                                    <>
                                        <div className="text-white py-2 flex items-center gap-2">
                                            <User size={20} />
                                            <span>{user?.name}</span>
                                        </div>
                                        <Link 
                                            to="/profile" 
                                            className="text-gray-200 hover:text-white transition-colors duration-200 py-2"
                                            onClick={()=>{
                                                setIsMenuOpen(false);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            View Profile
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-left text-gray-200 hover:text-red-400 transition-colors duration-200 py-2 flex items-center gap-2"
                                        >
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link 
                                            to="/login" 
                                            className="text-gray-200 hover:text-white transition-colors duration-200 py-2"
                                            onClick={()=>{
                                                setIsMenuOpen(false);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            Login
                                        </Link>
                                        <Link 
                                            to="/signup" 
                                            className="px-5 py-2 bg-[#f7b731] text-black font-medium rounded-full hover:bg-[#f7b731]/90 transition-all duration-200 text-center shadow-lg"
                                            onClick={()=>{
                                                setIsMenuOpen(false);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            Signup
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
        </>
    );
}
export default Navbar;
