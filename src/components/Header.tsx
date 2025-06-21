"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-4 z-50 w-full lg:top-6">
            <div className="container box-border !max-w-[1672px] !px-6 md:!px-9">
                <div className="relative flex h-[60px] w-full items-center justify-between rounded-lg border border-transparent px-2 py-1.5 transition-[box-shadow_background-color_border-color] duration-300 motion-reduce:transition-none lg:grid lg:grid-cols-[1fr_auto_1fr] lg:rounded-2xl lg:py-[0.4375rem] lg:pr-[0.4375rem] bg-white shadow-[0px_5px_18px_rgba(204,_204,_204,_0.2)] dark:border-gray-900 dark:bg-white dark:shadow-[0px_5px_18px_rgba(204,_204,_204,_0.1)]">

                    {/* Logo */}
                    <Link
                        href="/"
                        aria-label="Homepage"
                        className="relative flex w-fit items-center gap-0.5 overflow-hidden lg:px-3"
                    >
                        <div className="pointer-events-none relative -ml-0.5 size-6 mix-blend-multiply dark:mix-blend-lighten lg:-ml-1 lg:mr-px lg:size-8">
                            <img
                                alt="LeaseWizard Logo"
                                width="32"
                                height="32"
                                decoding="async"
                                className="absolute transition-opacity duration-500"
                                style={{ color: "transparent" }}
                                src="/images/favicon.png"
                            />
                        </div>
                        <svg
                            className="h-[13px] text-gray-900 lg:h-[17px]"
                            fill="currentColor"
                            viewBox="0 0 120 13"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <text x="0" y="10" fontSize="12" fontFamily="Poppins, sans-serif" fontWeight="600">
                                LeaseWizard
                            </text>
                        </svg>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="col-start-2 gap-5 px-2 font-medium text-gray-700 dark:text-gray-200 xl:gap-6 hidden lg:flex">
                        <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md motion-reduce:transition-none"
                                href="/pricing"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md motion-reduce:transition-none"
                                href="/features"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md motion-reduce:transition-none"
                                href="/demo"
                            >
                                Demo
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md motion-reduce:transition-none"
                                href="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="transition-colors duration-300 p-2 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md motion-reduce:transition-none"
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop Action Buttons */}
                    <div className="col-start-3 hidden w-full justify-end gap-2 lg:flex">
                        <Link
                            className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg disabled:pointer-events-none disabled:opacity-50 overflow-hidden transition-[color,background-color,border-color,opacity] before:absolute before:-inset-0 after:absolute after:inset-0 motion-reduce:transition-none bg-white text-black border border-gray-100 dark:border-gray-800 hover:!border-gray-400 after:transition-colors after:duration-300 md:px-4 md:py-3.5 font-medium text-sm/[1.125rem] tracking-normal"
                            role="button"
                            href="/login"
                        >
                            <span className="relative z-10 flex">Sign in</span>
                        </Link>
                        <Link
                            href="/demo"
                            className="relative inline-flex items-center justify-center whitespace-nowrap rounded-lg disabled:pointer-events-none disabled:opacity-50 overflow-hidden transition-[color,background-color,border-color,opacity] after:absolute after:inset-0 motion-reduce:transition-none bg-black text-white after:bg-gradient-to-t after:from-gray-800 after:to-gray-600 dark:after:from-gray-100 dark:after:to-gray-100 after:transition-[color,background-color,border-color,opacity] after:duration-300 hover:after:opacity-80 md:px-4 md:py-3.5 font-medium text-sm/[1.125rem] tracking-normal"
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
                            className="relative size-6 lg:hidden"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label="Menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg
                                className={`hamburger -ml-2 -mt-2 size-10 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}
                                viewBox="0 0 100 100"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                                strokeWidth="5.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    className={`line top transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                                    d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                                />
                                <path
                                    className={`line transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                                    d="m 70,50 h -40"
                                />
                                <path
                                    className={`line bottom transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                                    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 lg:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            <Link
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-300"
                                href="/pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-300"
                                href="/features"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-300"
                                href="/demo"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Demo
                            </Link>
                            <Link
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-300"
                                href="/blog"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-300"
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="border-t border-gray-200 pt-2 mt-2">
                                <Link
                                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-300"
                                    href="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sign in
                                </Link>
                                <Link
                                    className="block px-3 py-2 bg-black text-white hover:bg-gray-800 rounded-md transition-colors duration-300 mt-2"
                                    href="/demo"
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