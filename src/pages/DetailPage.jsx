import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { fetchMovieDetail } from "../utils/FetchMovieDetail";
import { Box, Grid, Stack } from "@mui/material";
import { Image } from "@mui/icons-material";
import Navbar from "../component/Navbar";

const DetailPage = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [credits, setCredits] = useState(null);
  const { id } = useParams();
  const ImageURl = "https://image.tmdb.org/t/p/w500";
  const shouldShow = false;

  useEffect(() => {
    fetchMovieDetail(`/movie/${id}?language=en-US`).then((movie) => {
      setMovieDetail(movie);
    });
    fetchMovieDetail(`/movie/${id}/credits?language=en-US`).then((data) => {
      setCredits(data);

      console.log(data);
    });
  }, [id]);
  if (!movieDetail) return "loading...";
  const { poster_path, title, overview, release_date, runtime } = movieDetail;

  let castNames = "";
  let directorNames = "";

  if (credits) {
    const { cast, crew } = credits;

    castNames = cast
      .slice(0, 5)
      .map((item) => item.name)
      .join(",");

    const directorCrew = crew.filter((item) => item.job === "Director");
    directorNames = directorCrew.map((item) => item.name).join(",");
  }

  return (
    <>
      <Navbar />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }} >
        <Grid item xs={12} md={4} >
          {/* <Box
            sx={{
              width: { md: "180px", xs: "100%" },
              height: "240px",
            }}
          > */}
            <img
              src={ImageURl + poster_path}
              alt=""
              sx={{ objectFit: "cover", width: { md: "180px", xs: "100%" } }}
            />
          {/* </Box> */}
        </Grid>
        <Grid item xs={12} md={8}sx={{backgroundColor:"white"}} >
          {/* <Box> */}
            <h1>{title}</h1>
            <p>{release_date}</p>
            <p>{castNames}</p>
            <p>{directorNames}</p>
            <p>{runtime} min</p>
            <p>{overview}</p>
          {/* </Box> */}
        </Grid>
      </Grid>
    </>
  );
};

export default DetailPage;
