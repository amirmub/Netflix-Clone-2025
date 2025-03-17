import React from 'react'
import Row from '../row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <>
      <Row 
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
       />
     
     <Row 
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
       />
       <Row 
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
       />
       <Row 
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
       />
       <Row 
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
       />

     <Row 
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
       />

    <Row 
        title="Trending"
        fetchUrl={requests.fetchTrending}
       />
       
    </>
  )
}

export default RowList
