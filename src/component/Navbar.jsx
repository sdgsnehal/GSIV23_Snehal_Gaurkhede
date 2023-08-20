import { IconButton, Stack } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
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
      <SearchBar />
      <IconButton sx={{ p: "10px" }}>
        <HomeIcon />
      </IconButton>
    </Stack>
  );
};

export default Navbar;
