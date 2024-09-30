import React, { useCallback, useState } from "react";
import HeroSection from "../../components/HeroSection";
import CardWrapper from "../../components/CardWrapper";
import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "../../Redux/actions/movieActions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTrendingTab, setActiveTrendingTab] = useState("Day");
  const [activePopularTab, setActivePopularTab] = useState("Movies");
  const [activeTopRatedTab, setActiveTopRatedTab] = useState("Movies");

  const handleTrendingFetchMovies = useCallback(
    (category: string) => {
      dispatch(fetchTrendingMovies(category));
    },
    [activeTrendingTab]
  );

  const handlePopularFetchMovies = useCallback(
    (category: string) => {
      dispatch(fetchPopularMovies(category));
    },
    [activePopularTab]
  );

  const handleTopRatedFetchMovies = useCallback(
    (category: string) => {
      dispatch(fetchTopRatedMovies(category));
    },
    [activeTopRatedTab]
  );

  return (
    <div>
      <HeroSection />
      <CardWrapper
        category={"trending"}
        fetchMovies={handleTrendingFetchMovies}
        activeTab={activeTrendingTab}
        setActiveTab={setActiveTrendingTab}
        options={["Day", "Week"]}
      />
      <CardWrapper
        category={"popular"}
        fetchMovies={handlePopularFetchMovies}
        activeTab={activePopularTab}
        setActiveTab={setActivePopularTab}
        options={["Movies", "TV Shows"]}
      />
      <CardWrapper
        category={"Top Rated"}
        fetchMovies={handleTopRatedFetchMovies}
        activeTab={activeTopRatedTab}
        setActiveTab={setActiveTopRatedTab}
        options={["Movies", "TV Shows"]}
      />
    </div>
  );
};

export default Home;
