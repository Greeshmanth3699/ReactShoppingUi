import React,{useState} from 'react'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'
import {Gents, Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {

  const [gentsFashion, setgentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)
  console.log(Gents)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <WomenCollection ladiesFashion={ladiesFashion}/>
        <Footer/>

    </div>
  )
}

export default MainPage