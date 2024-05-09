import React from 'react'
import Carousel from '../Components/Carousel'
import Starter from '../Components/Starter'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div>
        <Navbar />
        <Carousel />
        <Starter />
        <Footer />
    </div>
  )
}

export default Home