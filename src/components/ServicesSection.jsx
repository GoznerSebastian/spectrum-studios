import React, { useRef, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Commercials",
        description: "Captivating video advertisements that bring your brand to life.",
        subServices: ["TV Ads", "Social Media Campaigns", "Brand Storytelling"],
        image: "/commercials.jpg",
        align: "left"
    },
    {
        title: "Real Estate",
        description: "Showcasing properties with stunning visuals.",
        subServices: ["Property Tours", "Aerial Shots", "Interior Showcases"],
        image: "/realestate.jpg",
        align: "right"
    },
    {
        title: "Product Commercials",
        description: "Highlighting your products with cinematic detail.",
        subServices: ["Product Demos", "Lifestyle Shots", "Close-Up Showcases"],
        image: "/product.jpg",
        align: "left"
    },
    {
        title: "Content Creation & Marketing",
        description: "Creating engaging content to grow your online presence.",
        subServices: ["Social Media Content", "Influencer Collaborations", "Brand Development"],
        image: "/contentcreation.jpg",
        align: "right"
    },
    {
        title: "Drone Shooting",
        description: "Capturing breathtaking aerial views.",
        subServices: ["Landscape Shots", "Event Coverage", "Panoramic Videos"],
        image: "/drone.jpg",
        align: "left"
    }
];

export default function ServicesSection() {
    const sectionRefs = useRef([]);
    sectionRefs.current = [];

    useEffect(() => {
        sectionRefs.current.forEach((section, index) => {
            gsap.fromTo(
                section,
                { opacity: 0, x: services[index].align === "left" ? -100 : 100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    delay: index * 0.3,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <div className="bg-gray-900 text-white py-20">
            <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
            <div className="max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={addToRefs}
                        className={`flex items-center py-20 ${
                            service.align === "left" ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                        <div className="w-1/2 p-6">
                            <TextTransition springConfig={presets.gentle} className="text-3xl font-extrabold mb-4">
                                <h3>{service.title}</h3>
                            </TextTransition>
                            <p className="text-xl font-semibold mb-2">{service.description}</p>
                            <ul className="list-disc list-inside text-lg font-light">
                                {service.subServices.map((sub, subIndex) => (
                                    <li key={subIndex}>{sub}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-1/2 p-6">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-20">
                <button
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-xl hover:bg-blue-500 transition duration-300"
                    onClick={() => window.location.href = "/contact"}
                >
                    Get in Touch
                </button>
            </div>
        </div>
    );
}
