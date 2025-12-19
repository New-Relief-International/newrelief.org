// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import EverythingByPrayer from "../assets/images/EverythingByPrayer.png";
// import EverythingByPrayer1 from "../assets/images/EverythingByPrayer1.png";
// import EverythingByPrayer2 from "../assets/images/EverythingByPrayer2.png";
// import EverythingByPrayer3 from "../assets/images/EverythingByPrayer3.png";
// import EverythingByPrayer4 from "../assets/images/EverythingByPrayer4.png";
// import EverythingByPrayer5 from "../assets/images/EverythingByPrayer5.png";
// import EverythingByPrayer6 from "../assets/images/EverythingByPrayer6.png";
// import Papa from "../assets/images/Papa.jpg"

// export default function QuotesFeed() {
//   const [showAllPosts, setShowAllPosts] = useState(false);
//   const postsContainerRef = useRef(null);
//   const postRefs = useRef([]);

//   const posts = [
//     {
//       id: 1,
//       name: "PS Richmond Korley",
//       username: "@psrichmond",
//       profilePic: Papa,
//       series: "Everything By Prayer",
//       message:
//         "People may not understand why you shout when you're praying, but God is hearing and he will intervene",
//       quoteImage: EverythingByPrayer, // Replace with actual path
//       time: "Nov 12, 2024",
//       views: "1.2K",
//       isFollowing: true,
//     },
//     {
//       id: 2,
//       name: "PS Richmond Korley",
//       username: "@psrichmond",
//       profilePic: Papa,
//       series: "Everything By Prayer",
//       message:
//         "Anchor your prayer on the word of God. Learn to Pray the word of God, that's the prayer that works. Be a person who prays the word of God.",
//       quoteImage:EverythingByPrayer1, // Replace with actual path
//       time: "Nov 12, 2024",
//       views: "1.5K",
//       isFollowing: true,
//     },
//     {
//       id: 3,
//       name: "PS Richmond Korley",
//       username: "@psrichmond",
//       profilePic: Papa,
//       series: EverythingByPrayer2,
//       message:
//         'God said "I have exalted my word above all my names..." Stand on God\'s word, remind God of His word. Take God at His word Daily.',
//       quoteImage: EverythingByPrayer3, // Replace with actual path
//       time: "Nov 12, 2024",
//       views: "1.8K",
//       isFollowing: true,
//     },
//     {
//       id: 4,
//       name: "PS Richmond Korley",
//       username: "@psrichmond",
//       profilePic: Papa,
//       series: "Everything By Prayer",
//       message:
//         "Things you don't confront will stay, things you don't fight, you permit them indirectly. Whatever you do not like, take them up in the place of prayer and take God by His word.",
//       quoteImage: EverythingByPrayer4, // Replace with actual path
//       time: "Nov 12, 2024",
//       views: "2.1K",
//       isFollowing: true,
//     },
//     {
//       id: 5,
//       name: "PS Richmond Korley",
//       username: "@psrichmond",
//       profilePic: Papa,
//       series: "Everything By Prayer",
//       message:
//         "Continue in prayer, continue in faith. Don't give up on your prayers. Keep standing on the word of God.",
//       quoteImage: EverythingByPrayer5, // Replace with actual path
//       time: "Nov 11, 2024",
//       views: "1.9K",
//       isFollowing: true,
//     },
//     {
//       id: 6,
//       name: "PS Richmond Korley",
//       username: "@psrichmond",
//       profilePic: Papa,
//       series: "Everything By Prayer",
//       message:
//         "Prayer is not just speaking to God, it's taking God at His word and standing firm on His promises.",
//       quoteImage: EverythingByPrayer6, // Replace with actual path
//       time: "Nov 11, 2024",
//       views: "1.6K",
//       isFollowing: true,
//     },
//   ];

//   const displayedPosts = showAllPosts ? posts : posts.slice(0, 6);

//   // GSAP ScrollTrigger animations for posts
//   useEffect(() => {
//     const posts = postRefs.current.filter(Boolean);
    
//     posts.forEach((post, index) => {
//       const card = post.querySelector('.post-card');
//       const profileImg = post.querySelector('.profile-img');
      
//       // Card reveal animation with blur-to-focus
//       gsap.fromTo(
//         card,
//         {
//           y: 60,
//           opacity: 0,
//           filter: 'blur(10px)',
//           scale: 0.95,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           filter: 'blur(0px)',
//           scale: 1,
//           duration: 0.8,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: post,
//             start: 'top 85%',
//             end: 'top 65%',
//             toggleActions: 'play none none reverse',
//           },
//           delay: index * 0.1,
//         }
//       );

//       // Profile image scale with bounce
//       gsap.fromTo(
//         profileImg,
//         {
//           scale: 0,
//           opacity: 0,
//         },
//         {
//           scale: 1,
//           opacity: 1,
//           duration: 0.6,
//           ease: 'back.out(1.7)',
//           scrollTrigger: {
//             trigger: post,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse',
//           },
//           delay: index * 0.1 + 0.2,
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [displayedPosts.length]);

//   // Animation for "Show More" button appearance
//   const handleShowMore = () => {
//     setShowAllPosts(true);
    
//     // Scroll to new content smoothly
//     setTimeout(() => {
//       const lastVisiblePost = postRefs.current[5];
//       if (lastVisiblePost) {
//         lastVisiblePost.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     }, 100);
//   };

//   return (
//     <div className="relative min-h-screen py-12 px-4 bg-gradient-to-br from-gray-700 to-gray-950 text-white">
//       <div className="absolute inset-0 bg-[url('/api/placeholder/200/200')] opacity-20 blur-lg bg-repeat z-0"></div>
//       <div ref={postsContainerRef} className="relative max-w-5xl mx-auto z-10">
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex items-center">
//             {/* <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
//               <img src="/api/placeholder/48/48" alt="Church Logo" className="w-full h-full object-cover" />
//             </div> */}
//             <h1 className="text-2xl font-bold ml-3">Quotes from Papa</h1>
//           </div>
//           {/* <button className="bg-white text-gray-800 rounded-full px-4 py-1 text-sm font-medium shadow hover:shadow-lg transition-shadow">
//             About Series
//           </button> */}
//         </div>

//         <div className="space-y-8">
//           {displayedPosts.map((post, index) => (
//             <div
//               key={post.id}
//               ref={(el) => (postRefs.current[index] = el)}
//               className={`w-full sm:w-[75%] lg:w-[70%] ${
//                 index % 2 === 0 ? "ml-0" : "ml-auto"
//               }`}
//             >
//               <div className="post-card p-4 rounded-xl shadow-2xl border border-gray-600 backdrop-blur-md bg-white/10">
//                 <div className="flex justify-between items-start gap-4">
//                   <div className="flex items-start">
//                     <div className="profile-img w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white">
//                       <img src={post.profilePic} alt={post.name} className="w-full h-full object-cover" />
//                     </div>
//                     <div className="ml-3">
//                       <div className="flex items-center">
//                         <p className="font-bold text-white">{post.name}</p>
//                         <p className="text-gray-400 text-sm ml-2">{post.username}</p>
//                       </div>
//                       {post.series && (
//                         <p className="font-semibold text-blue-300 mt-1 text-sm">📖 {post.series}</p>
//                       )}
//                       {/* Display quote image instead of text */}
//                       <div className="mt-3 rounded-lg overflow-hidden shadow-lg">
//                         <img src={post.quoteImage} alt="Quote" className="w-full h-auto" />
//                       </div>
                      
//                       <div className="text-xs text-gray-400 mt-2">
//                         {post.time} • {post.views} views
//                       </div>
//                     </div>
//                   </div>
//                   <button className={`px-3 py-1 rounded-full text-sm font-medium transition-all hover:scale-105 ${
//                     post.isFollowing ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"
//                   }`}>
//                     {post.isFollowing ? "Following" : "Follow"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {!showAllPosts && posts.length > 6 && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={handleShowMore}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all hover:scale-105 shadow-lg"
//             >
//               Show More Quotes
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import EverythingByPrayer from "../assets/images/EverythingByPrayer.png";
import EverythingByPrayer1 from "../assets/images/EverythingByPrayer1.png";
import EverythingByPrayer2 from "../assets/images/EverythingByPrayer2.png";
import EverythingByPrayer3 from "../assets/images/EverythingByPrayer3.png";
import EverythingByPrayer4 from "../assets/images/EverythingByPrayer4.png";
import EverythingByPrayer5 from "../assets/images/EverythingByPrayer5.png";
import EverythingByPrayer6 from "../assets/images/EverythingByPrayer6.png";
import Papa from "../assets/images/Papa.jpg"

export default function QuotesFeed() {
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const postsContainerRef = useRef(null);
  const postRefs = useRef([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const posts = [
    {
      id: 1,
      name: "PS Richmond Korley",
      username: "@psrichmond",
      profilePic: Papa,
      series: "Everything By Prayer",
      message:
        "People may not understand why you shout when you're praying, but God is hearing and he will intervene",
      quoteImage: EverythingByPrayer,
      time: "Nov 12, 2024",
      views: "1.2K",
      isFollowing: true,
    },
    {
      id: 2,
      name: "PS Richmond Korley",
      username: "@psrichmond",
      profilePic: Papa,
      series: "Everything By Prayer",
      message:
        "Anchor your prayer on the word of God. Learn to Pray the word of God, that's the prayer that works. Be a person who prays the word of God.",
      quoteImage:EverythingByPrayer1,
      time: "Nov 12, 2024",
      views: "1.5K",
      isFollowing: true,
    },
    {
      id: 3,
      name: "PS Richmond Korley",
      username: "@psrichmond",
      profilePic: Papa,
      series: EverythingByPrayer2,
      message:
        'God said "I have exalted my word above all my names..." Stand on God\'s word, remind God of His word. Take God at His word Daily.',
      quoteImage: EverythingByPrayer3,
      time: "Nov 12, 2024",
      views: "1.8K",
      isFollowing: true,
    },
    {
      id: 4,
      name: "PS Richmond Korley",
      username: "@psrichmond",
      profilePic: Papa,
      series: "Everything By Prayer",
      message:
        "Things you don't confront will stay, things you don't fight, you permit them indirectly. Whatever you do not like, take them up in the place of prayer and take God by His word.",
      quoteImage: EverythingByPrayer4,
      time: "Nov 12, 2024",
      views: "2.1K",
      isFollowing: true,
    },
    {
      id: 5,
      name: "PS Richmond Korley",
      username: "@psrichmond",
      profilePic: Papa,
      series: "Everything By Prayer",
      message:
        "Continue in prayer, continue in faith. Don't give up on your prayers. Keep standing on the word of God.",
      quoteImage: EverythingByPrayer5,
      time: "Nov 11, 2024",
      views: "1.9K",
      isFollowing: true,
    },
    {
      id: 6,
      name: "PS Richmond Korley",
      username: "@psrichmond",
      profilePic: Papa,
      series: "Everything By Prayer",
      message:
        "Prayer is not just speaking to God, it's taking God at His word and standing firm on His promises.",
      quoteImage: EverythingByPrayer6,
      time: "Nov 11, 2024",
      views: "1.6K",
      isFollowing: true,
    },
  ];

  const displayedPosts = showAllPosts ? posts : posts.slice(0, 6);

  // GSAP ScrollTrigger animations for posts
  useEffect(() => {
    const posts = postRefs.current.filter(Boolean);
    
    posts.forEach((post, index) => {
      const card = post.querySelector('.post-card');
      const profileImg = post.querySelector('.profile-img');
      
      // Card reveal animation with blur-to-focus - less aggressive on mobile
      gsap.fromTo(
        card,
        {
          y: isMobile ? 40 : 60,
          opacity: 0,
          filter: isMobile ? 'blur(5px)' : 'blur(10px)',
          scale: isMobile ? 0.98 : 0.95,
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration: isMobile ? 0.6 : 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: post,
            start: 'top 85%',
            end: 'top 65%',
            toggleActions: 'play none none reverse',
          },
          delay: isMobile ? index * 0.05 : index * 0.1,
        }
      );

      // Profile image scale with bounce
      gsap.fromTo(
        profileImg,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: isMobile ? 0.4 : 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: post,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: isMobile ? index * 0.05 + 0.15 : index * 0.1 + 0.2,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [displayedPosts.length, isMobile]);

  // Animation for "Show More" button appearance
  const handleShowMore = () => {
    setShowAllPosts(true);
    
    // Scroll to new content smoothly
    setTimeout(() => {
      const lastVisiblePost = postRefs.current[5];
      if (lastVisiblePost) {
        lastVisiblePost.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 bg-gradient-to-br from-gray-700 to-gray-950 text-white">
      <div className="absolute inset-0 bg-[url('/api/placeholder/200/200')] opacity-20 blur-lg bg-repeat z-0"></div>
      <div ref={postsContainerRef} className="relative max-w-5xl mx-auto z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3 sm:gap-0">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Quotes from Papa</h1>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {displayedPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => (postRefs.current[index] = el)}
              className={`w-full ${
                isMobile 
                  ? 'mx-auto' 
                  : `sm:w-[85%] md:w-[80%] lg:w-[70%] ${index % 2 === 0 ? "ml-0" : "ml-auto"}`
              }`}
            >
              <div className="post-card p-3 sm:p-4 md:p-5 rounded-xl shadow-2xl border border-gray-600 backdrop-blur-md bg-white/10 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <div className="flex justify-between items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex items-start flex-1 min-w-0">
                    <div className="profile-img w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border border-white">
                      <img src={post.profilePic} alt={post.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-2 sm:ml-3 flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                        <p className="font-bold text-white text-sm sm:text-base truncate">{post.name}</p>
                        <p className="text-gray-400 text-xs sm:text-sm sm:ml-2 truncate">{post.username}</p>
                      </div>
                      {post.series && (
                        <p className="font-semibold text-blue-300 mt-1 text-xs sm:text-sm truncate">📖 {post.series}</p>
                      )}
                      {/* Display quote image instead of text */}
                      <div className="mt-2 sm:mt-3 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={post.quoteImage} 
                          alt="Quote" 
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="text-[10px] sm:text-xs text-gray-400 mt-1.5 sm:mt-2 flex flex-wrap gap-1">
                        <span>{post.time}</span>
                        <span>•</span>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 flex-shrink-0 touch-manipulation ${
                      post.isFollowing 
                        ? "bg-gray-200 text-gray-800 hover:bg-gray-300" 
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {post.isFollowing ? "Following" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllPosts && posts.length > 6 && (
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={handleShowMore}
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base font-medium touch-manipulation"
            >
              Show More Quotes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}