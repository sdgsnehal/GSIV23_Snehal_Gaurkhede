import { InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const[searchTerm,setSearchTerm] = useState('')
    const navigate = useNavigate();
    const onhandleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm('')
        console.log(searchTerm);
    }
    
  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{ width: "600px", height: "40px", borderRadius: "8px", p: "5px" }}
      
    >
      <InputBase
        sx={{ ml: 1, flex: 1, width: "100%", height: "100%" }}
        placeholder="Search"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
    </Paper>
  );
};

export default SearchBar;
