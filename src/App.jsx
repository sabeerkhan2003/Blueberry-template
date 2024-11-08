import { useState,useEffect } from 'react'
import "@fontsource/poppins";
import './App.css'
import Home from './pages/home'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1800,
      // Animation duration in milliseconds
      // once: true,
      // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Home />
    </>
  )
}

export default App
