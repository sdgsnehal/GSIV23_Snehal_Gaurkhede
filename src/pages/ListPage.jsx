import React, { useEffect, useState } from "react";
import Movies from "../component/Movies";
import { fetchFromAPI } from "../utils/FetchFromApi";
import SearchBar from "../component/SearchBar";
import Navbar from "../component/Navbar";
import { Box } from "@mui/material";

const ListPage = () => {
  
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Movies movies={movies} />
      </Box>
    </div>
  );
};

export default ListPage;
