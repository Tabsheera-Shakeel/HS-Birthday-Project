"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

const reasons = [
  {
    text: "You inspire me with your dedication to teaching and the way you teach people of all ages so gracefully.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 max-w-screen-2xl mx-auto text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
  },
  {
    text: "You know just the right words to use—intelligent yet respectful, with a good sense of humor.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 12h-3v3h3v-3zM15 12h3v3h-3v-3zM9 12H6v3h3v-3zM12 6h-3v3h3V6z" />
      </svg>
    ),
  },
  {
    text: "You always find creative ways to solve problems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm-2-5.5h4M9 11h2" />
      </svg>
    ),
  },
  {
    text: "You believe in my potential that encourages me.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10zM10 9h0m0 4h0" />
      </svg>
    ),
  },
  {
    text: "Your support has made a significant impact on my journey.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1a9 9 0 00-9 9c0 3.89 2.48 7.22 5.95 8.38.32.09.66.12 1 .12s.68-.03 1-.12C16.52 17.22 19 13.89 19 9a9 9 0 00-9-8z" />
      </svg>
    ),
  },
  {
    text: "You have a unique ability to simplify complex concepts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-1 10h2V9h-2v4z" />
      </svg>
    ),
  },
  {
    text: "You encourage a positive and fun learning environment while observing your students.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 0C4.48 0 0 4.48 0 10c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0zm-1 15h2v-2h-2v2zm0-6h2V4h-2v5z" />
      </svg>
    ),
  },
  {
    text: "Your feedback is valuable and uplifting, motivating me to improve continuously.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm-1 14h2v-2h-2v2zm0-6h2V7h-2v2z" />
      </svg>
    ),
  },
  {
    text: "You are always available to help when I need guidance. In the beginning, I asked questions that seem simple to me now, but as a beginner, they weren’t. Yet, you never made us feel dumb, which I truly admire.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 20l-6-6h4V0h4v14h4l-6 6z" />
      </svg>
    ),
  },
  {
    text: "You have been my number one supporter along with my family.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-1 10h2v-2h-2v2z" />
      </svg>
    ),
  },
];


const Reasons = () => {
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="reasons" className="py-10 bg-gradient-to-r from-gray-400 to-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Reasons Why I Admire You</h2>
        <Slider {...sliderSettings}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-md h-72 flex flex-col justify-between"
            >
              <div
                className="bg-gradient-to-tr from-yellow-400 to-blue-500 p-4 rounded-full mb-4 flex items-center justify-center"
                style={{ height: '80px', width: '80px', margin: '0 auto' }} 
              >
                {reason.icon}
              </div>
              <p className="text-lg text-gray-700 flex-grow overflow-hidden text-ellipsis">{reason.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reasons;

