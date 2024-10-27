"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../styles/wishes.css";

const GratitudeAndWishes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dotsContainerRef = useRef<HTMLDivElement | null>(null);

  const handleGiftClick = () => setIsOpen(!isOpen);

  const createDots = () => {
    const colors = ["blue", "purple", "yellow"];
    const dotsContainer = dotsContainerRef.current;

    if (dotsContainer) {
      while (dotsContainer.firstChild) {
        dotsContainer.removeChild(dotsContainer.firstChild);
      }

      for (let i = 0; i < 50; i++) {
        const dot = document.createElement("div");
        const size = Math.random() * 10 + 5;
        dot.className = "dot";
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        dot.style.position = "absolute";
        dot.style.left = `${Math.random() * 100}vw`;
        dot.style.top = `${Math.random() * 100}vh`;
        dot.style.opacity = Math.random().toString();
        dotsContainer.appendChild(dot);
      }
    }
  };

  useEffect(() => {
    createDots();
    
    // Copy current ref to a variable
    const currentDotsContainer = dotsContainerRef.current;

    return () => {
      if (currentDotsContainer) {
        const dots = currentDotsContainer.querySelectorAll(".dot") as NodeListOf<HTMLElement>;
        dots.forEach((dot) => dot.remove());
      }
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  return (
    <div className="wishes-page">
      <div ref={dotsContainerRef} className="dots-container"></div>

      <section id="wishes" className="gift-section">
        <Image
          src="https://i.pinimg.com/236x/04/35/b2/0435b258313dffabf8a0e8c8776c5f3b.jpg"
          alt="Gift Box"
          className="gift-image"
          onClick={handleGiftClick}
          width={300}
          height={300}
        />
        <p className="open-me-text">Open Me!</p>
      </section>

      {isOpen && (
        <div className="message-container">
          <Image
            src="/Screenshot (213).png"
            alt="Your Mentor"
            className="mentor-image"
            width={150}
            height={150}
          />
          <h2 className="text-2xl font-semibold text-cyan-500 mb-4 text-center">
            With Heartfelt Gratitude
          </h2>
          <p className="text-gray-400 mb-4 text-center">
            It&apos;s not like it&apos;s your birthday today, that&apos;s why I&apos;m giving you wishes, but I do remember you in my prayers. May Allah grant you a long and healthy life filled with prosperity and happiness alongside your loved ones. May all your desires come true, and may you achieve even more success.
          </p>
          <p className="text-gray-400 mb-4 text-center">
            You are a source of inspiration for me and many others, and I respect you a lot. I am not only learning how to code from you but also many other things. With Allah&apos;s willingness and in His right time, I will make you proud.
          </p>
          <p className="text-gray-400 mb-4 text-center">
            If I could give you advice or a wish, it would be to &quot;stay the same.&quot; Thank you for being an incredible mentor and guiding light in our lives.
          </p>
          <p className="font-bold text-gray-400 text-center">With appreciation,</p>
          <p className="text-cyan-500 text-center">Tabsheera Shakeel</p>
        </div>
      )}

      <footer className="footer">
        <p className="footer-text">
          I had a fun time creating this birthday present for you. I hope you like it!
        </p>
      </footer>
    </div>
  );
};

export default GratitudeAndWishes;



// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image"; 
// import "../styles/wishes.css"; 
// const GratitudeAndWishes = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dotsContainerRef = useRef<HTMLDivElement | null>(null); 

//   const handleGiftClick = () => {
//     setIsOpen(!isOpen); 
//   };

//   const createDots = () => {
//     const colors = ["blue", "purple", "yellow"]; 
//     const dotsContainer = dotsContainerRef.current; 

//     if (dotsContainer) { 

//       while (dotsContainer.firstChild) {
//         dotsContainer.removeChild(dotsContainer.firstChild);
//       }

//       for (let i = 0; i < 50; i++) { 
//         const dot = document.createElement("div");
//         const size = Math.random() * 10 + 5; 
//         dot.className = "dot";
//         dot.style.width = `${size}px`;
//         dot.style.height = `${size}px`;
//         dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         dot.style.position = "absolute"; 
//         dot.style.left = `${Math.random() * 100}vw`; 
//         dot.style.top = `${Math.random() * 100}vh`; 
//         dot.style.opacity = Math.random().toString(); 
//         dotsContainer.appendChild(dot); 
//       }
//     }
//   };

//   useEffect(() => {
//     createDots(); 

//     const dotsContainer = dotsContainerRef.current; 

//     return () => {
//       if (dotsContainer) {
//         const dots = dotsContainer.querySelectorAll(".dot") as NodeListOf<HTMLElement>; 
//         dots.forEach(dot => dot.remove()); 
//       }
//     };
//   }, []);

//   return (
//     <div className="wishes-page">
//       <section id="wishes" >
//       <div ref={dotsContainerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
     
//       </div>

//       <Image
//         src="https://i.pinimg.com/236x/04/35/b2/0435b258313dffabf8a0e8c8776c5f3b.jpg" 
//         alt="Gift Box"
//         className="gift-image"
//         onClick={handleGiftClick}
//         width={300} 
//         height={300} 
//       />
// </section>

// {isOpen && (
//   <div className="message-container">
//     <Image
//       src="/Screenshot (213).png" 
//       alt="Your Mentor"
//       className="mentor-image"
//       width={150} 
//       height={150} 
//       style={{ display: 'block', margin: '0 auto 20px' }} 
//     />
//     <h2 className="text-2xl font-semibold text-cyan-500 mb-4 text-center">
//       With Heartfelt Gratitude
//     </h2>
//     <p className=" text-gray-400 mb-4 text-center">
//       It&rsquo;s not like it&rsquo;s your birthday today, that&rsquo;s why I&rsquo;m giving you wishes, but I do remember you in my prayers. May Allah grant you a long and healthy life filled with prosperity and happiness alongside your loved ones. May all your desires come true, and may you achieve even more success.
//     </p>
//     <p className=" text-gray-400 mb-4 text-center">
//       You are a source of inspiration for me and many others, and I respect you a lot. I am not only learning how to code from you but also many other things. With Allah&rsquo;s willingness and in His right time, I will make you proud.
//     </p>
//     <p className=" text-gray-400 mb-4 text-center">
//       If I could give you advice or a wish&#44; it would be to &quot;stay the same.&quot; Thank you for being an incredible mentor and guiding light in our lives.
//     </p>
//     <p className="font-bold text-gray-400 text-center">With appreciation&#44;</p>
//     <p className="text-cyan-500 text-center">Tabsheera Shakeel</p>
//   </div>
// )}

  
//       <footer className="footer">
//         <p className="footer-text">
//           I had a great time creating this birthday present for you. I hope you like it!
//         </p>
//       </footer>

//       <style jsx>{`
//         .footer {
//           margin-top: 20px;
//           padding: 10px;
//           background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
//           text-align: center;
//         }
//         .footer-text {
//           font-size: 16px;
//           color: #555; /* Gray text color */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default GratitudeAndWishes;
