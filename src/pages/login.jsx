import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Eye,EyeOff} from 'lucide-react';
import {FcGoogle} from 'react-icons/fc';

const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const [showPassword,setShowPassword]=useState(false);
    const [step,setStep]=useState(1);

    const handleEmailSubmit=(e)=>{
        e.preventDefault();
        setError('');

        if (!email.trim()) {
            setError('Email is required');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email');
            return;
        }

        setStep(2);
    };

    const handlePasswordSubmit=async(e)=>{
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!password.trim()) {
            setError('Password is required');
            return;
        }
        if (password.length<6) {
            setError('Password must be at least 6 characters');
            return;
        }

        try {
            setLoading(true);
            const response=await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email,password}),
            });

            let data
            const contentType=response.headers.get('content-type')||''
            if(contentType.includes('application/json')){
                data=await response.json()
            }else{
                const text=await response.text()
                throw new Error('Server returned unexpected response: '+text)
            }

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Store token and user data in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            setSuccess('Login successful! Redirecting to home...');
            console.log('Login successful:',data);

            setTimeout(() => {
                navigate('/');
                window.location.reload(); // Refresh to update navbar
            }, 2000);
        } catch (err) {
            setError(err.message||'An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    if(step===1){
        return (
            <div className="min-h-screen flex items-center justify-center p-4" style={{backgroundColor:'#121212'}}>
                <div className="rounded-lg w-full max-w-sm p-8" style={{backgroundColor:'#121212'}}>
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg">
                            <p className="text-red-400 text-sm">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleEmailSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder:text-gray-500 text-white"
                                style={{backgroundColor:'#121212'}}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-lg font-medium transition bg-yellow-500 text-black hover:bg-yellow-600 active:scale-95"
                        >
                            Continue
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-700"></div>
                        <span className="px-4 text-sm text-gray-500">or</span>
                        <div className="flex-1 border-t border-gray-700"></div>
                    </div>

                    <button
                        type="button"
                        onClick={()=>{
                            window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`;
                        }}
                        className="w-full mb-6 py-2 px-4 border border-gray-700 rounded-lg font-medium text-gray-300 hover:bg-gray-900 transition flex items-center justify-center gap-3"
                        style={{backgroundColor:'#121212'}}
                    >
                        <FcGoogle size={20} />
                        Continue with Google
                    </button>

                    <p className="text-center text-gray-400 text-sm mb-3">
                        Don't have an account?
                    </p>
                    <button onClick={()=>navigate('/signup')} className="w-full text-yellow-500 hover:text-yellow-600 font-medium transition cursor-pointer bg-none border-none p-0">
                        Sign up
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4" style={{backgroundColor:'#121212'}}>
            <div className="rounded-lg w-full max-w-sm p-8" style={{backgroundColor:'#121212'}}>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    <p className="text-gray-400 mt-2 text-sm">{email}</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg">
                        <p className="text-red-400 text-sm">{error}</p>
                    </div>
                )}

                {success && (
                    <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded-lg">
                        <p className="text-green-400 text-sm">{success}</p>
                    </div>
                )}

                <form onSubmit={handlePasswordSubmit}>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword?'text':'password'}
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition placeholder:text-gray-500 text-white"
                                style={{backgroundColor:'#121212'}}
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={()=>setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition"
                            >
                                {showPassword?<EyeOff size={20} />:<Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition ${
                            loading
                                ?'bg-gray-700 text-gray-500 cursor-not-allowed'
                                :'bg-yellow-500 text-black hover:bg-yellow-600 active:scale-95'
                        }`}
                    >
                        {loading?'Signing in...':'Sign In'}
                    </button>
                </form>

                <button
                    type="button"
                    onClick={()=>setStep(1)}
                    className="w-full mt-4 text-sm text-yellow-500 hover:text-yellow-600 font-medium transition"
                >
                    Use different email
                </button>

                <p className="text-center text-gray-400 text-sm mt-6 mb-3">
                    Don't have an account?
                </p>
                <button onClick={()=>navigate('/signup')} className="w-full text-yellow-500 hover:text-yellow-600 font-medium transition cursor-pointer bg-none border-none p-0">
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Login;