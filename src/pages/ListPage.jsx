import React, { useEffect, useState } from "react";
import Movies from "../component/Movies";
import { fetchFromAPI } from "../utils/FetchFromApi";
import SearchBar from "../component/SearchBar";
import Navbar from "../component/Navbar";

const ListPage = () => {
  const shouldShow = true;
  const [movies, Setmovies] = useState(null);

  useEffect(() => {
    fetchFromAPI().then((data) => {
      Setmovies(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Movies movies={movies} />
    </div>
  );
};

export default ListPage;
