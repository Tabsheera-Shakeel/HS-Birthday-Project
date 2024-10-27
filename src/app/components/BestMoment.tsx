import React from 'react';

const BestMoment = () => {
  return (
    <section id="memory" className="py-16 bg-gradient-to-r from-blue-950 to-indigo-900 text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-bold text-center mb-8">
          My Best Memory with My Mentor
        </h2>

        <p className="text-lg text-center mb-8">
        A moment I&apos;ll always cherish—when you praised me in front of the whole class, which was completely unexpected. 
          I didn&apos;t even realize you had been observing me or that you acknowledged my hard work. 
          Your words shocked me at that moment&#44; but they played a meaningful role in my ongoing journey. 
          That moment truly impacted me&#44; boosted my confidence&#44; doubled my hard work&#44; and kept me positive.
        
        </p>

        
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7197336342626725888"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            allowFullScreen
            title="Embedded LinkedIn Post"
            style={{ transform: 'translateY(-50%)', height: '200%' }}
          ></iframe>
        </div>

        <div className="text-center mt-8">
          <p className="text-xl font-semibold">
          &quot;She possesses skills&#44; confidence&#44; punctuality in assignments and work&#44; creativity&#44; and strong marketing skills. You all should also follow this path.&quot;
          </p>
          <p className="mt-4 text-gray-200">— Your Sparking Words</p>
        </div>
      </div>
    </section>
  );
};

export default BestMoment;
