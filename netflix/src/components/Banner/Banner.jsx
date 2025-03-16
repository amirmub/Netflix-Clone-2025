import React from 'react'
import './Banner.css'
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import { useEffect, useState } from 'react';


function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
  return (
    <div className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'


      }}
    >
      
    </div>
  )
}

export default Banner
