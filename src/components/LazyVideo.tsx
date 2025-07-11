'use client';

import { useRef, useEffect } from 'react';

interface LazyVideoProps {
    src: string;
    className?: string;
    [key: string]: any; // For additional video props
}

export default function LazyVideo({ src, className = '', ...props }: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            },
            { threshold: 0.5 } // Play when at least 50% visible
        );

        observer.observe(video);

        return () => observer.unobserve(video);
    }, []);

    return (
        <video
            ref={videoRef}
            className={className}
            muted
            loop
            preload="metadata"
            playsInline // Helps with mobile playback
            {...props}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
} 