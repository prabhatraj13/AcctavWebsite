import React, {useEffect} from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'

const About = () => {
  // const data = {
  //   name : "ACCTAV TECHNOLOGY PVT. LTD.",
  //   image : "./images/about.svg",
  // };

  const { updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);
  

  return (
  //  <HeroSection  { ...data } />
   <HeroSection />
  )
}

export default About
