import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Home, Package, Edit, Airplay, Briefcase } from "lucide-react";
import "./services.scss";

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.1, rootMargin: "0px" });

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Camera className="icon" />,
      title: "Commercials",
      description: `
        Captivate your audience with high-quality commercials designed to leave a lasting impression. 
        Our team crafts compelling visuals that resonate with viewers and enhance your brand’s impact. 
        `,
    },
    {
      icon: <Home className="icon" />,
      title: "Real Estate",
      description: `
        Showcase properties in their best light with stunning videography that highlights every angle. 
        Perfect for realtors and developers aiming to attract the right buyers with engaging, 
        high-definition tours that bring properties to life.`,
    },
    {
      icon: <Package className="icon" />,
      title: "Product Commercials",
      description: `
        Transform products into must-haves through creative storytelling and dynamic visuals. 
        Ideal for brands wanting to make their products the star of the show, 
        driving both interest and conversions with every frame.`,
    },
    {
      icon: <Edit className="icon" />,
      title: "Marketing",
      description: `
        Elevate your brand with impactful content tailored for social media and digital platforms. 
        We help you engage audiences and grow your presence with strategic content.`,
    },
    {
      icon: <Airplay className="icon" />,
      title: "Drone Shooting",
      description: `
        Capture breathtaking aerial views that offer a fresh perspective. 
        Our expert drone pilots create visually stunning footage for your business.
        `,
    },
    {
      icon: <Briefcase className="icon" />,
      title: "Corporate & Events",
      description: `
        Document corporate events, conferences, and more with high-quality videography that captures 
        the essence of each moment. Perfect for showcasing your brand’s achievements.
        `,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
      <div ref={ref} className="services">
        <div className="titleContainer">
          <div className="title">
            <h1>
              <b style={{ color: isMobile ? "inherit" : "orange" }}>Our</b> Services
            </h1>
          </div>
        </div>
        <div className="listContainer">
          {isMobile ? (
              <div className="carousel">
                <div className="box">
                  {services[currentIndex].icon}
                  <h2>{services[currentIndex].title}</h2>
                  <p>{services[currentIndex].description}</p>
                </div>
                <div className="carouselButtons">
                  <button onClick={handlePrev}>❮</button>
                  <button onClick={handleNext}>❯</button>
                </div>
              </div>
          ) : (
              services.map((service, index) => (
                  <div key={index} className="box">
                    {service.icon}
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
              ))
          )}
        </div>
      </div>
  );
};

export default Services;
