import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div className="bg-gray-900 text-white">
            <Header />
            {/* Header will be a separate component */}
            <main className="pt-20">
                <div className="bg-gray-900">
                    <div id="hero" className="relative w-full flex justify-center overflow-hidden py-10">
                        <img src="/images/cloud.svg" className="absolute w-full z-0 object-cover top-60 lg:-top-24" alt="" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 z-10 lg:h-screen">

                            {/* Hero Text Section */}
                            <section className="text-white py-16 px-6 my-16 lg:col-start-3 lg:col-span-8">
                                <div className="container mx-auto text-center">
                                    {/* Main Heading */}
                                    <h2 className="text-4xl md:text-6xl mb-6 font-poppins font-normal">AI Lease Contract Abstractions</h2>
                                    {/* Description */}
                                    <p className="text-md font-light text-gray-400 mb-8">
                                        Abstract your real estate lease contract with AI and see all critical dates,<br /> important paragraphs, and terms in seconds.
                                    </p>
                                    {/* CTA Button */}
                                    <Link href="/demo">
                                        <button className="bg-blue-600 text-white font-normal py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-blue-500 transition flex items-center justify-center gap-2 mx-auto">
                                            Try for free
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </section>

                            {/* Hero Image Section */}
                            {/* <div id="hero-image" className="flex flex-col gap-6 my-10 text-white lg:col-start-3 lg:col-span-8">
                <div>
                  <img className="rounded-md w-full" src="/images/product_demo.png" alt="" />
                </div>
              </div> */}


                        </div>
                    </div>
                </div>
            </main>

            <div className="grid grid-cols-1 lg:grid-cols-12 bg-gray-900 text-white p-4 md:p-12">
                {/* Marquee Section */}
                <div className="flex flex-col gap-3 lg:gap-6 my-12 text-white col-start-1 lg:col-start-4 lg:col-span-6">
                    <p className="self-center">Supporting 50+ languages</p>
                    <div className="relative overflow-hidden">
                        <div className="marquee">
                            <div className="marquee-content flex space-x-6 md:space-x-10">
                                <span className="text-5xl">🇬🇱</span> {/* Albanian */}
                                <span className="text-5xl">🇪🇹</span> {/* Amharic */}
                                <span className="text-5xl">🇸🇦</span> {/* Arabic */}
                                <span className="text-5xl">🇦🇲</span> {/* Armenian */}
                                <span className="text-5xl">🇧🇩</span> {/* Bengali */}
                                <span className="text-5xl">🇧🇦</span> {/* Bosnian */}
                                <span className="text-5xl">🇧🇬</span> {/* Bulgarian */}
                                <span className="text-5xl">🇲🇲</span> {/* Burmese */}
                                <span className="text-5xl">🇪🇸</span> {/* Catalan */}
                                <span className="text-5xl">🇨🇳</span> {/* Chinese */}
                                <span className="text-5xl">🇭🇷</span> {/* Croatian */}
                                <span className="text-5xl">🇨🇿</span> {/* Czech */}
                                <span className="text-5xl">🇩🇰</span> {/* Danish */}
                                <span className="text-5xl">🇳🇱</span> {/* Dutch */}
                                <span className="text-5xl">🇪🇪</span> {/* Estonian */}
                                <span className="text-5xl">🇫🇮</span> {/* Finnish */}
                                <span className="text-5xl">🇫🇷</span> {/* French */}
                                <span className="text-5xl">🇬🇪</span> {/* Georgian */}
                                <span className="text-5xl">🇩🇪</span> {/* German */}
                                <span className="text-5xl">🇬🇷</span> {/* Greek */}
                                <span className="text-5xl">🇮🇳</span> {/* Gujarati */}
                                <span className="text-5xl">🇭🇺</span> {/* Hungarian */}
                                <span className="text-5xl">🇮🇸</span> {/* Icelandic */}
                                <span className="text-5xl">🇮🇩</span> {/* Indonesian */}
                                <span className="text-5xl">🇮🇹</span> {/* Italian */}
                                <span className="text-5xl">🇯🇵</span> {/* Japanese */}
                                <span className="text-5xl">🇰🇿</span> {/* Kazakh */}
                                <span className="text-5xl">🇰🇷</span> {/* Korean */}
                                <span className="text-5xl">🇱🇻</span> {/* Latvian */}
                                <span className="text-5xl">🇱🇹</span> {/* Lithuanian */}
                                <span className="text-5xl">🇲🇰</span> {/* Macedonian */}
                                <span className="text-5xl">🇲🇾</span> {/* Malay */}
                                <span className="text-5xl">🇲🇳</span> {/* Mongolian */}
                                <span className="text-5xl">🇳🇴</span> {/* Norwegian */}
                                <span className="text-5xl">🇮🇷</span> {/* Persian */}
                                <span className="text-5xl">🇵🇱</span> {/* Polish */}
                                <span className="text-5xl">🇵🇹</span> {/* Portuguese */}
                                <span className="text-5xl">🇷🇴</span> {/* Romanian */}
                                <span className="text-5xl">🇷🇺</span> {/* Russian */}
                                <span className="text-5xl">🇷🇸</span> {/* Serbian */}
                                <span className="text-5xl">🇸🇰</span> {/* Slovak */}
                                <span className="text-5xl">🇸🇮</span> {/* Slovenian */}
                                <span className="text-5xl">🇸🇴</span> {/* Somali */}
                                <span className="text-5xl">🇪🇸</span> {/* Spanish */}
                                <span className="text-5xl">🇰🇪</span> {/* Swahili */}
                                <span className="text-5xl">🇸🇪</span> {/* Swedish */}
                                <span className="text-5xl">🇵🇭</span> {/* Tagalog */}
                                <span className="text-5xl">🇹🇭</span> {/* Thai */}
                                <span className="text-5xl">🇹🇷</span> {/* Turkish */}
                                <span className="text-5xl">🇺🇦</span> {/* Ukrainian */}
                                <span className="text-5xl">🇵🇰</span> {/* Urdu */}
                                <span className="text-5xl">🇻🇳</span> {/* Vietnamese */}
                                {/* Duplicate the sequence for continuous scrolling */}
                                <span className="text-5xl">🇬🇱</span> {/* Albanian */}
                                <span className="text-5xl">🇪🇹</span> {/* Amharic */}
                                <span className="text-5xl">🇸🇦</span> {/* Arabic */}
                                <span className="text-5xl">🇦🇲</span> {/* Armenian */}
                                <span className="text-5xl">🇧🇩</span> {/* Bengali */}
                                <span className="text-5xl">🇧🇦</span> {/* Bosnian */}
                                <span className="text-5xl">🇧🇬</span> {/* Bulgarian */}
                                <span className="text-5xl">🇲🇲</span> {/* Burmese */}
                                <span className="text-5xl">🇪🇸</span> {/* Catalan */}
                                <span className="text-5xl">🇨🇳</span> {/* Chinese */}
                                <span className="text-5xl">🇭🇷</span> {/* Croatian */}
                                <span className="text-5xl">🇨🇿</span> {/* Czech */}
                                <span className="text-5xl">🇩🇰</span> {/* Danish */}
                                <span className="text-5xl">🇳🇱</span> {/* Dutch */}
                                <span className="text-5xl">🇪🇪</span> {/* Estonian */}
                                <span className="text-5xl">🇫🇮</span> {/* Finnish */}
                                <span className="text-5xl">🇫🇷</span> {/* French */}
                                <span className="text-5xl">🇬🇪</span> {/* Georgian */}
                                <span className="text-5xl">🇩🇪</span> {/* German */}
                                <span className="text-5xl">🇬🇷</span> {/* Greek */}
                                <span className="text-5xl">🇮🇳</span> {/* Gujarati */}
                                <span className="text-5xl">🇭🇺</span> {/* Hungarian */}
                                <span className="text-5xl">🇮🇸</span> {/* Icelandic */}
                                <span className="text-5xl">🇮🇩</span> {/* Indonesian */}
                                <span className="text-5xl">🇮🇹</span> {/* Italian */}
                                <span className="text-5xl">🇯🇵</span> {/* Japanese */}
                                <span className="text-5xl">🇰🇿</span> {/* Kazakh */}
                                <span className="text-5xl">🇰🇷</span> {/* Korean */}
                                <span className="text-5xl">🇱🇻</span> {/* Latvian */}
                                <span className="text-5xl">🇱🇹</span> {/* Lithuanian */}
                                <span className="text-5xl">🇲🇰</span> {/* Macedonian */}
                                <span className="text-5xl">🇲🇾</span> {/* Malay */}
                                <span className="text-5xl">🇲🇳</span> {/* Mongolian */}
                                <span className="text-5xl">🇳🇴</span> {/* Norwegian */}
                                <span className="text-5xl">🇮🇷</span> {/* Persian */}
                                <span className="text-5xl">🇵🇱</span> {/* Polish */}
                                <span className="text-5xl">🇵🇹</span> {/* Portuguese */}
                                <span className="text-5xl">🇷🇴</span> {/* Romanian */}
                                <span className="text-5xl">🇷🇺</span> {/* Russian */}
                                <span className="text-5xl">🇷🇸</span> {/* Serbian */}
                                <span className="text-5xl">🇸🇰</span> {/* Slovak */}
                                <span className="text-5xl">🇸🇮</span> {/* Slovenian */}
                                <span className="text-5xl">🇸🇴</span> {/* Somali */}
                                <span className="text-5xl">🇪🇸</span> {/* Spanish */}
                                <span className="text-5xl">🇰🇪</span> {/* Swahili */}
                                <span className="text-5xl">🇸🇪</span> {/* Swedish */}
                                <span className="text-5xl">🇵🇭</span> {/* Tagalog */}
                                <span className="text-5xl">🇹🇭</span> {/* Thai */}
                                <span className="text-5xl">🇹🇷</span> {/* Turkish */}
                                <span className="text-5xl">🇺🇦</span> {/* Ukrainian */}
                                <span className="text-5xl">🇵🇰</span> {/* Urdu */}
                                <span className="text-5xl">🇻🇳</span> {/* Vietnamese */}
                            </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="h-full w-full" style={{ background: "linear-gradient(to right, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0) 10%, rgba(17, 24, 39, 0) 90%, rgba(17, 24, 39, 1) 100%)" }}></div>
                        </div>
                    </div>
                </div>

                <div className="container mt-14 col-start-1 lg:col-start-3 lg:col-span-8 mx-auto flex flex-col justify-between md:flex-row items-start gap-8 md:gap-12">
                    {/* Left Section */}
                    <div className="md:w-2/5">
                        <h2 className="text-4xl font-normal mb-4">Speed up your lease administration</h2>
                        <p className="text-lg font-light text-gray-400">
                            Abstract your leases faster so that you can focus on what matters most.
                        </p>
                    </div>

                    <div className="md:w-3/5 flex flex-col md:flex-row gap-6">
                        {/* Feature Card 1 */}
                        <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-blue-800 rounded-full p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-normal mb-2">100% accurate data</h3>
                            <p className="text-gray-400 font-light">
                                Data extracted with our tool will be 100% correct as it is in the lease document.
                            </p>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-blue-800 rounded-full p-3">
                                    {/* Replace this with an actual icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-normal mb-2">Secure data storage</h3>
                            <p className="text-gray-400 font-light">
                                Protect Your Sensitive Information with Encryption and Enterprise Level Security Measures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-12 bg-gray-900 text-white py-16 md:px-6 mt-14 p-4">
                <div className="absolute h-full w-full overflow-hidden">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            {/* Grid Pattern */}
                            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.2)" />
                                <circle cx="100" cy="0" r="2" fill="rgba(255,255,255,0.2)" />
                                <circle cx="0" cy="100" r="2" fill="rgba(255,255,255,0.2)" />
                                <circle cx="100" cy="100" r="2" fill="rgba(255,255,255,0.2)" />
                            </pattern>

                            {/* Gradient Mask */}
                            <mask id="fade">
                                <linearGradient id="mask-gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0" stopColor="white" stopOpacity="0" />
                                    <stop offset="0.2" stopColor="white" stopOpacity="1" />
                                    <stop offset="0.8" stopColor="white" stopOpacity="1" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <rect width="100%" height="100%" fill="url(#mask-gradient)" />
                            </mask>
                        </defs>

                        {/* Grid with mask applied */}
                        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fade)" />
                    </svg>
                </div>

                <div className="col-start-3 col-span-8 z-20 ">
                    <div className="container mx-auto lg:text-center mb-12 text-left">
                        {/* Main Heading */}
                        <h2 className="text-4xl font-normal mb-4 ">Tailored for Real Estate Documents</h2>
                        {/* Sub Heading */}
                        <p className="text-lg font-light text-gray-400">
                            Specifically configured to understand real estate terminology in multiple languages <br className="hidden md:block" /> and extract only the relevant real estate terms.
                        </p>
                    </div>

                    <div className="container mx-auto grid gap-8 md:grid-cols-2">
                        {/* Feature Card 1 */}
                        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-normal mb-4">Most types of contracts</h3>
                            <p className="text-gray-400 font-light mb-6">
                                Specifically focused to analyze multiple types of real estate contracts:
                            </p>
                            <ul>
                                <li className="bg-gray-700 p-2 rounded-lg mb-2 flex flex-row items-baseline gap-2 transform transition-transform duration-300 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                    <span className="text-lg font-light px-2">Lease agreements</span>
                                </li>
                                <li className="bg-gray-700 p-2 rounded-lg mb-2 flex flex-row items-baseline gap-2 transform transition-transform duration-300 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                    <span className="text-lg font-light px-2">Purchase agreement</span>
                                </li>
                                <li className="bg-gray-700 p-2 rounded-lg mb-2 flex flex-row items-baseline gap-2 transform transition-transform duration-300 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 11.625h4.5m-4.5 2.25h4.5m2.121 1.527c-1.171 1.464-3.07 1.464-4.242 0-1.172-1.465-1.172-3.84 0-5.304 1.171-1.464 3.07-1.464 4.242 0M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                    <span className="text-lg font-light px-2">Sales contracts</span>
                                </li>
                                <li className="bg-gray-700 p-2 rounded-lg mb-2 flex flex-row items-baseline gap-2 transform transition-transform duration-300 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    <span className="text-lg font-light px-2">Title deeds</span>
                                </li>
                                <li className="bg-gray-700 p-2 rounded-lg mb-2 flex flex-row items-baseline gap-2 transform transition-transform duration-300 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                    </svg>
                                    <span className="text-lg font-light px-2">Intra-company leases</span>
                                </li>
                                <li className="bg-gray-700 p-2 rounded-lg mb-2 flex flex-row items-baseline gap-2 transform transition-transform duration-300 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span className="text-lg font-light px-2">Easement agreement</span>
                                </li>
                                <li className="bg-gray-700 p-2 rounded-lg mb-2 flex flex-row items-baseline gap-2 transform transition-transform duration-300 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                    </svg>
                                    <span className="text-lg font-light px-2">Lease-to-Own Agreement</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-normal mb-4">Most common contractual terms</h3>
                            <p className="text-gray-400 font-light mb-6">
                                Understanding the specific conditions critical in real estate documents
                            </p>

                            <div className="flex flex-col gap-4">
                                {/* Feature 1 */}
                                <div className="bg-gray-600 p-4 rounded-lg flex items-center">
                                    <div className="bg-blue-700 p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  text-blue-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p className="font-normal">Critical dates</p>
                                        <p className="text-gray-400 font-light text-sm">Renewal, extension, termination options</p>
                                    </div>
                                </div>
                                {/* Feature 2 */}
                                <div className="bg-gray-600 p-4 rounded-lg flex items-center">
                                    <div className="bg-blue-700 p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-blue-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-normal">Security deposits</p>
                                        <p className="text-gray-400 font-light text-sm">Never miss to collect the deposits</p>
                                    </div>
                                </div>
                                {/* Feature 3 */}
                                <div className="bg-gray-600 p-4 rounded-lg flex items-center">
                                    <div className="bg-blue-700 p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-blue-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-normal">Operating expenses</p>
                                        <p className="text-gray-400 font-light"><br /></p>
                                    </div>
                                </div>
                                {/* Feature 4 */}
                                <div className="bg-gray-600 p-4 rounded-lg flex items-center">
                                    <div className="bg-blue-700 p-2 rounded-full mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-blue-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-normal">Tenant allowances</p>
                                        <p className="text-gray-400 font-light text-sm">Renewal and extension options</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-900 text-white py-16 px-6 gap-6">
                <div className="col-start-1 col-span-12 md:col-start-3 md:col-span-8">
                    <div className="container mx-auto text-left lg:text-center mb-12">
                        {/* Main Heading */}
                        <h2 className="text-4xl font-normal mb-4">What Can LeaseWizard Do</h2>
                        {/* Sub Heading */}
                        <p className="text-lg font-light text-gray-400">
                            Designed to Speed-up Lease Abstraction and Ensure No Critical Dates and Actions are missed.
                        </p>
                    </div>

                    <div className="container grid gap-14 sm:grid-cols-1 md:grid-cols-2">
                        {/* First Section */}
                        <div className="col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-18 min-h-[400px]">
                            {/* Card 1 */}
                            <div className="bg-gray-800 order-2 rounded-xl p-6 shadow-lg flex flex-col items-center md:items-start h-full md:w-80 lg:w-96 md:ml-auto">
                                <div className="relative bg-gray-700 p-6 rounded-lg w-full text-center h-full flex flex-col justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute right-0 top-0 size-32 text-gray-800 opacity-50 z-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <h3 className="text-5xl font-normal text-left relative z-20">45 seconds</h3>
                                    <p className="text-md font-light text-left text-gray-400">Average time to abstract a 70 page contract</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="order-1 text-left pr-8 py-8 flex flex-col justify-center h-full">
                                <h3 className="text-2xl font-normal mb-4">Incredibly Fast Abstraction</h3>
                                <p className="text-gray-400 font-light mb-6">
                                    In a matter of seconds abstract a real estate lease, having all the critical dates, relevant paragraphs and terms abstracted.
                                </p>
                                <button className="bg-blue-600 hidden text-white px-6 py-3 rounded-lg font-normal mt-4 hover:bg-blue-500 transition">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Second Section */}
                        <div className="col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-14 min-h-[400px]">
                            {/* Card 3 */}
                            <div className="order-1 md:order-2 py-8 pr-8 text-left flex flex-col justify-center h-full">
                                <h3 className="text-2xl font-normal mb-4">Extract and access all critical lease data</h3>
                                <p className="text-gray-400 font-light mb-6">
                                    All the relevant lease terms are extracted and can be stored in an excel document or a database.
                                </p>
                                <button className="bg-blue-600 hidden text-white px-6 py-3 rounded-lg font-normal mt-4 hover:bg-blue-500 transition">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Card 4  */}
                            <div className="relative order-2 md:order-1 bg-gray-800 rounded-xl p-2 shadow-lg flex justify-center items-center overflow-hidden z-1 h-full">
                                <img src="/images/mockup_table.svg" alt="Table Mockup" className="svg-mockup max-w-full h-auto" />
                                <div className="absolute top-1 left-auto md:left-3/4 md:transform md:-translate-x-1/2 w-64 h-12 max-w-full sm:max-w-xs shadow-lg rounded-lg z-100">
                                    <div className="block md:hidden">
                                        {/* {% include 'includes/card_leasedetails_small.html' %} */}
                                    </div>
                                    <div className="hidden md:block">
                                        {/* {% include 'includes/card_leasedetails.html' %} */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third Section */}
                        <div className="col-span-2 grid sm:grid-cols-1 md:grid-cols-2 gap-14 min-h-[400px] max-h-[550px] relative">
                            {/* Card 5 */}
                            <div className="bg-gray-800 order-2 rounded-xl p-4 shadow-lg flex flex-col items-center md:items-start relative overflow-hidden h-full">
                                <img src="/images/mockup_doc.svg" alt="Table Mockup" className="relative left-0 h-auto object-cover" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="105mm" height="150mm" viewBox="0 0 794 1123" className="absolute top-0 left-0 max-w-full h-auto">
                                    <rect x="60" y="230" width="674" height="50" fill="#fff9b1" rx="10" ry="10" className="z-20" />
                                    <text x="70" y="260" fontFamily="Arial, sans-serif" fontSize="16" fill="#333333" >
                                        (Page 11,§3) &quot;Option to extend the term of this Lease for an additional period of five (5) years
                                    </text>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="105mm" height="150mm" viewBox="0 0 794 1123" className="absolute top-0 left-0 max-w-full h-auto">
                                    <rect x="170" y="530" width="674" height="50" fill="#fff9b1" rx="10" ry="10" />
                                    <text x="180" y="550" fontFamily="Arial, sans-serif" fontSize="16" fill="#333333">
                                        (Page 26,§5)&quot;The Tenant may terminate this Lease with 90 days&apos; prior written notice.&quot;
                                    </text>
                                </svg>
                            </div>

                            {/* Card 6 */}
                            <div className="text-left order-1 flex flex-col justify-center h-full">
                                <h3 className="text-2xl font-normal mb-4">Highlight the critical paragraphs from your contract</h3>
                                <p className="text-gray-400 font-light mb-6">
                                    In a matter of seconds abstract a real estate lease, having all the critical dates, relevant paragraphs and terms abstracted.
                                </p>
                                <button className="bg-blue-600 hidden text-white px-6 py-3 rounded-lg font-normal mt-4 hover:bg-blue-500 transition">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-12 bg-gray-900 text-white py-20 mt-14 px-6">

                <div className="container mx-auto lg:col-start-4 lg:col-span-6">

                    <div className="mx-auto text-center mb-12">
                        <h2 className="text-3xl font-normal mb-4">Integrate with your ERP</h2>
                        <p className="text-lg font-light text-gray-400">
                            Connect to your real estate management software to abstract your real estate leases.
                        </p>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-6">
                            {/* Icons Section */}
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                {/* Icon 1 */}
                                <div className="bg-gray-600 p-3 rounded-full group transform transition-transform duration-300 hover:-translate-y-2 relative">
                                    <img src="/images/sap.png" alt="SAP" className="w-8 h-8" />
                                    <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">SAP</span>
                                </div>
                                {/* Icon 2 */}
                                <div className="bg-gray-600 p-3 rounded-full group transform transition-transform duration-300 hover:-translate-y-2 relative">
                                    <img src="/images/ms-share-point.png" alt="MS SharePoint" className="w-8 h-8" />
                                    <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">MS SharePoint</span>
                                </div>
                                {/* Icon 3 */}
                                <div className="bg-gray-600 p-3 rounded-full group transform transition-transform duration-300 hover:-translate-y-2 relative">
                                    <img src="https://img.icons8.com/color/48/slack-new.png" alt="Slack" className="w-8 h-8" />
                                    <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Slack</span>
                                </div>
                                {/* Icon 4 */}
                                <div className="bg-gray-600 p-3 rounded-full group transform transition-transform duration-300 hover:-translate-y-2 relative">
                                    <img src="/images/OneDrive.png" alt="OneDrive" className="w-8 h-8" />
                                    <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">OneDrive</span>
                                </div>
                            </div>
                            {/* Button Section */}
                            <div>
                                <Link href="/contact">
                                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-normal hover:bg-blue-500 transition">
                                        Get in touch
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer will be a separate component */}
        </div>
    );
}
