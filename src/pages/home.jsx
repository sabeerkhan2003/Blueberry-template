import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Explore from '../components/explore'
import Deal from '../components/deal'
import Shopnow from '../components/shopnow'
import Vendors from '../components/vendors'
import 'aos/dist/aos.css'
import Brands from '../components/brands'
import Insta from '../components/insta'


function Home() {
    return (
        <>
            <Nav />
            <Hero/>
            <Explore />
            <Deal/>
            <Shopnow/>
            <Vendors/>
            <Insta/>
            <Brands/>
            <Footer/>
        </>
    )
}

export default Home