import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import './Home.css'
import RowList from '../../components/rows/rowLIst/RowList'

function Home() {
  return (
    <>
     <Header />
     <Banner />
     <RowList />
     <Footer />
    </>
  )
}

export default Home;
