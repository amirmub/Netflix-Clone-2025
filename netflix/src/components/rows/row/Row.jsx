import React, {useState,useEffect} from 'react'
import "./Row.css"
import axios from "../../../utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

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

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                console.log(urlParams);
                console.log(urlParams.get("v"));
            })
            .catch((error) => console.error(error));
        } 

    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

  return (
    <div className='row'> 
        <h2>{title}</h2>
        <div className="row_posters">
            {movies?.map((movie,index )=> (
            <img 
                onClick={() => handleClick(movie)}
                key={index}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                alt={movie.name}
            />
            ))}
        </div>
        <div style={{ padding: "40px" }}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    </div>


    
  )
}

export default Row
