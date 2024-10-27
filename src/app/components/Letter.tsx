"use client";
import { useState } from "react";
import Image from "next/image";

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-pink-50">
     
      <section id="letter" ></section>
      <div
        className={`relative w-80 shadow-xl border-2 border-gray-300 rounded-lg 
        transition-all duration-700 overflow-hidden cursor-pointer transform-gpu
        ${isOpen ? "h-[500px] rotate-0" : "h-40 rotate-[-10deg] bg-white"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
      
        {!isOpen && (
          <div className="absolute w-full h-4 bg-gray-400 top-1/2 -translate-y-1/2 flex items-center justify-center">
            <Image
              src="https://i.pinimg.com/474x/07/06/12/070612628fcf6199edc987f6dbca233b.jpg"
              alt="Ribbon"
              width={68}
              height={48}
              className="object-contain"
            />
          </div>
        )}

        {isOpen && (
          <div className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src="https://i.pinimg.com/236x/21/30/73/213073bde76420bedd82778abefcd0c2.jpg"
                alt="Letter Background"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
            </div>
            <div className="relative z-10 p-8 text-center h-full flex flex-col justify-center">
              <h1 className="text-2xl font-bold mb-4 text-gray-700">
                Dear Sir Hamzah,
              </h1>
              <p className="text-gray-600 text-sm">
               Thank you for being the best teacher as well as an amazing human being. When I joined GIAIC&#44; I had doubts&#44; wondering how I would match the level&#44; as everything was so new to me. I was concerned about competing or settling in with people double or triple my age&#44; as well as their experience and knowledge&#44; among other things. However&#44; with your support&#44; my doubts have disappeared. Every day&#44; I am trying to be a better student because you are the best teacher. </p>
              <p className="mt-4 text-sm text-gray-500">- Tabsheera Shakeel</p>
            </div>
          </div>
          
        )}
      </div>
    </div>
    
  );
}
