import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { motion } from 'framer-motion';
import Navbar from "./navbar/Navbar";
import {LucideFacebook, LucideInstagram, LucideYoutube} from "lucide-react";

const SLOGANS = [
    "Crafting Cinematic Stories",
    "Frame by Frame",
    "Capture. Create. Inspire."
];

const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
    }
};

const scrollButtonVariants = {
    animate: {
        opacity: [0, 1, 0],
        y: [0, 10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => setIndex((prevIndex) => prevIndex + 1), 3000);
        return () => clearInterval(intervalId);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById("Contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero-container relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <Navbar/>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
                <img src="/logo.png" alt="Logo" className="h-16 md:h-20 mt-4"/>
            </div>

            <div className="absolute flex md:space-x-6 space-x-4 z-30 ml-auto right-6 mt-6 top-4">
                <a href="https://www.instagram.com/shotbyspectrum/" target='_blank' className="text-white">
                    <LucideInstagram className="w-6 h-6"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61565984460545" target='_blank' className="text-white">
                    <LucideFacebook className="w-6 h-6"/>
                </a>
                {/*<a href="#" className="text-white">*/}
                {/*    <LucideYoutube className="w-6 h-6"/>*/}
                {/*</a>*/}
            </div>

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-80"
                autoPlay
                loop
                muted
                playsInline
                src={isMobile ? "/mobile.mp4" : "/desktop.mp4"}
            ></video>

            {/* Grain Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-30 mix-blend-overlay pointer-events-none"></div>

            {/* Center Text with Animation */}
            <div className="text-white text-center z-10 px-4 mb-8">
                <TextTransition
                    springConfig={presets.wobbly}
                    className="text-4xl md:text-6xl font-extrabold tracking-wide"
                >
                    {SLOGANS[index % SLOGANS.length]}
                </TextTransition>
            </div>

            {/* Contact Button */}
            <motion.div
                className="z-10 mt-4"
                variants={textVariants}
                initial="initial"
                animate="animate"
            >
                <button
                    className="px-8 py-3 mt-6 border border-white rounded-lg bg-transparent text-white font-light hover:bg-white hover:text-black transition"
                    onClick={scrollToContact}
                >
                    Contact Us
                </button>
            </motion.div>

            {/* Animated Scroll Icon */}
            <motion.img
                className="w-16 z-10 absolute bottom-36"
                src="/scroll.png"
                alt="Scroll Down"
                variants={scrollButtonVariants}
                animate="animate"
            />
        </div>
    );
}
