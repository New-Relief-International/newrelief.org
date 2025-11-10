// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Send,
//   User,
//   CheckCircle,
//   Loader
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// export default function ContactPage() {
//   const [activeTab, setActiveTab] = useState("contact");
//   const [contactForm, setContactForm] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
  
//   const [membershipForm, setMembershipForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const [contactSubmitting, setContactSubmitting] = useState(false);
//   const [contactSuccess, setContactSuccess] = useState(false);
//   const [membershipSubmitting, setMembershipSubmitting] = useState(false);
//   const [membershipSuccess, setMembershipSuccess] = useState(false);

//   const containerRef = useRef(null);

//   // Simple fade-in animation
//   useEffect(() => {
//     gsap.fromTo(
//       containerRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
//     );
//   }, []);

//   // Tab switch animation
//   const handleTabSwitch = (tab) => {
//     if (tab === activeTab) return;
    
//     gsap.to(containerRef.current, {
//       opacity: 0,
//       x: -20,
//       duration: 0.2,
//       onComplete: () => {
//         setActiveTab(tab);
//         gsap.fromTo(
//           containerRef.current,
//           { opacity: 0, x: 20 },
//           { opacity: 1, x: 0, duration: 0.3 }
//         );
//       }
//     });
//   };

//   // Handle contact form submission
//   const handleContactSubmit = async (e) => {
//     e.preventDefault();
//     setContactSubmitting(true);
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setContactSubmitting(false);
//     setContactSuccess(true);
//     setContactForm({ name: "", email: "", message: "" });
//     setTimeout(() => setContactSuccess(false), 4000);
//   };

//   // Handle membership form submission
//   const handleMembershipSubmit = async (e) => {
//     e.preventDefault();
//     setMembershipSubmitting(true);
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setMembershipSubmitting(false);
//     setMembershipSuccess(true);
//     setMembershipForm({ name: "", email: "", phone: "", message: "" });
//     setTimeout(() => setMembershipSuccess(false), 4000);
//   };

//   return (
//     <div className="min-h-screen bg-white py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 mt-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
//             Get In Touch
//           </h1>
//           <p className="text-lg text-gray-600">
//             We'd love to hear from you
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center gap-4 mb-12">
//           <button
//             onClick={() => handleTabSwitch("contact")}
//             className={`px-6 py-3 rounded-lg font-medium transition-all ${
//               activeTab === "contact"
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             Contact Us
//           </button>
//           <button
//             onClick={() => handleTabSwitch("membership")}
//             className={`px-6 py-3 rounded-lg font-medium transition-all ${
//               activeTab === "membership"
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             Join Us
//           </button>
//         </div>

//         <div ref={containerRef}>
//           {/* Contact Section */}
//           {activeTab === "contact" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//               {/* Contact Info */}
//               <div className="space-y-8">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                     Contact Information
//                   </h2>
                  
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
//                       <div>
//                         <p className="font-medium text-gray-900">Address</p>
//                         <p className="text-gray-600">Yoomo Specs, Main Street<br />Accra, Ghana</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-3">
//                       <Phone className="text-blue-600 flex-shrink-0 mt-1" size={20} />
//                       <div>
//                         <p className="font-medium text-gray-900">Phone</p>
//                         <a href="tel:+233558068774" className="text-gray-600 hover:text-blue-600">
//                           +233-55-806-8774
//                         </a>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-3">
//                       <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
//                       <div>
//                         <p className="font-medium text-gray-900">Email</p>
//                         <a href="mailto:info@newrelief.org" className="text-gray-600 hover:text-blue-600">
//                           info@newrelief.org
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="pt-8 border-t border-gray-200">
//                   <h3 className="font-semibold text-gray-900 mb-3">Service Times</h3>
//                   <div className="space-y-2 text-gray-600">
//                     <p>Sunday: 8:00 AM - 12:00 PM</p>
//                     <p>Wednesday: 6:00 PM</p>
//                     <p>Friday: 7:00 PM</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                   Send a Message
//                 </h2>

//                 {contactSuccess && (
//                   <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-2">
//                     <CheckCircle className="text-green-600" size={20} />
//                     <p className="text-green-800">Message sent successfully!</p>
//                   </div>
//                 )}

//                 <form onSubmit={handleContactSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       value={contactForm.name}
//                       onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       value={contactForm.email}
//                       onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Message
//                     </label>
//                     <textarea
//                       value={contactForm.message}
//                       onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
//                       rows={5}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                       required
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={contactSubmitting}
//                     className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
//                   >
//                     {contactSubmitting ? (
//                       <>
//                         <Loader className="animate-spin" size={20} />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send size={20} />
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           )}

//           {/* Membership Section */}
//           {activeTab === "membership" && (
//             <div className="max-w-2xl mx-auto">
//               <div className="text-center mb-8">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <User className="text-blue-600" size={28} />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                   Join Our Church Family
//                 </h2>
//                 <p className="text-gray-600">
//                   Fill out the form below and we'll get back to you within 48 hours
//                 </p>
//               </div>

//               {membershipSuccess && (
//                 <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
//                   <CheckCircle className="text-green-600 mx-auto mb-3" size={32} />
//                   <h3 className="text-lg font-bold text-green-900 mb-2">
//                     Application Received!
//                   </h3>
//                   <p className="text-green-800">
//                     Thank you for your interest. We'll contact you soon.
//                   </p>
//                 </div>
//               )}

//               <form onSubmit={handleMembershipSubmit} className="space-y-5">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     value={membershipForm.name}
//                     onChange={(e) => setMembershipForm({...membershipForm, name: e.target.value})}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       value={membershipForm.email}
//                       onChange={(e) => setMembershipForm({...membershipForm, email: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       value={membershipForm.phone}
//                       onChange={(e) => setMembershipForm({...membershipForm, phone: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Tell us about yourself
//                   </label>
//                   <textarea
//                     value={membershipForm.message}
//                     onChange={(e) => setMembershipForm({...membershipForm, message: e.target.value})}
//                     rows={4}
//                     placeholder="Share a bit about your faith journey and why you'd like to join..."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                     required
//                   />
//                 </div>

//                 <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
//                   <p className="text-sm text-blue-900">
//                     <strong>What's next?</strong> After submitting, you'll receive a confirmation email 
//                     and a team member will contact you to schedule a meeting.
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={membershipSubmitting}
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
//                 >
//                   {membershipSubmitting ? (
//                     <>
//                       <Loader className="animate-spin" size={20} />
//                       Submitting...
//                     </>
//                   ) : (
//                     <>
//                       <User size={20} />
//                       Submit Application
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  User
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact");
  const containerRef = useRef(null);

  // 🔥 REPLACE THESE WITH YOUR ACTUAL TALLY FORM IDs
  // Get these from Tally.so after creating your forms
  const TALLY_CONTACT_FORM_ID = "XxlvlL"; // Example: "wMBLXY"
  const TALLY_MEMBERSHIP_FORM_ID = "OD1eaR"; // Example: "3yDkPr"

  // Simple fade-in animation
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  // Tab switch animation
  const handleTabSwitch = (tab) => {
    if (tab === activeTab) return;
    
    gsap.to(containerRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.2,
      onComplete: () => {
        setActiveTab(tab);
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.3 }
        );
      }
    });
  };

  // Load Tally embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Open Tally popup
  const openTallyPopup = (formId) => {
    if (window.Tally) {
      window.Tally.openPopup(formId, {
        layout: 'modal',
        width: 700,
        autoClose: 3000
      });
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => handleTabSwitch("contact")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "contact"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => handleTabSwitch("membership")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "membership"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Join Us
          </button>
        </div>

        <div ref={containerRef}>
          {/* Contact Section */}
          {activeTab === "contact" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">Yoomo Specs, Main Street<br />Accra, Ghana</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a href="tel:+233558068774" className="text-gray-600 hover:text-blue-600">
                          +233-55-806-8774
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:info@newrelief.org" className="text-gray-600 hover:text-blue-600">
                          info@newrelief.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Service Times</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Sunday: 8:00 AM - 12:00 PM</p>
                    <p>Wednesday: 6:00 PM</p>
                    <p>Friday: 7:00 PM</p>
                  </div>
                </div>

                {/* Option 2: Popup Button */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">
                    Or open the form in a popup:
                  </p>
                  <button
                    onClick={() => openTallyPopup(TALLY_CONTACT_FORM_ID)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Open Contact Form
                  </button>
                </div>
              </div>

              {/* Embedded Tally Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h2>

                {/* 
                  OPTION 1: EMBEDDED FORM (Recommended)
                  Replace TALLY_CONTACT_FORM_ID with your actual form ID
                */}
                <iframe
                  data-tally-src={`https://tally.so/embed/${TALLY_CONTACT_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                  loading="lazy"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Contact Form"
                  className="rounded-lg"
                ></iframe>

                {/* Fallback if form ID not set */}
                {TALLY_CONTACT_FORM_ID === "your-contact-form-id" && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                    <p className="text-yellow-800 font-medium mb-2">
                      ⚠️ Tally Form Not Connected
                    </p>
                    <p className="text-sm text-yellow-700 mb-4">
                      Please update the TALLY_CONTACT_FORM_ID in the code with your actual Tally form ID.
                    </p>
                    <a
                      href="https://tally.so"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      Create a Tally form →
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Membership Section */}
          {activeTab === "membership" && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-blue-600" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Join Our Church Family
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 48 hours
                </p>
              </div>

              {/* 
                OPTION 1: EMBEDDED FORM (Recommended)
                Replace TALLY_MEMBERSHIP_FORM_ID with your actual form ID
              */}
              <iframe
                data-tally-src={`https://tally.so/embed/${TALLY_MEMBERSHIP_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                loading="lazy"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Membership Form"
                className="rounded-lg"
              ></iframe>

              {/* Fallback if form ID not set */}
              {TALLY_MEMBERSHIP_FORM_ID === "your-membership-form-id" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                  <p className="text-yellow-800 font-medium mb-2">
                    ⚠️ Tally Form Not Connected
                  </p>
                  <p className="text-sm text-yellow-700 mb-4">
                    Please update the TALLY_MEMBERSHIP_FORM_ID in the code with your actual Tally form ID.
                  </p>
                  <a
                    href="https://tally.so"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    Create a Tally form →
                  </a>
                </div>
              )}

              {/* Option 2: Popup Button */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Or open the form in a popup:
                </p>
                <button
                  onClick={() => openTallyPopup(TALLY_MEMBERSHIP_FORM_ID)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={18} />
                  Open Membership Form
                </button>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>What's next?</strong> After submitting, you'll receive a confirmation email 
                  and a team member will contact you to schedule a meeting.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}