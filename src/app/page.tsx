import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ExtractDataCard from "@/components/ExtractDataCard";
import LazyVideo from "@/components/LazyVideo";

export default function Home() {
    return (
        <div className="bg-gray-900 text-white">
            <Header />
            <main className="p-5 ">

                {/* Hero Section */}
                <section id="hero-section" className="lg:h-screen">
                    <div className="bg-gray-900 h-full pt-20">
                        <div id="hero" className="relative w-full h-full flex justify-center overflow-hidden rounded-2xl" style={{ backgroundImage: 'url("/images/hero_background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* <img src="/images/cloud.svg" className="absolute w-full z-0 object-cover top-60 lg:-top-24" alt="" /> */}

                            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3 z-10 h-full items-center justify-between pt-8 ">
                                {/* Hero Text Section */}
                                <section className="text-white px-4 lg:px-6 lg:col-start-3 lg:col-span-8">
                                    <div className="container mx-auto text-center mb-4 mb-50 lg:mb-8">
                                        {/* Main Heading */}
                                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight text-transparent bg-gradient-to-r from-blue-400 via-white to-cyan-300 bg-clip-text mb-4">
                                            AI Lease Contract Management
                                        </h2>
                                        {/* Description */}
                                        <p className="text-base sm:text-lg font-light mb-6 text-gray-200 max-w-xl lg:max-w-3xl mx-auto px-2">
                                            Abstract, Analyze, and Manage real estate lease contracts with AI and see all critical dates, gaps, and terms in seconds.
                                        </p>
                                        {/* CTA Button */}
                                        <Link href="/contact">
                                            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-2xl hover:shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 mx-auto group hover:scale-105 text-sm sm:text-base">
                                                Try for free
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                </section>

                                {/* Hero Video Section */}
                                <div id="hero-video" className="flex flex-col text-white lg:col-start-3 lg:col-span-8 order-last lg:order-none">
                                    <div className="relative bg-white/15 backdrop-blur-sm border border-b-0 border-blue-400/70 rounded-2xl rounded-b-none pt-2 lg:pt-4 px-2 lg:px-4 pb-0 shadow-2xl overflow-hidden">
                                        {/* Gradient overlay for better visual integration */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>

                                        <div className="relative z-10">
                                            <LazyVideo
                                                src="/static/videos/portfolio.mp4"
                                                className="rounded-lg rounded-b-none w-full shadow-xl border border-gray-700/50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Marquee Section */}
                <section id="marquee-section" className="px-4 sm:px-6 md:px-12">
                    <div className="text-white p-4 sm:p-6 md:p-16 max-w-7xl mx-auto">
                        <div className="flex flex-col gap-4 lg:gap-8 my-8 sm:my-12 text-white">
                            <p className="self-center text-lg font-semibold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Supporting 50+ languages</p>
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
                    </div>
                </section>

                {/* Extract Any Data Section */}
                <section id="data-extract-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12">
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-16 max-w-7xl mx-auto">
                        {/* Header Content */}
                        <div className="flex flex-col gap-4 sm:gap-6 text-center w-full mx-auto px-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
                                Extract any contract data
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl lg:max-w-4xl mx-auto">
                                Watch LeaseWizard transform your complex lease documents into structured data in seconds,
                                identifying critical dates and terms automatically.
                            </p>
                        </div>

                        {/* Video Container */}
                        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8 lg:aspect-[1296/670]  lg:h-[600px] lg:p-0 shadow-2xl border border-gray-700">

                            {/* Video Container */}
                            <div className="relative bottom-0 right-0 left-auto sm:left-1/2 sm:-translate-x-1/2 z-10 overflow-hidden rounded-t-lg w-[200%] sm:w-[90%] h-full flex items-center justify-end sm:justify-center lg:absolute lg:pt-20">
                                <LazyVideo
                                    src="/static/videos/abstraction.mp4"
                                    className="rounded-lg w-full object-cover object-right"
                                />
                            </div>

                            {/* Background Effects */}
                            <div aria-hidden="true" className=" pointer-events-none absolute inset-0 z-0 object-cover">
                                {/* Noise texture overlay */}
                                <div className="absolute -inset-2">
                                    <div className="pointer-events-none absolute inset-0 opacity-30 z-[1] p-20"
                                        style={{
                                            backgroundImage: 'url("/images/8187000.jpg")',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gap Analysis Section */}
                <section id="gap-analysis-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12">
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-16 max-w-7xl mx-auto">
                        {/* Header Content */}
                        <div className="flex flex-col gap-4 sm:gap-6 text-center w-full mx-auto px-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
                                Identify gaps in contracts
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl lg:max-w-4xl mx-auto">
                                LeaseWizard identifies missing conditions in a rental contract, according to industry standards and regional markets, and gives a rating
                            </p>
                        </div>

                        {/* Video Container */}
                        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8 lg:aspect-[1296/670] lg:p-0 shadow-2xl border border-gray-700">

                            {/* Video Container */}
                            <div className="relative bottom-0 right-0 left-auto sm:left-1/2 sm:-translate-x-1/2 z-10 overflow-hidden rounded-t-lg w-[200%] sm:w-[90%] h-full flex items-center justify-end sm:justify-center lg:absolute lg:pt-20">
                                <LazyVideo
                                    src="/static/videos/gap.mp4"
                                    className="rounded-lg w-full object-cover object-right lg:object-contain"
                                />
                            </div>

                            {/* Background Effects */}
                            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 object-cover">
                                {/* Noise texture overlay */}
                                <div className="absolute -inset-2">
                                    <div className="pointer-events-none absolute inset-0 opacity-30 z-[1] p-20"
                                        style={{
                                            backgroundImage: 'url("/images/8286624.jpg")',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Agent Section */}
                <section id="ai-agent-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12">
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-16 max-w-7xl mx-auto">
                        {/* Header Content */}
                        <div className="flex flex-col gap-4 sm:gap-6 text-center w-full mx-auto px-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                                Real Estate AI Agent
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl lg:max-w-4xl mx-auto">
                                LeaseWizard is your personal advisor, that knows your real estate portfolio and keeps you up to date with everything.
                            </p>
                        </div>

                        {/* Video Container */}
                        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8 lg:aspect-[1296/670] lg:p-0 shadow-2xl border border-gray-700">

                            {/* Video Container */}
                            <div className="relative bottom-0 right-0 left-auto sm:left-1/2 sm:-translate-x-1/2 z-10 overflow-hidden rounded-t-lg w-[200%] sm:w-[90%] h-full flex items-center justify-end sm:justify-center lg:absolute lg:pt-20">
                                <LazyVideo
                                    src="/static/videos/ai.mp4"
                                    className="rounded-lg w-full object-cover object-right lg:object-contain"
                                />
                            </div>

                            {/* Background Effects */}
                            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 object-cover">
                                {/* Noise texture overlay */}
                                <div className="absolute -inset-2">
                                    <div className="pointer-events-none absolute inset-0 opacity-30 z-[1] p-20"
                                        style={{
                                            backgroundImage: 'url("/images/8286809.jpg")',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3 Features Section */}
                <section id="three-features-section" className="py-12 sm:py-16 px-4 sm:px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                                What Can LeaseWizard Do
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl lg:max-w-3xl mx-auto px-2">
                                Designed to Speed-up Lease Abstraction and Ensure No Critical Dates and Actions are missed.
                            </p>
                        </div>

                        {/* Three Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {/* Feature 1: Fast Abstraction */}
                            <div className="flex flex-col bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 hover:border-blue-500/30 transition-all duration-500 group">
                                <div className="text-left mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">
                                        Incredibly Fast Abstraction
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-400">
                                        In a matter of seconds abstract a real estate lease, having all the critical dates, relevant paragraphs and terms abstracted.
                                    </p>
                                </div>

                                <div className="relative w-full overflow-hidden rounded-2xl pt-3 md:pt-4 flex-1">
                                    <div className="relative w-full h-full bg-gradient-to-br from-blue-900/20 via-gray-700 to-gray-800 rounded-t-lg flex items-center justify-center p-4 sm:p-6">
                                        {/* Animated Background Elements */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="speed-circle-1"></div>
                                            <div className="speed-circle-2"></div>
                                            <div className="speed-circle-3"></div>
                                            {/* Speed particles */}
                                            <div className="speed-particle"></div>
                                            <div className="speed-particle"></div>
                                            <div className="speed-particle"></div>
                                            <div className="speed-particle"></div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="relative z-20 text-center">
                                            {/*  Clock Icon */}
                                            <div className="mb-4 relative inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-blue-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                <div className="absolute inset-0 rounded-full bg-blue-400/10 clock-glow"></div>
                                            </div>

                                            {/* Time Display */}
                                            <div className="relative">
                                                <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text time-counter">
                                                    45 seconds
                                                </h4>
                                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 blur-lg rounded-lg opacity-75 time-glow"></div>
                                            </div>

                                            <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 font-medium text-center">
                                                Average time to abstract a 70 page contract
                                            </p>

                                            {/* Speed indicators */}
                                            <div className="flex justify-center items-center space-x-2 mt-4">
                                                <div className="speed-dot speed-dot-1"></div>
                                                <div className="speed-dot speed-dot-2"></div>
                                                <div className="speed-dot speed-dot-3"></div>
                                                <span className="text-xs text-blue-300 ml-2 font-semibold">LIGHTNING FAST</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2: Extract Data */}
                            <div className="flex flex-col bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 hover:border-green-500/30 transition-all duration-500 group md:col-span-2 lg:col-span-1">
                                <div className="text-left mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">
                                        Extract and access all critical lease data
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-400">
                                        All the relevant lease terms are extracted and can be stored in an excel document or a database.
                                    </p>
                                </div>
                                <div className="relative w-full overflow-hidden rounded-2xl pt-3 md:pt-4 flex-1">
                                    <div className="bg-gradient-to-br from-purple-900/20 via-gray-700 to-gray-800 relative w-full h-full flex items-center justify-center p-3 overflow-hidden">
                                        {/* Animated Background Elements */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="highlight-circle-1"></div>
                                            <div className="highlight-circle-2"></div>
                                            <div className="highlight-circle-3"></div>
                                            {/* Highlight particles */}
                                            <div className="highlight-particle"></div>
                                            <div className="highlight-particle"></div>
                                            <div className="highlight-particle"></div>
                                            <div className="highlight-particle"></div>
                                        </div>

                                        {/* Background SVG */}
                                        <Image
                                            src="/mockup_table.svg"
                                            alt="Table Mockup"
                                            fill
                                            className="object-cover z-10"
                                            style={{ width: '110%' }}
                                        />
                                        {/* ExtractDataCard on top */}
                                        <div className="relative z-20 transform -translate-x-6 translate-y-1">
                                            <ExtractDataCard
                                                contractId="CN1000235"
                                                className="w-full max-w-64 shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* Feature 3: Highlight Critical Paragraphs */}
                            <div className="flex flex-col bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 hover:border-purple-500/30 transition-all duration-500 group md:col-start-1 md:col-span-2 lg:col-start-auto lg:col-span-1">
                                <div className="text-left mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">
                                        Highlight the critical paragraphs
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-400">
                                        In a matter of seconds abstract a real estate lease, having all the critical dates, relevant paragraphs and terms abstracted.
                                    </p>
                                </div>
                                <div className="relative w-full overflow-hidden rounded-2xl pt-3 md:pt-4 flex-1">
                                    <div className="bg-gradient-to-br from-green-900/20 via-gray-700 to-gray-800 relative w-full h-full flex items-center rounded-lg justify-center p-2 overflow-hidden">
                                        {/* Animated Background Elements */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="data-circle-1"></div>
                                            <div className="data-circle-2"></div>
                                            <div className="data-circle-3"></div>
                                            {/* Data extraction particles */}
                                            <div className="data-particle"></div>
                                            <div className="data-particle"></div>
                                            <div className="data-particle"></div>
                                            <div className="data-particle"></div>
                                        </div>

                                        {/* Background Document SVG */}
                                        <Image
                                            src="/mockup_doc.svg"
                                            alt="Document Mockup"
                                            width={500}
                                            height={400}
                                            className="relative left-0 h-auto object-cover w-[120%] max-w-none z-10"
                                        />

                                        {/* Highlighted Text Extractions */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 794 956" className="absolute top-0 left-0 w-full h-full extract-animation-1 z-20">
                                            <rect x="50" y="220" width="700" height="65" fill="#fff9b1" rx="12" ry="12" className="highlight-box" stroke="#fbbf24" strokeWidth="3" />
                                            <text x="70" y="245" fontFamily="Arial, sans-serif" fontSize="18" fill="#1f2937" className="highlight-text font-medium">
                                                (Page 11,§3) &quot;Option to extend the term of this Lease for an additional
                                            </text>
                                            <text x="70" y="268" fontFamily="Arial, sans-serif" fontSize="18" fill="#1f2937" className="highlight-text font-medium">
                                                period of five (5) years&quot;
                                            </text>
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 794 956" className="absolute top-0 left-0 w-full h-full extract-animation-2 z-20">
                                            <rect x="50" y="580" width="700" height="65" fill="#fff9b1" rx="12" ry="12" className="highlight-box" stroke="#fbbf24" strokeWidth="3" />
                                            <text x="70" y="605" fontFamily="Arial, sans-serif" fontSize="18" fill="#1f2937" className="highlight-text font-medium">
                                                (Page 26,§5) &quot;The Tenant may terminate this Lease with 90 days&apos;
                                            </text>
                                            <text x="70" y="628" fontFamily="Arial, sans-serif" fontSize="18" fill="#1f2937" className="highlight-text font-medium">
                                                prior written notice.&quot;
                                            </text>
                                        </svg>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Feature Section */}
                <section id="security-section" className="pt-16 sm:pt-24 lg:pt-48 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 md:px-16">
                    <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12">
                        {/* Left Section */}
                        <div className="w-full lg:w-2/5">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
                                Your data is securely stored and encrypted
                            </h2>
                            <p className="text-base sm:text-lg font-light text-gray-400">
                                Enterprise-level security protocols to securely store and encrypt confidential information
                            </p>
                        </div>

                        <div className="w-full lg:w-3/5 flex flex-col sm:flex-row gap-4 sm:gap-6">
                            {/* Feature Card 1 - Enterprise Encryption */}
                            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 hover:border-red-500/30 transition-all duration-500 group flex-1 relative">
                                {/* Animated Background Elements */}
                                <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
                                    <div className="security-circle-1"></div>
                                    <div className="security-circle-2"></div>
                                    <div className="security-circle-3"></div>
                                    {/* Security particles */}
                                    <div className="security-particle"></div>
                                    <div className="security-particle"></div>
                                    <div className="security-particle"></div>
                                    <div className="security-particle"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-full p-4 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white security-icon-animation" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                            </svg>
                                            <div className="absolute inset-0 rounded-full bg-red-400/20 security-icon-glow"></div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">Enterprise level encryption</h3>
                                    <p className="text-sm sm:text-base text-gray-300 font-light">
                                        All data is encrypted using industry-standard AES-256 encryption for maximum security.
                                    </p>

                                    {/* Security Badge */}
                                    <div className="mt-4 inline-flex items-center space-x-2">
                                        <div className="security-badge-dot"></div>
                                        <span className="text-xs text-red-300 font-semibold">AES-256 SECURED</span>
                                    </div>
                                </div>
                            </div>

                            {/* Feature Card 2 - Secure Storage */}
                            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-gray-700 hover:border-orange-500/30 transition-all duration-500 group flex-1 relative">
                                {/* Animated Background Elements */}
                                <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
                                    <div className="storage-circle-1"></div>
                                    <div className="storage-circle-2"></div>
                                    <div className="storage-circle-3"></div>
                                    {/* Storage particles */}
                                    <div className="storage-particle"></div>
                                    <div className="storage-particle"></div>
                                    <div className="storage-particle"></div>
                                    <div className="storage-particle"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-full p-4 relative">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-white storage-icon-animation">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                            </svg>

                                            <div className="absolute inset-0 rounded-full bg-orange-400/20 storage-icon-glow"></div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">Secure data storage</h3>
                                    <p className="text-sm sm:text-base text-gray-300 font-light">
                                        Protect Your Sensitive Information with Encryption and Enterprise Level Security Measures.
                                    </p>

                                    {/* Security Badge */}
                                    <div className="mt-4 inline-flex items-center space-x-2">
                                        <div className="storage-badge-dot"></div>
                                        <span className="text-xs text-orange-300 font-semibold">ENTERPRISE SECURE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-6 mt-8 sm:mt-14 relative">
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

                    <div className="relative z-20 max-w-7xl mx-auto">
                        <div className="container mx-auto text-center mb-12 sm:mb-16">
                            {/* Main Heading */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text px-2">Tailored for Real Estate Documents</h2>
                            {/* Sub Heading */}
                            <p className="text-base sm:text-lg font-light text-gray-300 max-w-2xl lg:max-w-4xl mx-auto px-2">
                                Specifically configured to understand real estate terminology in multiple languages and extract only the relevant real estate terms.
                            </p>
                        </div>

                        <div className="container mx-auto grid gap-6 sm:gap-8 md:grid-cols-2">
                            {/* Feature Card 1 */}
                            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-700 hover:border-green-500/30 transition-all duration-500 group">
                                <h3 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-4">Most types of contracts</h3>
                                <p className="text-sm sm:text-base text-gray-400 font-light mb-4 sm:mb-6">
                                    Specifically focused to analyze multiple types of real estate contracts:
                                </p>
                                <ul>
                                    <li className="bg-gray-700 p-2 rounded-lg mb-2 flex flex-row items-baseline gap-2 transform transition-transform duration-300 hover:scale-105">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
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
                            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-700 hover:border-teal-500/30 transition-all duration-500 group">
                                <h3 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-4">Most common contractual terms</h3>
                                <p className="text-sm sm:text-base text-gray-400 font-light mb-4 sm:mb-6">
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




                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 lg:py-24 mt-8 sm:mt-14 px-4 sm:px-6 rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 shadow-2xl border border-gray-700">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mx-auto text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text px-2 pb-2">Integrate with your systems</h2>
                            <p className="text-base sm:text-lg font-light text-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-2">
                                Connect to your real estate management software to abstract your real estate leases.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-6 gap-4 sm:gap-6">
                                {/* Icons Section */}
                                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                                    {/* Icon 1 */}
                                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 sm:p-4 rounded-full group transform transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:shadow-blue-500/25 relative border border-gray-600 hover:border-blue-500/30">
                                        <Image src="/static/logos/sap.png" alt="SAP" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                                        <span className="absolute bottom-full mb-2 w-max px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">SAP</span>
                                    </div>
                                    {/* Icon 2 */}
                                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 sm:p-4 rounded-full group transform transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:shadow-purple-500/25 relative border border-gray-600 hover:border-purple-500/30">
                                        <Image src="/static/logos/ms-share-point.png" alt="MS SharePoint" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                                        <span className="absolute bottom-full mb-2 w-max px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">MS SharePoint</span>
                                    </div>
                                    {/* Icon 3 */}
                                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 sm:p-4 rounded-full group transform transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:shadow-green-500/25 relative border border-gray-600 hover:border-green-500/30">
                                        <Image src="https://img.icons8.com/color/48/slack-new.png" alt="Slack" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                                        <span className="absolute bottom-full mb-2 w-max px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">Slack</span>
                                    </div>
                                    {/* Icon 4 */}
                                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 sm:p-4 rounded-full group transform transition-all duration-300 hover:-translate-y-3 hover:shadow-lg hover:shadow-cyan-500/25 relative border border-gray-600 hover:border-cyan-500/30">
                                        <Image src="/static/logos/OneDrive.png" alt="OneDrive" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                                        <span className="absolute bottom-full mb-2 w-max px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">OneDrive</span>
                                    </div>
                                </div>
                                {/* Button Section */}
                                <div>
                                    <Link href="/contact">
                                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group hover:scale-105 text-sm sm:text-base">
                                            Get in touch
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            {/* Footer will be a separate component */}

        </div >
    );
}
