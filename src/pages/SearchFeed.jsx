import React, { useEffect, useState } from "react";
import Movies from "../component/Movies";
import { fetchMovieDetail } from "../utils/FetchMovieDetail";

import Navbar from "../component/Navbar";
import { useParams } from "react-router";

const ListPage = () => {
  const [movies, Setmovies] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchMovieDetail(`search/movie?query=${searchTerm}`).then((data) => {
      Setmovies(data.results);
      console.log(data.results);
    });
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <Movies movies={movies} />
    </div>
  );
};

export default ListPage;
