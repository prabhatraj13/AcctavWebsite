import React, {useEffect} from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'
import Service from './Service'
import Contact from './Contact'

const Home = () => {

  // const data = {
  //   name : "ACCTAV TECHNOLOGIES",
  //   image : "./images/hero.svg"
  // }

  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);
  

  return (
    // <HeroSection {...data}/>
    <>
    <HeroSection />
    <Service />
    <Contact />
    </>
  )
}

export default Home
