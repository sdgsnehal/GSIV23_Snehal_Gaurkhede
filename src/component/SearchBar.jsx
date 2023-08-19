import { InputBase, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{ width: "600px", height: "40px", borderRadius: "8px", p: "5px" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, width: "100%", height: "100%" }}
        placeholder="Search"
      />
    </Paper>
  );
};

export default SearchBar;
