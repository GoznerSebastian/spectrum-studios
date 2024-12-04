import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
    {
        desktop: "/comercial-desktop.mp4",
        mobile: "/comercial-mobile.mov",
        label: "Commercial Videos",
        description: `
            Drive your business forward with high-quality, cinematic commercials that connect with your audience. 
            Our team creates compelling narratives, combining stunning visuals and storytelling to elevate your brand.`,
        mobileDescription: `
            Drive your business with cinematic commercials.`,
    },
    {
        desktop: "/drona-desktop.mp4",
        mobile: "/drona-mobile.mp4",
        label: "Drone Footage",
        description: `
            Experience the world from a new perspective with our state-of-the-art drone videography services. 
            Perfect for showcasing landscapes, events, or architectural marvels, our drone footage delivers breathtaking 
            aerial views with impeccable clarity.`,
        mobileDescription: `
            Explore new perspectives with drone videography.`,
    },
    {
        desktop: "/real-estate-desktop.mp4",
        mobile: "/real-estate-mobile.mp4",
        label: "Real Estate Tours",
        description: `
            Transform the way your properties are showcased with immersive real estate video tours. Our professional 
            videography highlights every detail of your property, from elegant interiors to captivating outdoor spaces. 
            We create videos that inspire potential buyers, helping you stand out in a competitive market.`,
        mobileDescription: `
            Showcase your properties with immersive video tours.`,
    },
];

export default function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(true);

    const handlePrev = () => {
        setIsTimerActive(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setIsTimerActive(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (isTimerActive) {
            const timer = setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === videos.length - 1 ? 0 : prevIndex + 1
                );
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, isTimerActive]);

    return (
        <div className="relative w-full h-full md:h-full">
            {/* Carousel Container */}
            <div className="relative overflow-hidden h-full">
                <AnimatePresence>
                    {videos.map((video, index) => (
                        index === currentIndex && (
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                initial={{ x: "100%" }}
                                animate={{ x: "0%" }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.6 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(event, info) => {
                                    if (info.offset.x < -50) handleNext();
                                    if (info.offset.x > 50) handlePrev();
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                                {/* Desktop Video */}
                                <video
                                    className="hidden w-full h-full object-cover md:block"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ pointerEvents: "none" }}
                                >
                                    <source src={video.desktop} type="video/mp4" />
                                </video>
                                {/* Mobile Video */}
                                <video
                                    className="block w-full h-full object-cover opacity-70 md:hidden"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ pointerEvents: "none" }}
                                >
                                    <source src={video.mobile} type="video/mp4" />
                                </video>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-black bg-opacity-75 text-white rounded-full p-3 hover:bg-opacity-90"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-black bg-opacity-75 text-white rounded-full p-3 hover:bg-opacity-90"
            >
                <ChevronRight />
            </button>

            {/* Labels and Descriptions */}
            <motion.div
                className="absolute bottom-32 right-1/3 z-20 transform -translate-x-1/2 text-center px-6 md:px-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h5
                    className="text-3xl md:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-teal-500 drop-shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {videos[currentIndex].label}
                </motion.h5>
                <motion.p
                    className="mt-4 text-sm md:text-lg font-medium text-white max-w-sm md:max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {window.innerWidth < 768
                        ? videos[currentIndex].mobileDescription
                        : videos[currentIndex].description}
                </motion.p>
            </motion.div>
        </div>
    );
}
