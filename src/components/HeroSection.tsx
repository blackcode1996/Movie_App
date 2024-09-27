import React, { useEffect, useState } from "react";

const HeroSection = () => {
  
  const HeroImage = [
    "https://image.tmdb.org/t/p/original/yHzyPJrVqlTySQ9mc379yxrLBYQ.jpg",
    "https://image.tmdb.org/t/p/original/en3GU5uGkKaYmSyetHV4csHHiH3.jpg",
    "https://image.tmdb.org/t/p/original/blqiNjJefmY10Wx6y2vgJJWljJj.jpg",
    "https://image.tmdb.org/t/p/original/sjC29cgm4qZAnpOJQbYKCxDCcra.jpg",
    "https://image.tmdb.org/t/p/original/h9YlRHAZWOWtGonllmj6JJg1FrE.jpg",
    "https://image.tmdb.org/t/p/original/tAwfoDyKiYa4KQdUp3DTMrEs4En.jpg",
    "https://image.tmdb.org/t/p/original/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg",
    "https://image.tmdb.org/t/p/original/wkPPRIducGfsbaUPsWfw0MCQdX7.jpg",
    "https://image.tmdb.org/t/p/original/hdFIdXwS8FSN2wIsuotjW1mshI0.jpg",
    "https://image.tmdb.org/t/p/original/62zw627mH74rng9zc4tFfaR54KW.jpg",
    "https://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    "https://image.tmdb.org/t/p/original/sjC29cgm4qZAnpOJQbYKCxDCcra.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(HeroImage[0]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * HeroImage.length);
        setCurrentImage(HeroImage[randomIndex]);
        setOpacity(1); 
      }, 500); 
    }, 5000); 

    return () => clearInterval(interval); 
  }, [HeroImage]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden mb-5" >
      <img
        className={`h-full w-full object-cover transition-opacity duration-500 border-b-8 border-[#04152D]`}
        src={currentImage}
        alt="Hero"
        style={{ opacity }}
      />
      <div className="absolute inset-0 bg-[#04152D] opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl font-bold mb-2">Welcome.</h1>
        <p className="text-white mb-4 text-2xl">
          Millions of movies, TV shows, and people to discover. Explore now.
        </p>
        <form className="mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
          <input
            type="text"
            placeholder="Search anything"
            className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
            name="topic"
          />
          <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white py-1.5 h-[38px] -mr-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
