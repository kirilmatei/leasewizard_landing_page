"use client";
import { useState } from 'react';
import Link from "next/link";
import Header from "@/components/Header";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Send form data to API route
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Clear form on successful submission
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />

            <main className="pt-32 pb-20 px-4 md:px-12">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Ready to transform your lease abstraction process? We&apos;d love to hear from you.
                            Reach out to our team and discover how LeaseWizard can streamline your workflow.
                        </p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700">
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
                            <div className="contact-circle-1"></div>
                            <div className="contact-circle-2"></div>
                            <div className="contact-circle-3"></div>
                            {/* Contact particles */}
                            <div className="contact-particle"></div>
                            <div className="contact-particle"></div>
                            <div className="contact-particle"></div>
                            <div className="contact-particle"></div>
                        </div>

                        <div className="relative z-10">
                            {/* Contact Info Cards */}
                            {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div className="bg-gradient-to-br from-blue-900/20 to-gray-800 p-6 rounded-xl border border-gray-600 group hover:border-blue-500/30 transition-all duration-300">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-center">Email Us</h3>
                                    <p className="text-gray-400 text-center">info@leasewizard.ai</p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-900/20 to-gray-800 p-6 rounded-xl border border-gray-600 group hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-center">Visit Us</h3>
                                    <p className="text-gray-400 text-center">Remote-First Company</p>
                                </div>

                                <div className="bg-gradient-to-br from-green-900/20 to-gray-800 p-6 rounded-xl border border-gray-600 group hover:border-green-500/30 transition-all duration-300">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-full p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-center">Response Time</h3>
                                    <p className="text-gray-400 text-center">Within 24 hours</p>
                                </div>
                            </div> */}

                            {/* Contact Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
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
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="demo">Request a Demo</option>
                                        <option value="pricing">Pricing Information</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership Inquiry</option>
                                        <option value="general">General Question</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your needs and how we can help..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300">
                                                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                                </svg>

                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="text-center p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                                        <p className="text-green-400 font-medium">
                                            ✓ Message sent successfully! We&apos;ll get back to you within 24 hours.
                                        </p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="text-center p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                                        <p className="text-red-400 font-medium">
                                            ✗ Something went wrong. Please try again or email us directly at info@leasewizard.ai
                                        </p>
                                    </div>
                                )}
                            </form>
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