import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Explore from '../components/explore'
import Deal from '../components/deal'
import Shopnow from '../components/shopnow'


function Home() {
    return (
        <>
            <Nav />
            <Hero/>
            <Explore />
            <Deal/>
            <Shopnow/>
            <Footer/>
        </>
    )
}

export default Home