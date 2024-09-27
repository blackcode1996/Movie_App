// Home.tsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardWrapper from "../components/CardWrapper";
import Footer from "../components/Footer";
import { fetchMovies } from "../Redux/actions/movieActions";
import { useState } from "react";

const Home = () => {

  const [active,setActiveTab] = useState<string>("");

  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardWrapper 
        category={"trending"} 
        fetchMovies={(timeFrame) => fetchMovies(timeFrame)} 
        timeFrame="Day" 
      />
      <CardWrapper 
        category={"popular"} 
        fetchMovies={fetchMovies} 
      />
      <Footer />
    </div>
  );
};

export default Home;
