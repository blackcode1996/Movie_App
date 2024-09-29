import React, { useEffect } from "react";
import Selector from "../../components/Dropdown"; 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { fetchGenres } from "../../Redux/actions/movieActions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]); 

  const sortBy = [
    {
      id: 0,
      name: "Popularity Descending",
    },
    {
      id: 1,
      name: "Popularity Ascending",
    },
    {
      id: 2,
      name: "Rating Ascending",
    },
    {
      id: 3,
      name: "Release Date Descending",
    },
    {
      id: 4,
      name: "Release Date Ascending",
    },
    {
      id: 5,
      name: "Title [A-Z]",
    },
  ];

  return (
    <div className="h-screen text-white">
      <section className="flex justify-end">
        {/* Map the sortBy array to send only the names to the Selector component */}
        <Selector tags={sortBy.map((item) => item.name)} /> 
        {/* Map genres to extract names and pass them to the Selector component */}
        <Selector tags={genres?.map((genre) => genre.name) || []} /> 
      </section>
      <section></section>
    </div>
  );
};

export default App;
