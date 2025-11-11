import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState('');
    const [showPassword,setShowPassword]=useState(false);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError('');

        if (!email.trim()) {
            setError('Email is required');
            return;
        }
        if (!password.trim()) {
            setError('Password is required');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email');
            return;
        }
        if (password.length<6) {
            setError('Password must be at least 6 characters');
            return;
        }

        try {
            setLoading(true);
            const response=await fetch(`${import.meta.env.VITE_API_URL}/api/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email,password}),
            });

            const data=await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            console.log('Login successful:',data);
        } catch (err) {
            setError(err.message||'An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-600 mt-2">Sign in to your account</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword?'text':'password'}
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <button
                                type="button"
                                onClick={()=>setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                            >
                                {showPassword?'🙈':'👁️'}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition ${
                            loading
                                ?'bg-gray-400 text-gray-600 cursor-not-allowed'
                                :'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
                        }`}
                    >
                        {loading?'Signing in...':'Sign In'}
                    </button>
                </form>

                <p className="text-center text-gray-600 text-sm mt-4">
                    Don't have an account?{' '}
                    <button onClick={()=>navigate('/signup')} className="text-blue-600 hover:text-blue-700 font-medium transition cursor-pointer bg-none border-none p-0">
                        Sign up
                    </button>
                </p>
                <p className="text-center text-gray-600 text-sm mt-3">
                    <button onClick={()=>navigate('/')} className="text-blue-600 hover:text-blue-700 font-medium transition cursor-pointer bg-none border-none p-0">
                        Back to home
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;