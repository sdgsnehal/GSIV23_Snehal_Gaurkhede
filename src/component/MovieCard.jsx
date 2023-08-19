import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MovieCard = ({movie}) => {
    const ImageURl = "https://image.tmdb.org/t/p/w500";
    const {poster_path,title,overview,release_date} = movie;
  return (
    <Card sx={{width:{md:'200px',xs:'100%'}}}>
        <CardMedia image={ImageURl+poster_path} sx ={{width:'200px',height:'200px',objectFit:'cover'}} alt={title}>
           

        </CardMedia>
        <CardContent sx={{height:"106px"}}>
            <Typography>{title.slice(0,30)}</Typography>
            <Typography>{overview.slice(0,60)}</Typography>
        </CardContent>
    </Card>
  )
}

export default MovieCard