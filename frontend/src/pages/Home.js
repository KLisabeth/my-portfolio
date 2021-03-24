import React from 'react'
import Footer from '../components/Footer'
import About from './About'

function Home() {
    return (
        <div className="home">
          <div className="banner"></div>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home
