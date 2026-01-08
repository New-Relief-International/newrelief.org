import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Users, Music, Heart, BookOpen } from 'lucide-react';

export default function OurMinistries() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const hasAnimatedRef = useRef(false);

  const ministries = [
    {
      title: "Children's Ministry",
      description: "Nurturing faith in our youngest members through age-appropriate activities.",
      icon: Users
    },
    {
      title: "Worship Ministry",
      description: "Leading our congregation in worship through music and creative arts.",
      icon: Music
    },
    {
      title: "Outreach & Missions",
      description: "Serving our local community and supporting global mission efforts.",
      icon: Heart
    },
    {
      title: "Bible Study Groups",
      description: "Small groups meeting regularly to study scripture and grow in faith.",
      icon: BookOpen
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || hasAnimatedRef.current) return;

    // Use Intersection Observer instead of ScrollTrigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const isMobile = window.innerWidth < 768;

            // Create timeline for animations
            const tl = gsap.timeline();

            // Title animation
            tl.fromTo(
              titleRef.current,
              {
                y: isMobile ? 30 : 50,
                opacity: 0.3
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
              },
              0
            );

            // Subtitle animation
            tl.fromTo(
              subtitleRef.current,
              {
                y: isMobile ? 20 : 30,
                opacity: 0.3
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
              },
              0.2
            );

            // Cards animation - alternate from left and right
            cardsRef.current.forEach((card, index) => {
              if (card) {
                const fromLeft = index % 2 === 0;
                const mobileOffset = isMobile ? 50 : (fromLeft ? -200 : 200);
                tl.fromTo(
                  card,
                  {
                    x: mobileOffset,
                    y: isMobile ? 30 : 80,
                    opacity: 0.3,
                    scale: isMobile ? 0.95 : 0.85,
                    rotation: fromLeft ? (isMobile ? -5 : -10) : (isMobile ? 5 : 10)
                  },
                  {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: isMobile ? 0.7 : 1,
                    ease: isMobile ? 'power2.out' : 'back.out(1.2)'
                  },
                  0.3 + index * 0.1
                );
              }
            });

            // Icon bounce animation
            iconsRef.current.forEach((icon, index) => {
              if (icon) {
                tl.fromTo(
                  icon,
                  {
                    scale: 0,
                    rotation: -180
                  },
                  {
                    scale: 1,
                    rotation: 0,
                    duration: isMobile ? 0.8 : 1.2,
                    ease: 'back.out(2)'
                  },
                  0.4 + index * 0.1
                );
              }
            });

            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Hover animations
  const handleCardHover = (index) => {
    const card = cardsRef.current[index];
    const icon = iconsRef.current[index];

    if (card && icon) {
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
        duration: 0.4,
        ease: 'power2.out'
      });

      gsap.to(icon, {
        scale: 1.2,
        rotation: 360,
        duration: 0.6,
        ease: 'back.out(2)'
      });
    }
  };

  const handleCardLeave = (index) => {
    const card = cardsRef.current[index];
    const icon = iconsRef.current[index];

    if (card && icon) {
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        duration: 0.4,
        ease: 'power2.out'
      });

      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'back.out(2)'
      });
    }
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Ministries
          </h2>
          <p ref={subtitleRef} className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2">
            We offer various ministries to help you connect, grow, and serve in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {ministries.map((ministry, index) => {
          const IconComponent = ministry.icon;
          return (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-shadow active:scale-95 touch-manipulation"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
            >
              <div 
                ref={el => iconsRef.current[index] = el}
                className="bg-amber-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-amber-500 mb-3 sm:mb-4"
              >
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{ministry.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{ministry.description}</p>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}