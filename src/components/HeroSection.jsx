import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef);
  const controls = useAnimation();
  
  // Hero carousel data with more creative content
  const slides = [
    {
      id: 1,
      tag: "RELIEF DEVOTION",
      title: "Every Monday to Friday from 7am - 7:30am",
      subtitle: "Start your day with spiritual strength",
      ctaText: "BOOK NOW",
      ctaLink: "/book",
      helpText: "NEED HELP NOW? EMAIL ME!",
      phone: "+233-55-806-8774",
      bgImage: "/api/placeholder/1280/500",
      color: "#3B82F6" // blue
    },
    {
      id: 2,
      tag: "NEW RELIEF INTERNATIONAL",
      title: "Warriors of God",
      subtitle: "Join our community of faith warriors",
      ctaText: "JOIN NOW",
      ctaLink: "/join",
      helpText: "NEED HELP NOW? CONTACT US!",
      phone: "+233-55-806-8774",
      bgImage: "/api/placeholder/1280/500",
      color: "#EC4899" // pink
    },
    {
      id: 3,
      tag: "SUNDAY SERVICE",
      title: "Join us every Sunday at 9am",
      subtitle: "Experience the power of worship together",
      ctaText: "LEARN MORE",
      ctaLink: "/services",
      helpText: "NEED DIRECTIONS? CALL US!",
      phone: "+233-55-806-8774",
      bgImage: "/api/placeholder/1280/500",
      color: "#8B5CF6" // purple
    }
  ];

  // Animate in when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Go to previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Go to next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Motion variants
  const slideVariants = {
    incoming: (custom) => ({
      x: custom > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    },
    outgoing: (custom) => ({
      x: custom > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Get current slide data
  const currentSlideData = slides[currentSlide];

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-screen overflow-hidden bg-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
      </div>

      {/* Diagonal Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-yellow-400/30 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity
          }}
        />
      </div>

      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={`slide-bg-${currentSlide}`}
          className="absolute inset-0"
          initial="incoming"
          animate="active"
          exit="outgoing"
          custom={direction}
          variants={slideVariants}
        >
          {/* Image with overlay */}
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${currentSlideData.bgImage})` }}
          />
          
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 bg-black/50"
            style={{
              background: `linear-gradient(to right bottom, ${currentSlideData.color}40, rgba(0,0,0,0.8))`
            }}
          />
          
          {/* Particle overlay */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, index) => (
              <motion.div
                key={`particle-${index}`}
                className="absolute w-1 h-1 rounded-full bg-white/70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-content-${currentSlide}`}
              className="max-w-2xl"
              initial="incoming"
              animate="active"
              exit="outgoing"
              custom={direction}
              variants={slideVariants}
            >
              {/* Tag */}
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-block relative px-6 py-2 mb-6 overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0" 
                  style={{ backgroundColor: currentSlideData.color }}
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <span className="relative text-white font-bold tracking-wider">{currentSlideData.tag}</span>
              </motion.div>
              
              {/* Title */}
              <motion.h1
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white"
              >
                {currentSlideData.title}
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-xl md:text-2xl mb-8 text-white/80"
              >
                {currentSlideData.subtitle}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap items-center gap-6"
              >
                <motion.a 
                  href={currentSlideData.ctaLink}
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{currentSlideData.ctaText}</span>
                  <motion.span 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
                
                <motion.div 
                  className="flex items-center"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <span className="mx-4 text-white/70">OR</span>
                  <div>
                    <p className="text-sm text-white/70">{currentSlideData.helpText}</p>
                    <p className="text-xl font-bold text-white">{currentSlideData.phone}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 backdrop-blur-sm"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 backdrop-blur-sm"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="relative h-3 rounded-full overflow-hidden"
            style={{ width: currentSlide === index ? "2rem" : "0.75rem" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div 
              className="absolute inset-0 rounded-full"
              style={{ 
                backgroundColor: currentSlide === index ? "white" : "rgba(255,255,255,0.5)",
              }}
            />
            {currentSlide === index && (
              <motion.div 
                className="absolute inset-0 origin-left"
                style={{ backgroundColor: slide.color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;