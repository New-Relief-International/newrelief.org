// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Clock, Users, MapPin } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// export default function InfoSection() {
//   const containerRef = useRef(null);
//   const cardsRef = useRef([]);
//   const iconsRef = useRef([]);
//   const numbersRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial card animations on scroll
//       gsap.fromTo(
//         cardsRef.current,
//         {
//           y: 60,
//           opacity: 0,
//           rotationX: -15
//         },
//         {
//           y: 0,
//           opacity: 1,
//           rotationX: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top 80%',
//             end: 'top 50%',
//             toggleActions: 'play none none none'
//           }
//         }
//       );

//       // Icon animations
//       gsap.fromTo(
//         iconsRef.current,
//         {
//           scale: 0,
//           rotation: -180
//         },
//         {
//           scale: 1,
//           rotation: 0,
//           duration: 0.6,
//           stagger: 0.15,
//           ease: 'back.out(1.7)',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top 80%',
//             toggleActions: 'play none none none'
//           }
//         }
//       );

//       // Counter animations (if you add numbers later)
//       numbersRef.current.forEach((number) => {
//         if (number) {
//           const target = parseInt(number.dataset.target);
//           gsap.fromTo(
//             number,
//             { innerText: 0 },
//             {
//               innerText: target,
//               duration: 2,
//               snap: { innerText: 1 },
//               scrollTrigger: {
//                 trigger: number,
//                 start: 'top 80%',
//                 toggleActions: 'play none none none'
//               },
//               onUpdate: function() {
//                 number.innerText = Math.ceil(number.innerText);
//               }
//             }
//           );
//         }
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // Magnetic hover effect
//   const handleMouseMove = (e, index) => {
//     const card = cardsRef.current[index];
//     const icon = iconsRef.current[index];
//     if (!card) return;

//     const rect = card.getBoundingClientRect();
//     const cardCenterX = rect.left + rect.width / 2;
//     const cardCenterY = rect.top + rect.height / 2;
    
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
    
//     const distanceX = mouseX - cardCenterX;
//     const distanceY = mouseY - cardCenterY;
//     const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
//     // Magnetic effect radius
//     const magneticRadius = 200;
    
//     if (distance < magneticRadius) {
//       const pullStrength = (magneticRadius - distance) / magneticRadius;
//       const moveX = distanceX * pullStrength * 0.15;
//       const moveY = distanceY * pullStrength * 0.15;
      
//       gsap.to(card, {
//         x: moveX,
//         y: moveY,
//         duration: 0.3,
//         ease: 'power2.out'
//       });
//     }

//     // 3D tilt effect
//     const rotateX = ((mouseY - cardCenterY) / rect.height) * -15;
//     const rotateY = ((mouseX - cardCenterX) / rect.width) * 15;

//     gsap.to(card, {
//       rotationX: rotateX,
//       rotationY: rotateY,
//       transformPerspective: 1000,
//       duration: 0.3,
//       ease: 'power2.out'
//     });

//     // Icon morph on hover
//     gsap.to(icon, {
//       scale: 1.2,
//       rotation: 360,
//       duration: 0.4,
//       ease: 'back.out(1.7)'
//     });
//   };

//   const handleMouseLeave = (index) => {
//     const card = cardsRef.current[index];
//     const icon = iconsRef.current[index];
    
//     gsap.to(card, {
//       x: 0,
//       y: 0,
//       rotationX: 0,
//       rotationY: 0,
//       duration: 0.5,
//       ease: 'power2.out'
//     });

//     gsap.to(icon, {
//       scale: 1,
//       rotation: 0,
//       duration: 0.4,
//       ease: 'back.out(1.7)'
//     });
//   };

//   const cards = [
//     {
//       icon: Clock,
//       title: 'Saturday Services',
//       content: (
//         <>
//           <div className="mb-2">
//             <p className="text-gray-600">7:30 PM - <span className="text-gray-800">Moment Of Wisdom</span></p>
//           </div>
//           <div>
//             <p className="text-gray-600">6:30 PM - <span className="text-gray-800">Teens Service</span></p>
//           </div>
//         </>
//       )
//     },
//     {
//       icon: Users,
//       title: 'Chapter Meetings',
//       content: (
//         <>
//           <p className="text-gray-600 mb-2">Sundays at 7:00 PM</p>
//           <p className="text-gray-600">Various Locations</p>
//         </>
//       ),
//       counter: 15 // Example counter
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       content: (
//         <>
//           <p className="text-gray-600 mb-2">Yoomo Specs</p>
//           <p className="text-gray-600">Teshie, Accra - Ghana</p>
//         </>
//       )
//     }
//   ];

//   return (
//     <div className="p-4 md:p-6 w-full bg-gray-50 min-h-screen flex items-center">
//       <div
//         ref={containerRef}
//         className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
//       >
//         {cards.map((card, index) => {
//           const IconComponent = card.icon;
//           return (
//             <div
//               key={index}
//               ref={el => cardsRef.current[index] = el}
//               className="bg-white rounded-lg shadow-md p-6 text-center flex-1 min-w-72 max-w-80 flex flex-col items-center cursor-pointer"
//               onMouseMove={(e) => handleMouseMove(e, index)}
//               onMouseLeave={() => handleMouseLeave(index)}
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               <div 
//                 ref={el => iconsRef.current[index] = el}
//                 className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center text-amber-600 mb-4"
//               >
//                 <IconComponent size={24} />
//               </div>
//               <h2 className="mb-4 text-lg font-bold text-gray-800">{card.title}</h2>
//               {card.counter && (
//                 <div className="text-4xl font-bold text-amber-600 mb-2">
//                   <span 
//                     ref={el => numbersRef.current[index] = el}
//                     data-target={card.counter}
//                   >
//                     0
//                   </span>
//                   <span>+</span>
//                 </div>
//               )}
//               <div>{card.content}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Users, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function InfoSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const numbersRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial card animations on scroll - less aggressive on mobile
      gsap.fromTo(
        cardsRef.current,
        {
          y: isMobile ? 40 : 60,
          opacity: 0,
          rotationX: isMobile ? -8 : -15
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: isMobile ? 0.15 : 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Icon animations
      gsap.fromTo(
        iconsRef.current,
        {
          scale: 0,
          rotation: isMobile ? -90 : -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: isMobile ? 0.1 : 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Counter animations
      numbersRef.current.forEach((number) => {
        if (number) {
          const target = parseInt(number.dataset.target);
          gsap.fromTo(
            number,
            { innerText: 0 },
            {
              innerText: target,
              duration: 2,
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: number,
                start: 'top 80%',
                toggleActions: 'play none none none'
              },
              onUpdate: function() {
                number.innerText = Math.ceil(number.innerText);
              }
            }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Magnetic hover effect - disabled on mobile for better performance
  const handleMouseMove = (e, index) => {
    if (isMobile) return;
    
    const card = cardsRef.current[index];
    const icon = iconsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const distanceX = mouseX - cardCenterX;
    const distanceY = mouseY - cardCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Magnetic effect radius
    const magneticRadius = 200;
    
    if (distance < magneticRadius) {
      const pullStrength = (magneticRadius - distance) / magneticRadius;
      const moveX = distanceX * pullStrength * 0.15;
      const moveY = distanceY * pullStrength * 0.15;
      
      gsap.to(card, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    // 3D tilt effect
    const rotateX = ((mouseY - cardCenterY) / rect.height) * -15;
    const rotateY = ((mouseX - cardCenterX) / rect.width) * 15;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });

    // Icon morph on hover
    gsap.to(icon, {
      scale: 1.2,
      rotation: 360,
      duration: 0.4,
      ease: 'back.out(1.7)'
    });
  };

  const handleMouseLeave = (index) => {
    if (isMobile) return;
    
    const card = cardsRef.current[index];
    const icon = iconsRef.current[index];
    
    gsap.to(card, {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });

    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.4,
      ease: 'back.out(1.7)'
    });
  };

  // Simple touch feedback for mobile
  const handleTouchStart = (index) => {
    if (!isMobile) return;
    
    const card = cardsRef.current[index];
    const icon = iconsRef.current[index];
    
    gsap.to(card, {
      scale: 0.98,
      duration: 0.2,
      ease: 'power2.out'
    });

    gsap.to(icon, {
      scale: 1.1,
      duration: 0.2,
      ease: 'back.out(1.7)'
    });
  };

  const handleTouchEnd = (index) => {
    if (!isMobile) return;
    
    const card = cardsRef.current[index];
    const icon = iconsRef.current[index];
    
    gsap.to(card, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out'
    });

    gsap.to(icon, {
      scale: 1,
      duration: 0.2,
      ease: 'back.out(1.7)'
    });
  };

  const cards = [
    {
      icon: Clock,
      title: 'Saturday Services',
      content: (
        <>
          <div className="mb-2">
            <p className="text-gray-600 text-sm sm:text-base">7:30 PM - <span className="text-gray-800 font-medium">Moment Of Wisdom</span></p>
          </div>
          <div>
            <p className="text-gray-600 text-sm sm:text-base">6:30 PM - <span className="text-gray-800 font-medium">Teens Service</span></p>
          </div>
        </>
      )
    },
    {
      icon: Users,
      title: 'Chapter Meetings',
      content: (
        <>
          <p className="text-gray-600 mb-2 text-sm sm:text-base">Sundays at 7:00 PM</p>
          <p className="text-gray-600 text-sm sm:text-base">Various Locations</p>
        </>
      ),
      counter: 15
    },
    {
      icon: MapPin,
      title: 'Location',
      content: (
        <>
          <p className="text-gray-600 mb-2 text-sm sm:text-base">Yoomo Specs</p>
          <p className="text-gray-600 text-sm sm:text-base">Teshie, Accra - Ghana</p>
        </>
      )
    }
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 w-full bg-gray-50 min-h-screen flex items-center">
      <div
        ref={containerRef}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto w-full"
      >
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white rounded-lg shadow-md hover:shadow-xl active:shadow-lg p-4 sm:p-5 md:p-6 text-center flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-72 max-w-full sm:max-w-80 flex flex-col items-center cursor-pointer transition-shadow duration-300 touch-manipulation"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={() => handleTouchEnd(index)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                ref={el => iconsRef.current[index] = el}
                className="bg-amber-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-amber-600 mb-3 sm:mb-4"
              >
                <IconComponent size={isMobile ? 20 : 24} />
              </div>
              <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold text-gray-800">{card.title}</h2>
              {card.counter && (
                <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">
                  <span 
                    ref={el => numbersRef.current[index] = el}
                    data-target={card.counter}
                  >
                    0
                  </span>
                  <span>+</span>
                </div>
              )}
              <div className="w-full">{card.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}