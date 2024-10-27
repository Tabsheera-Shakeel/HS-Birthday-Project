import Image from "next/image";

export default function Hero() {
  return (
    <main className="mt-10 mx-10">
    
      <section className="flex flex-col md:flex-row items-center gap-8">
   
        <div className="flex flex-col justify-center items-center md:items-start md:flex-1 text-center md:text-left">
          <h1 className="font-bold text-4xl mt-0 font-serif text-gray-800 md:text-5xl">
            HAPPY BIRTHDAY TO MY PERFECT MENTOR 💎🤍
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            A good mentor has a brain to pick&#44; an ear to listen&#44;
            <br />
            and a push in the right direction—supportive&#44; <br />
            knowledgeable&#44; and humble. You have it all. 🤍
          </p>
        </div>

       
        <div className="flex flex-1 justify-center md:justify-end gap-4 items-center">
          <Image
            width={200}
            height={400}
            src="/Untitled design.png"
            alt="Large Image"
            className="object-contain"
          />
          <Image
            width={200}
            height={300}
            src="https://i.pinimg.com/564x/87/f4/c3/87f4c30fd6cb7f5d0e2a712532a37b8a.jpg"
            alt="Balloon Image"
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
}
