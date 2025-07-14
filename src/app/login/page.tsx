"use client";
import { useState } from 'react';
import Link from "next/link";
import Header from "@/components/Header";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [authStatus, setAuthStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSigningIn(true);

        try {
            // Simulate authentication - in real implementation, this would call your auth API
            await new Promise(resolve => setTimeout(resolve, 2000));

            // For demo purposes, show user doesn't exist then redirect to contact
            setAuthStatus('error');
            setTimeout(() => {
                window.location.href = '/contact';
            }, 3000);
        } catch {
            setAuthStatus('error');
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />

            <main className="pt-32 pb-20 px-4 md:px-12">
                {/* Hero Section */}
                <section className="max-w-md mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text mb-6">
                            Welcome Back
                        </h1>
                        <p className="text-lg text-gray-300 max-w-md mx-auto">
                            Sign in to your LeaseWizard account and continue streamlining your lease abstraction process.
                        </p>
                    </div>
                </section>

                {/* Login Form Section */}
                <section className="max-w-md mx-auto">
                    <div className="relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-700">
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
                            <div className="login-circle-1"></div>
                            <div className="login-circle-2"></div>
                            <div className="login-circle-3"></div>
                            {/* Login particles */}
                            <div className="login-particle"></div>
                            <div className="login-particle"></div>
                            <div className="login-particle"></div>
                            <div className="login-particle"></div>
                        </div>

                        <div className="relative z-10">
                            {/* Login Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="rememberMe"
                                            name="rememberMe"
                                            type="checkbox"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                                        />
                                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <Link href="/forgot-password" className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>

                                {/* Sign In Button */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSigningIn}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSigningIn ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Signing in...
                                            </>
                                        ) : (
                                            <>
                                                Sign In
                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Status Messages */}
                                {authStatus === 'error' && (
                                    <div className="text-center p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                                        <p className="text-red-400 font-medium">
                                            ✗ User doesn&apos;t exist. Please get in touch with us.
                                        </p>
                                        <p className="text-red-300 text-sm mt-2">
                                            Redirecting to contact page...
                                        </p>
                                    </div>
                                )}
                            </form>

                            {/* Divider */}
                            <div className="mt-8">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-600"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-3 px-4 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:border-gray-500 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-2">GitHub</span>
                                </button>

                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center py-3 px-4 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:border-gray-500 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                    <span className="ml-2">Google</span>
                                </button>
                            </div>

                            {/* Sign Up Link */}
                            <div className="text-center mt-8">
                                <p className="text-sm text-gray-400">
                                    Don&apos;t have an account?{' '}
                                    <Link href="/signup" className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300">
                                        Sign up for free
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </main>
        </div>
    );
}