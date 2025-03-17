import React, {useState,useEffect} from 'react'
import "./Row.css"
import axios from "../../../utils/axios";


function Row({title, fetchUrl, isLargeRow = false}) {
  const [movies, setMovies] = useState([]); 
   const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            }
            catch (error) {
                console.error(error);
            }  
        }
      )();
    }, [fetchUrl]
      );


  return (
    <div className='row'> 
        <h2>{title}</h2>
        <div className="row_posters">
            {movies?.map((movie,index )=> ( 
            <img 
                key={index}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                alt={movie.name}
            />
            ))}
        </div>
       
    </div>


    
  )
}

export default Row
