
import HeroSection from "../../components/HeroSection";
import CardWrapper from "../../components/CardWrapper";
import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "../../Redux/actions/movieActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTrendingTab, setActiveTrendingTab] = useState("Day");
  const [activePopularTab, setActivePopularTab] = useState("Movies");
  const [activeTopRatedTab, setActiveTopRatedTab] = useState("Movies");

  const handleTrendingFetchMovies = (category: string) => {
    dispatch(fetchTrendingMovies(category));
  };

  const handlePopularFetchMovies = (category: string) => {
    dispatch(fetchPopularMovies(category));
  };

  const handleTopRatedFetchMovies = (category: string) => {
    dispatch(fetchTopRatedMovies(category));
  };

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
