"use client";
import React, { useEffect, useRef, useState } from 'react';

interface ExtractDataCardProps {
    contractId?: string;
    className?: string;
}

const ExtractDataCard: React.FC<ExtractDataCardProps> = ({
    contractId = "CN1000234",
    className = ""
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <div
            ref={cardRef}
            className={`p-3 bg-gray-800 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-gray-600 hover:-translate-y-1 extract-card-enter extract-card-float ${isVisible ? 'checkmark-visible' : ''} ${className}`}
            style={{ transformOrigin: 'center' }}
        >
            {/* Card Title */}
            <div className="flex mb-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-gray-300"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                    />
                </svg>
                <h2 className="ml-2 text-lg font-semibold text-left text-gray-300">
                    Extracted lease data
                </h2>
            </div>

            {/* Contract ID */}
            <p className="text-sm text-left text-gray-400 mb-4">
                Contract ID: {contractId}
            </p>

            {/* Section Headers */}
            <div>
                <h3 className="text-sm text-left font-semibold text-gray-300 mb-2">
                    Critical dates
                </h3>
                {/* Prompt Checks List */}
                <ul className="space-y-1 text-gray-400 pl-4">
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Lease-end date
                    </li>
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Renewal option dates
                    </li>
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Break option deadline
                    </li>
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Extension terms
                    </li>
                </ul>
            </div>

            {/* Response Checks */}
            <div className="mt-4 text-gray-400">
                <h3 className="text-sm text-left font-semibold text-gray-300 mb-2">
                    Payment terms
                </h3>
                {/* Response Checks List */}
                <ul className="space-y-1 pl-4">
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Rent indexation
                    </li>
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Payment amount
                    </li>
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Auxiliary costs
                    </li>
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Deposit amount
                    </li>
                    <li className="flex items-center text-sm checkmark-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        Guarantee payment
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ExtractDataCard;
