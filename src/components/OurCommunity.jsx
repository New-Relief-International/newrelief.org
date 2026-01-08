import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Leo from '../assets/images/Leo.jpg'
import Philip from '../assets/images/Philip.jpg'
import Asantewaa from '../assets/images/Asantewaa.jpg'
import Eric from '../assets/images/Eric.jpg'
import Prince from '../assets/images/Prince.jpg'


gsap.registerPlugin(ScrollTrigger, Draggable);

export default function CommunityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const autoPlayRef = useRef(null);
  const carouselRef = useRef(null);
  const dragContainerRef = useRef(null);
  const draggableInstance = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      quote: "Finding New Relief International has been a blessing for our family. The children's ministry is amazing, and we've made lifelong friends here.",
      name: "Mr sLeonard",
      since: "Member since 2018",
      image: Leo
    },
    {
      id: 2,
      quote: "New Relief International has helped me grow in my faith and provided support during difficult times. I'm grateful for this church family.",
      name: "Philip Martei",
      since: "Member since 2020",
      image: Philip
    },
    {
      id: 3,
      quote: "New Relief International welcomed me with open arms. The sermons are inspiring and the people are genuine.",
      name: "Ms Joycelyn",
      since: "Member since 2022",
      image: Asantewaa
    },
    {
      id: 4,
      quote: "I've been part of several ministries here and each one has helped me grow closer to God. The leadership truly cares about each member.",
      name: "Mr Eric",
      since: "Member since 2015",
      image: Eric
    },
    {
      id: 5,
      quote: "Our family found a spiritual home here after searching for years. The worship is uplifting and the teaching is biblically sound.",
      name: "Mr Prince Aggrey",
      since: "Member since 2019",
      image: Prince
    }
  ];

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlayActive) {
      autoPlayRef.current = setTimeout(() => {
        goNext();
      }, 7000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlayActive]);

  // GSAP ScrollTrigger for auto-play control
  useEffect(() => {
    if (carouselRef.current) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: carouselRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => setIsAutoPlayActive(true),
        onLeave: () => setIsAutoPlayActive(false),
        onEnterBack: () => setIsAutoPlayActive(true),
        onLeaveBack: () => setIsAutoPlayActive(false),
      });

      return () => scrollTrigger.kill();
    }
  }, []);

  // GSAP Draggable
  useEffect(() => {
    if (dragContainerRef.current) {
      draggableInstance.current = Draggable.create(dragContainerRef.current, {
        type: "x",
        inertia: true,
        bounds: { minX: -100, maxX: 100 },
        onDragEnd: function() {
          const dragDistance = this.x;
          
          // Threshold for switching slides
          if (dragDistance < -50) {
            goNext();
          } else if (dragDistance > 50) {
            goPrev();
          }
          
          // Reset position with smooth animation
          gsap.to(this.target, {
            x: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        },
        onDrag: function() {
          // Pause auto-play while dragging
          if (autoPlayRef.current) {
            clearTimeout(autoPlayRef.current);
          }
        }
      });

      return () => {
        if (draggableInstance.current[0]) {
          draggableInstance.current[0].kill();
        }
      };
    }
  }, [currentIndex]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      y: 20,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      y: -20,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div ref={carouselRef} className="bg-gray-50 py-10 sm:py-12 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Community</h2>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Hear from members of our church family about their experiences.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div ref={dragContainerRef} className="cursor-grab active:cursor-grabbing touch-pan-x">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 400, damping: 25 },
                  y: { type: "spring", stiffness: 500, damping: 28 },
                  opacity: { duration: 0.4 },
                  scale: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="w-full"
              >
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
                  <div className="text-base sm:text-lg md:text-xl italic text-gray-700 mb-4 sm:mb-6">
                    "{testimonials[currentIndex].quote}"
                  </div>
                  <div className="flex items-center">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-3 sm:ml-4 min-w-0">
                      <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">{testimonials[currentIndex].name}</p>
                      <p className="text-sm sm:text-base text-gray-500">{testimonials[currentIndex].since}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={goPrev}
              className="bg-white text-gray-800 px-4 sm:px-6 py-2 rounded-lg shadow hover:shadow-lg active:scale-95 transition-all text-sm sm:text-base touch-manipulation"
            >
              Previous
            </button>
            <button
              onClick={goNext}
              className="bg-white text-gray-800 px-4 sm:px-6 py-2 rounded-lg shadow hover:shadow-lg active:scale-95 transition-all text-sm sm:text-base touch-manipulation"
            >
              Next
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all touch-manipulation ${
                  index === currentIndex 
                    ? 'w-6 sm:w-8 bg-gray-800' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}