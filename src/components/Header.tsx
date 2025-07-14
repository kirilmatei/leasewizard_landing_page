"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-4 z-50 w-full lg:top-6">
            <div className="container mx-auto px-4 md:px-6 ">
                <div className={`relative flex h-[60px] w-full items-center justify-between rounded-lg px-4 py-1.5 transition-[box-shadow_background-color_border-color] duration-300 motion-reduce:transition-none lg:grid lg:grid-cols-[1fr_auto_1fr] lg:rounded-2xl lg:py-[0.4375rem] lg:pr-[0.4375rem] bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 backdrop-blur-sm ${isScrolled
                    ? 'border border-gray-700 shadow-[0px_8px_25px_rgba(0,_0,_0,_0.4)] shadow-blue-500/10'
                    : 'border border-gray-800/50 shadow-none'
                    }`}>

                    {/* Logo */}
                    <Link
                        href="/"
                        aria-label="Homepage"
                        className="relative flex w-fit items-center gap-2 overflow-hidden lg:px-3"
                    >
                        <div className="pointer-events-none relative -ml-0.5 size-6 lg:-ml-1 lg:mr-px lg:size-8">
                            <Image
                                alt="LeaseWizard Logo"
                                width={32}
                                height={32}
                                className="absolute transition-opacity duration-500 rounded-md"
                                src="/static/logos/favicon.png"
                            />
                        </div>
                        <svg
                            className="h-[14px] text-white lg:h-[16px]"
                            fill="currentColor"
                            viewBox="0 0 120 13"
                            xmlns="http://www.w3.org/2000/svg"
                        >

                            <text x="0" y="10" fontSize="14" fontFamily="Poppins, sans-serif" fontWeight="600">
                                LeaseWizard
                            </text>
                        </svg>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="col-start-2 gap-5 px-2 font-medium text-gray-300 xl:gap-6 hidden lg:flex">
                        {/* <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-white hover:bg-gray-800 rounded-md motion-reduce:transition-none"
                                href="/pricing"
                            >
                                Pricing
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-white hover:bg-gray-800 rounded-md motion-reduce:transition-none"
                                href="/features"
                            >
                                Features
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-white hover:bg-gray-800 rounded-md motion-reduce:transition-none"
                                href="/contact"
                            >
                                Demo
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-white hover:bg-gray-800 rounded-md motion-reduce:transition-none"
                                href="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-white hover:bg-gray-800 rounded-md motion-reduce:transition-none"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop Action Buttons */}
                    <div className="col-start-3 hidden w-full justify-end gap-2 lg:flex">
                        <Link
                            className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg disabled:pointer-events-none disabled:opacity-50 overflow-hidden transition-[color,background-color,border-color,opacity] before:absolute before:-inset-0 after:absolute after:inset-0 motion-reduce:transition-none bg-gradient-to-br from-gray-800 to-gray-900 text-white border border-gray-700 hover:!border-blue-500/30 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 after:transition-colors after:duration-300 md:px-4 md:py-2.5 font-medium text-sm/[1.125rem] tracking-normal group"
                            role="button"
                            href="/login"
                        >
                            <span className="relative z-10 flex group-hover:text-blue-200 transition-colors duration-300">Sign in</span>
                        </Link>
                        <Link
                            href="/demo"
                            className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg disabled:pointer-events-none disabled:opacity-50 overflow-hidden transition-[color,background-color,border-color,opacity] after:absolute after:inset-0 motion-reduce:transition-none bg-gradient-to-br from-blue-600 to-blue-700 text-white after:bg-gradient-to-t after:from-blue-700 after:to-blue-500 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 after:transition-[color,background-color,border-color,opacity] after:duration-300 hover:after:opacity-80 md:px-4 md:py-3.5 font-medium text-sm/[1.125rem] tracking-normal group hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            <span className="relative z-10 flex">
                                <span className="flex items-center gap-3">
                                    <svg
                                        className="w-3 -translate-y-px overflow-visible md:w-3.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M5 12h14M12 5l7 7-7 7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Try Demo
                                </span>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="contents">
                        <button
                            className="relative p-2 lg:hidden text-white hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle mobile menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                {/* Hamburger Lines */}
                                <span
                                    className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                        ? 'rotate-45 translate-y-0'
                                        : '-translate-y-2'
                                        }`}
                                />
                                <span
                                    className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                        ? 'opacity-0'
                                        : 'opacity-100'
                                        }`}
                                />
                                <span
                                    className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                        ? '-rotate-45 translate-y-0'
                                        : 'translate-y-2'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl border border-gray-700 lg:hidden backdrop-blur-sm"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {/* <Link
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-300"
                                href="/pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-300"
                                href="/features"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-300"
                                href="/demo"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Demo
                            </Link> */}
                            {/* <Link
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-300"
                                href="/blog"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link> */}
                            <Link
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-300"
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="border-t border-gray-700 pt-2 mt-2">
                                <Link
                                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors duration-300"
                                    href="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sign in
                                </Link>
                                <Link
                                    className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-md transition-colors duration-300 mt-2"
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Try Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
} 