import React from 'react'
import Footer from '../components/Footer'
import About from './About'
import Languages from './Languages'

function Home() {
    return (
        <div className="home">
          <div className="banner"></div>
            <About/>
            <Languages/>
            <Footer/>
        </div>
    )
}

export default Home
