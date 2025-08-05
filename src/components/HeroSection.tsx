
import React from "react";
import { motion } from "framer-motion";

const slides = [
  "/assets/hero1.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
];

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full flex animate-scroll">
          {slides.concat(slides).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-[#38b6ff]/60 backdrop-blur">
        <div className="text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg"
          >
            Empowering Change,
            <br /> One Step at a Time
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white mt-4 text-lg md:text-xl drop-shadow"
          >
            Join us in our mission to uplift communities across the globe.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
