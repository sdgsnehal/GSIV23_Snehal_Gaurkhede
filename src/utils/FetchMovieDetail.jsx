
import axios from "axios";
const BASE_URL ='https://api.themoviedb.org/3'
const options = {
  
  url:BASE_URL,
  
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjk5MGZiOTIwZjljMjc2YmQyMTYzNzVhMWYzNjI4MyIsInN1YiI6IjY0ZGY0YTY0YWFlYzcxMDNmN2UzNjhhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kg1lGNPn6hxvyd3td7lyfVR0WUUPyGLPEAbZVW8vi7o'
  }
};

export const fetchMovieDetail = async(url)=>{
const {data} = await axios.get(`${BASE_URL}/${url}`,options)
return data;
}
