import { IconButton, Stack } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import MovieDetail from "./MovieDetail";
import { Link, useLocation } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

const Navbar = (props) => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        height: "64px",
        width: "100%",
      }}
    >
      {usePathname() === "/"  ? <SearchBar /> : <MovieDetail />}
    
      <Link to="/">
        <IconButton sx={{ p: "10px", alignSelf: "" }}>
          <HomeIcon />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default Navbar;
