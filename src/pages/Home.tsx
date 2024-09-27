import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardWrapper from "../components/CardWrapper";
import Footer from "../components/Footer";
import { fetchTrendingMovies, fetchPopularMovies } from "../Redux/actions/movieActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTrendingTab, setActiveTrendingTab] = useState("Day");
  const [activePopularTab, setActivePopularTab] = useState("Movies");
    
  const handleTrendingFetchMovies = (category: string) => {
    dispatch(fetchTrendingMovies(category));
  };
  

  const handlePopularFetchMovies = (category: string) => {
    dispatch(fetchPopularMovies(category));
  };


  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Home;
