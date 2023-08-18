import React, { useEffect, useState } from "react";
import Movies from "../component/Movies";
import { fetchFromAPI } from "../utils/FetchFromApi";

const ListPage = () => {
    const [movies,Setmovies] = useState();

    useEffect(() => {
        fetchFromAPI().then(data=>{
            Setmovies(data.results)
            console.log(data.results)
        })
    },[])

  return (
    <div>
      <Movies movies={movies}/>
    </div>
  );
};

export default ListPage;
