import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SwitchTab from "./SwitchTab";
import Cards from "./Cards";
import SkeletonCard from "./Skeleton/SkeletonCard";
import { RootState } from "../Redux/store";

interface CardWrapperProps {
  category: string; 
  fetchMovies: (category: string) => void;
  activeTab: string; 
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

const CardWrapper: React.FC<CardWrapperProps> = React.memo(({ 
  category, 
  fetchMovies, 
  activeTab, 
  setActiveTab, 
  options 
}) => {

  const {
    trendingLoading,
    trendingMovies,
    popularLoading,
    popularMovies,
    topRatedLoading,
    topRatedMovies,
  } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    fetchMovies(activeTab && activeTab.toLowerCase());
  }, [activeTab, fetchMovies]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const [fade, setFade] = useState(false);

  const handlePrev = () => {
    setFade(true);
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - itemsToShow : 0));
  };

  const handleNext = () => {
    setFade(true);
    const movies: any = category === "trending" ? trendingMovies : category === "popular" ? popularMovies : topRatedMovies;
    setCurrentIndex((prevIndex) => {
      return (prevIndex < (movies.length - itemsToShow)) ? prevIndex + itemsToShow : prevIndex;
    });
  };

  const onTransitionEnd = () => {
    setFade(false);
  };

  const movies = category === "trending" 
    ? trendingMovies 
    : category === "popular" 
    ? popularMovies 
    : topRatedMovies;

  const isLoading = category === "trending" 
    ? trendingLoading 
    : category === "popular" 
    ? popularLoading 
    : topRatedLoading;

  return (
    <div className="m-auto w-[100%] md:w-[60%] bg-slate-100 rounded shadow-lg p-4 mb-8">
      <section className="overflow-hidden">
        <header className="flex justify-between items-center border-b pb-4">
          <p className="text-lg font-semibold px-4">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          <SwitchTab activeTab={activeTab} setActiveTab={setActiveTab} options={options} />
        </header>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition z-10 border-2 border-gray-600"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <i className="fa-solid fa-arrow-left w-6"></i>
          </button>
          <div
            className={`flex space-x-6 mt-4 py-12 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
            onTransitionEnd={onTransitionEnd}
          >
            {isLoading ? (
              Array.from({ length: itemsToShow }).map((_, index) => (
                <div className="w-[calc(33.333%_-_16px)]" key={index}>
                  <SkeletonCard />
                </div>
              ))
            ) : (
              movies && movies.slice(currentIndex, currentIndex + itemsToShow).map((movie: any, index: number) => (
                <div className="w-[calc(33.333%_-_16px)]" key={index}>
                  <Cards
                    title={movie.title || movie.name}
                    date={movie.release_date || movie.first_air_date}
                    imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    rating={movie.vote_average.toString()} 
                  />
                </div>
              ))
            )}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition z-10 border-2 border-gray-600"
            onClick={handleNext}
            disabled={currentIndex >= (movies ? movies.length : 0) - itemsToShow}
          >
            <i className="fa-solid fa-arrow-right w-6"></i>
          </button>
        </div>
      </section>
    </div>
  );
});

export default CardWrapper;
