import React, { useState } from "react";
import SwitchTab from "./SwitchTab";
import Cards from "./Cards";

interface CardData {
  title: string;
  date: string;
  imageUrl: string;
  rating: string;
}

const CardWrapper: React.FC = () => {
  const cardData: CardData[] = [
    {
      title: "Deadpool & Wolverine",
      date: "Sep 25, 2024",
      imageUrl:
        "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/pmPDfocouP0mS1UjiRDSqUdNIWH.jpg",
      rating: "7.5",
    },
    {
      title: "Deadpool & Wolverine",
      date: "Sep 25, 2024",
      imageUrl:
        "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/pmPDfocouP0mS1UjiRDSqUdNIWH.jpg",
      rating: "7.5",
    },
    {
      title: "Deadpool & Wolverine",
      date: "Sep 25, 2024",
      imageUrl:
        "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/pmPDfocouP0mS1UjiRDSqUdNIWH.jpg",
      rating: "7.5",
    },
    {
      title: "Deadpool & Wolverine",
      date: "Sep 25, 2024",
      imageUrl:
        "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/pmPDfocouP0mS1UjiRDSqUdNIWH.jpg",
      rating: "7.5",
    },
    {
      title: "Deadpool & Wolverine",
      date: "Sep 25, 2024",
      imageUrl:
        "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/pmPDfocouP0mS1UjiRDSqUdNIWH.jpg",
      rating: "7.5",
    },
    {
      title: "Deadpool & Wolverine",
      date: "Sep 25, 2024",
      imageUrl:
        "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/pmPDfocouP0mS1UjiRDSqUdNIWH.jpg",
      rating: "7.5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const [fade, setFade] = useState(false);

  const handlePrev = () => {
    setFade(true);
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - itemsToShow : 0
    );
  };

  const handleNext = () => {
    setFade(true);
    setCurrentIndex((prevIndex) =>
      prevIndex < cardData.length - itemsToShow
        ? prevIndex + itemsToShow
        : prevIndex
    );
  };

  const onTransitionEnd = () => {
    setFade(false);
  };

  return (
    <div className="m-auto w-[100%] md:w-[60%] bg-white rounded shadow-lg p-4 mb-8">
      <section className="overflow-hidden">
        <header className="flex justify-between items-center border-b pb-4">
          <p className="text-lg font-semibold px-4">Trending</p>
          <SwitchTab />
        </header>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition z-10"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <i className="fa-solid fa-arrow-left w-6"></i>
          </button>
          <div
            className={`flex space-x-2 mt-4 py-12 transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onTransitionEnd={onTransitionEnd}
          >
            {cardData
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((card, index) => (
                <div className="flex-shrink-0 w-[calc(33.333%_-_16px)" key={index}>
                  <Cards
                    title={card.title}
                    date={card.date}
                    imageUrl={card.imageUrl}
                    rating={card.rating}
                  />
                </div>
                
              ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition z-10"
            onClick={handleNext}
            disabled={currentIndex >= cardData.length - itemsToShow}
          >
            <i className="fa-solid fa-arrow-right w-6"></i>
          </button>
        </div>
      </section>
      <section className="overflow-hidden">
        <header className="flex justify-between items-center border-b pb-4">
          <p className="text-lg font-semibold px-4">Trending</p>
          <SwitchTab />
        </header>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition z-10"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <i className="fa-solid fa-arrow-left w-6"></i>
          </button>
          <div
            className={`flex space-x-2 mt-4 py-12 transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onTransitionEnd={onTransitionEnd}
          >
            {cardData
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((card, index) => (
                <div className="flex-shrink-0 w-[calc(33.333%_-_16px)" key={index}>
                  <Cards
                    title={card.title}
                    date={card.date}
                    imageUrl={card.imageUrl}
                    rating={card.rating}
                  />
                </div>
                
              ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition z-10"
            onClick={handleNext}
            disabled={currentIndex >= cardData.length - itemsToShow}
          >
            <i className="fa-solid fa-arrow-right w-6"></i>
          </button>
        </div>
      </section>
      <section className="overflow-hidden">
        <header className="flex justify-between items-center border-b pb-4">
          <p className="text-lg font-semibold px-4">Trending</p>
          <SwitchTab />
        </header>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition z-10"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <i className="fa-solid fa-arrow-left w-6"></i>
          </button>
          <div
            className={`flex space-x-2 mt-4 py-12 transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onTransitionEnd={onTransitionEnd}
          >
            {cardData
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((card, index) => (
                <div className="flex-shrink-0 w-[calc(33.333%_-_16px)" key={index}>
                  <Cards
                    title={card.title}
                    date={card.date}
                    imageUrl={card.imageUrl}
                    rating={card.rating}
                  />
                </div>
                
              ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition z-10"
            onClick={handleNext}
            disabled={currentIndex >= cardData.length - itemsToShow}
          >
            <i className="fa-solid fa-arrow-right w-6"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CardWrapper;
