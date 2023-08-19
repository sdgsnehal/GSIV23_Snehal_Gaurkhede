import { Box, Stack } from '@mui/material'
import React from 'react'
import MovieCard from './MovieCard';

const Movies = ({movies}) => {
    if(!movies) return "Loading...";
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {movies.map((movie,index)=>(
            <Box key={index}>
                
                <MovieCard movie={movie}/>
                
                
            </Box>
        ))}
    </Stack>
    
  )
}

export default Movies