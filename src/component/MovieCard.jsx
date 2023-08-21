import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const ImageURl = "https://image.tmdb.org/t/p/w500";
  const { poster_path, title, overview, vote_average } = movie;
  return (
    <Card sx={{ width: { xs: "100%", md: "200px" }, backgroundColor: "" }}>
      <Link to={`/movie/${movie.id}`}>
        <CardMedia
          image={ImageURl + poster_path}
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          alt={title}
        ></CardMedia>
      </Link>

      <CardContent sx={{ height: "106px" }}>
        <Box sx={{ justifyContent: "space-between" }} display={"flex"}>
          <Typography variant="subtitle1" fontWeight="bold">
            {title.slice(0, 10)}
          </Typography>
          <Typography variant="subtitle2">{vote_average.toFixed(1)}</Typography>
        </Box>

        <Typography sx={{ paddingTop: "30px" }}>
          {overview.slice(0, 30)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
