// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import heRo from '../assets/images/hero.jpg'
// import heRo1 from '../assets/images/hero1.jpg'
// import heRo2 from '../assets/images/hero2.png'


// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, SplitText);

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const tagRef = useRef(null);
//   const ctaRef = useRef(null);
//   const bgImageRef = useRef(null);
//   const overlayRef = useRef(null);
//   const particlesRef = useRef([]);
//   const timelineRef = useRef(null);
  
//   // Hero carousel data
//   const slides = [
//     {
//       id: 1,
//       tag: "RELIEF DEVOTION",
//       title: "Every Monday to Friday from 7am - 7:30am",
//       subtitle: "Start your day with spiritual strength",
//       ctaText: "BOOK NOW",
//       ctaLink: "/book",
//       helpText: "NEED HELP NOW? EMAIL ME!",
//       phone: "+233-55-806-8774",
//       bgImage: heRo,
//       color: "#3B82F6"
//     },
//     {
//       id: 2,
//       tag: "NEW RELIEF INTERNATIONAL",
//       title: "Warriors of God",
//       subtitle: "Join our community of faith warriors",
//       ctaText: "JOIN NOW",
//       ctaLink: "/join",
//       helpText: "NEED HELP NOW? CONTACT US!",
//       phone: "+233-55-806-8774",
//       bgImage: heRo1,
//       color: "#EC4899"
//     },
//     {
//       id: 3,
//       tag: "SATURDAY SERVICE",
//       title: "Join us every Saturday at 6:30PM for Moment of Wisdom",
//       subtitle: "Experience the power of worship together",
//       ctaText: "LEARN MORE",
//       ctaLink: "/services",
//       helpText: "NEED DIRECTIONS? CALL US!",
//       phone: "+233-55-806-8774",
//       bgImage: heRo2,
//       color: "#8B5CF6"
//     }
//   ];

//   const currentSlideData = slides[currentSlide];

//   // Initialize hero animations
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Parallax effect on scroll
//       gsap.to(bgImageRef.current, {
//         yPercent: 30,
//         ease: "none",
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1
//         }
//       });

//       // Fade out content on scroll
//       gsap.to([titleRef.current, subtitleRef.current, ctaRef.current], {
//         y: -100,
//         opacity: 0,
//         ease: "power2.in",
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1
//         }
//       });

//       // Animate particles
//       particlesRef.current.forEach((particle, i) => {
//         if (particle) {
//           gsap.to(particle, {
//             y: "random(-50, 50)",
//             x: "random(-50, 50)",
//             opacity: "random(0.3, 1)",
//             duration: "random(3, 6)",
//             repeat: -1,
//             yoyo: true,
//             ease: "sine.inOut",
//             delay: i * 0.1
//           });
//         }
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   // Animate slide transitions
//   useEffect(() => {
//     if (timelineRef.current) {
//       timelineRef.current.kill();
//     }

//     const tl = gsap.timeline();
//     timelineRef.current = tl;

//     // Animate background image
//     tl.fromTo(bgImageRef.current, 
//       { scale: 1.2, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
//     );

//     // Animate overlay
//     tl.fromTo(overlayRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 0.8 },
//       "-=1.2"
//     );

//     // Animate tag
//     if (tagRef.current) {
//       tl.fromTo(tagRef.current,
//         { x: -50, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
//         "-=0.8"
//       );
//     }

//     // Split text animation for title
//     if (titleRef.current) {
//       const split = new SplitText(titleRef.current, { type: "words,chars" });
//       tl.fromTo(split.chars,
//         { y: 100, opacity: 0, rotationX: -90 },
//         { 
//           y: 0, 
//           opacity: 1, 
//           rotationX: 0,
//           duration: 0.8,
//           stagger: 0.02,
//           ease: "back.out(1.7)"
//         },
//         "-=0.4"
//       );
//     }

//     // Animate subtitle
//     if (subtitleRef.current) {
//       tl.fromTo(subtitleRef.current,
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
//         "-=0.6"
//       );
//     }

//     // Animate CTA
//     if (ctaRef.current) {
//       tl.fromTo(ctaRef.current.children,
//         { y: 30, opacity: 0, scale: 0.8 },
//         { 
//           y: 0, 
//           opacity: 1, 
//           scale: 1,
//           duration: 0.6,
//           stagger: 0.15,
//           ease: "back.out(1.7)"
//         },
//         "-=0.4"
//       );
//     }

//     return () => {
//       tl.kill();
//     };
//   }, [currentSlide]);

//   // Auto-advance carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 6000);
    
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div 
//       ref={heroRef}
//       className="relative w-full h-screen overflow-hidden bg-gray-900"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
//       </div>

//       {/* Diagonal Shapes */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-yellow-400/30 to-transparent rounded-full blur-3xl" />
//         <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl" />
//       </div>

//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <div 
//           ref={bgImageRef}
//           className="absolute inset-0 w-full h-[120%] bg-center bg-cover will-change-transform"
//           style={{ 
//             backgroundImage: `url(${currentSlideData.bgImage})`,
//             transformOrigin: "center center"
//           }}
//         />
        
//         {/* Gradient overlay */}
//         <div 
//           ref={overlayRef}
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(to right bottom, ${currentSlideData.color}40, rgba(0,0,0,0.7))`
//           }}
//         />
        
//         {/* Particles */}
//         <div className="absolute inset-0">
//           {Array.from({ length: 20 }).map((_, index) => (
//             <div
//               key={`particle-${index}`}
//               ref={(el) => (particlesRef.current[index] = el)}
//               className="absolute w-1 h-1 rounded-full bg-white/70"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="container mx-auto px-6 md:px-8 lg:px-16">
//           <div className="max-w-2xl">
//             {/* Tag */}
//             <div
//               ref={tagRef}
//               className="inline-block relative px-6 py-2 mb-6 overflow-hidden"
//               style={{ backgroundColor: currentSlideData.color }}
//             >
//               <span className="relative text-white font-bold tracking-wider">
//                 {currentSlideData.tag}
//               </span>
//             </div>
            
//             {/* Title */}
//             <h1
//               ref={titleRef}
//               className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white"
//             >
//               {currentSlideData.title}
//             </h1>
            
//             {/* Subtitle */}
//             <p
//               ref={subtitleRef}
//               className="text-xl md:text-2xl mb-8 text-white/80"
//             >
//               {currentSlideData.subtitle}
//             </p>
            
//             {/* CTA Buttons */}
//             <div
//               ref={ctaRef}
//               className="flex flex-wrap items-center gap-6"
//             >
//               <a 
//                 href={currentSlideData.ctaLink}
//                 className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 transition-all cursor-pointer"
//                 onMouseEnter={(e) => {
//                   gsap.to(e.currentTarget, {
//                     scale: 1.05,
//                     boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//                     duration: 0.3,
//                     ease: "back.out(1.7)"
//                   });
//                 }}
//                 onMouseLeave={(e) => {
//                   gsap.to(e.currentTarget, {
//                     scale: 1,
//                     boxShadow: "0 0 0 rgba(0,0,0,0)",
//                     duration: 0.3
//                   });
//                 }}
//               >
//                 {currentSlideData.ctaText}
//               </a>
              
//               <div className="flex items-center">
//                 <span className="mx-4 text-white/70">OR</span>
//                 <div>
//                   <p className="text-sm text-white/70">{currentSlideData.helpText}</p>
//                   <p className="text-xl font-bold text-white">{currentSlideData.phone}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button 
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 backdrop-blur-sm transition-all"
//         onMouseEnter={(e) => {
//           gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 });
//         }}
//         onMouseLeave={(e) => {
//           gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
//         }}
//         aria-label="Previous slide"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
      
//       <button 
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 backdrop-blur-sm transition-all"
//         onMouseEnter={(e) => {
//           gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 });
//         }}
//         onMouseLeave={(e) => {
//           gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
//         }}
//         aria-label="Next slide"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
//         {slides.map((slide, index) => (
//           <button
//             key={slide.id}
//             onClick={() => setCurrentSlide(index)}
//             className="relative h-3 rounded-full overflow-hidden transition-all duration-300"
//             style={{ 
//               width: currentSlide === index ? "2rem" : "0.75rem",
//               backgroundColor: currentSlide === index ? "white" : "rgba(255,255,255,0.5)"
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             {currentSlide === index && (
//               <div 
//                 className="absolute inset-0 origin-left animate-progress"
//                 style={{ backgroundColor: slide.color }}
//               />
//             )}
//           </button>
//         ))}
//       </div>

//       <style>{`
//         @keyframes progress {
//           from { transform: scaleX(0); }
//           to { transform: scaleX(1); }
//         }
//         .animate-progress {
//           animation: progress 6s linear;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;



import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import heRo from '../assets/images/hero.jpg'
import heRo1 from '../assets/images/hero1.jpg'
import heRo2 from '../assets/images/hero2.png'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const tagRef = useRef(null);
  const ctaRef = useRef(null);
  const bgImageRef = useRef(null);
  const overlayRef = useRef(null);
  const particlesRef = useRef([]);
  const timelineRef = useRef(null);
  
  // Hero carousel data
  const slides = [
    {
      id: 1,
      tag: "RELIEF DEVOTION",
      title: "Every Monday to Friday from 7am - 7:30am",
      titleShort: "Mon-Fri 7am - 7:30am Relief Devotion",
      subtitle: "Start your day with spiritual strength",
      ctaText: "BOOK NOW",
      ctaLink: "/book",
      helpText: "NEED HELP NOW? EMAIL ME!",
      helpTextShort: "NEED HELP?",
      phone: "+233-55-806-8774",
      bgImage: heRo,
      color: "#3B82F6"
    },
    {
      id: 2,
      tag: "NEW RELIEF INTERNATIONAL",
      tagShort: "NEW RELIEF",
      title: "Warriors of God",
      titleShort: "Warriors of God",
      subtitle: "Join our community of faith warriors",
      ctaText: "JOIN NOW",
      ctaLink: "/join",
      helpText: "NEED HELP NOW? CONTACT US!",
      helpTextShort: "CONTACT US",
      phone: "+233-55-806-8774",
      bgImage: heRo1,
      color: "#EC4899"
    },
    {
      id: 3,
      tag: "SATURDAY SERVICE",
      title: "Join us every Saturday at 6:30PM for Moment of Wisdom",
      titleShort: "Saturdays 6:30PM - Moment of Wisdom",
      subtitle: "Experience the power of worship together",
      ctaText: "LEARN MORE",
      ctaLink: "/services",
      helpText: "NEED DIRECTIONS? CALL US!",
      helpTextShort: "CALL US",
      phone: "+233-55-806-8774",
      bgImage: heRo2,
      color: "#8B5CF6"
    }
  ];

  const currentSlideData = slides[currentSlide];

  // Initialize hero animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(bgImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      // Fade out content on scroll
      gsap.to([titleRef.current, subtitleRef.current, ctaRef.current], {
        y: -100,
        opacity: 0,
        ease: "power2.in",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      // Animate particles
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: "random(-50, 50)",
            x: "random(-50, 50)",
            opacity: "random(0.3, 1)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Animate slide transitions
  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const tl = gsap.timeline();
    timelineRef.current = tl;

    // Animate background image
    tl.fromTo(bgImageRef.current, 
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Animate overlay
    tl.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=1.2"
    );

    // Animate tag
    if (tagRef.current) {
      tl.fromTo(tagRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.8"
      );
    }

    // Split text animation for title
    if (titleRef.current) {
      const split = new SplitText(titleRef.current, { type: "words,chars" });
      tl.fromTo(split.chars,
        { y: 100, opacity: 0, rotationX: -90 },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
    }

    // Animate CTA
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current.children,
        { y: 30, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      );
    }

    return () => {
      tl.kill();
    };
  }, [currentSlide]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
      </div>

      {/* Diagonal Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 sm:w-1/2 h-3/4 sm:h-1/2 bg-gradient-to-tl from-yellow-400/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute -top-1/4 -left-1/4 w-3/4 sm:w-1/2 h-3/4 sm:h-1/2 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          ref={bgImageRef}
          className="absolute inset-0 w-full h-[120%] bg-center bg-cover will-change-transform"
          style={{ 
            backgroundImage: `url(${currentSlideData.bgImage})`,
            transformOrigin: "center center"
          }}
        />
        
        {/* Gradient overlay */}
        <div 
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right bottom, ${currentSlideData.color}40, rgba(0,0,0,0.7))`
          }}
        />
        
        {/* Particles - Hidden on small mobile for performance */}
        <div className="absolute inset-0 hidden md:block">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={`particle-${index}`}
              ref={(el) => (particlesRef.current[index] = el)}
              className="absolute w-1 h-1 rounded-full bg-white/70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl">
            {/* Tag */}
            <div
              ref={tagRef}
              className="inline-block relative px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 overflow-hidden"
              style={{ backgroundColor: currentSlideData.color }}
            >
              <span className="relative text-white font-bold tracking-wider text-xs sm:text-sm md:text-base">
                <span className="hidden sm:inline">{currentSlideData.tag}</span>
                <span className="inline sm:hidden">{currentSlideData.tagShort || currentSlideData.tag}</span>
              </span>
            </div>
            
            {/* Title */}
            <h1
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-white"
            >
              <span className="hidden sm:inline">{currentSlideData.title}</span>
              <span className="inline sm:hidden">{currentSlideData.titleShort}</span>
            </h1>
            
            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/80 max-w-lg"
            >
              {currentSlideData.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6"
            >
              <a 
                href={currentSlideData.ctaLink}
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 sm:py-3 px-6 sm:px-8 transition-all cursor-pointer text-sm sm:text-base active:scale-95 w-full sm:w-auto text-center"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    duration: 0.3,
                    ease: "back.out(1.7)"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    duration: 0.3
                  });
                }}
              >
                {currentSlideData.ctaText}
              </a>
              
              <div className="flex items-center w-full sm:w-auto">
                <span className="mr-3 sm:mx-4 text-white/70 text-sm sm:text-base">OR</span>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-white/70">
                    <span className="hidden sm:inline">{currentSlideData.helpText}</span>
                    <span className="inline sm:hidden">{currentSlideData.helpTextShort}</span>
                  </p>
                  <a 
                    href={`tel:${currentSlideData.phone}`}
                    className="text-base sm:text-lg md:text-xl font-bold text-white hover:text-yellow-400 transition-colors block"
                  >
                    {currentSlideData.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 active:bg-black/50 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 backdrop-blur-sm transition-all"
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
        }}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 active:bg-black/50 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 backdrop-blur-sm transition-all"
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
        }}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-20 px-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className="relative h-2 sm:h-3 rounded-full overflow-hidden transition-all duration-300"
            style={{ 
              width: currentSlide === index ? "1.5rem" : "0.5rem",
              backgroundColor: currentSlide === index ? "white" : "rgba(255,255,255,0.5)"
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <div 
                className="absolute inset-0 origin-left animate-progress"
                style={{ backgroundColor: slide.color }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-progress {
          animation: progress 6s linear;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;