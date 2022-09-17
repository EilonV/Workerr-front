import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {PopularTagsList} from '../cmps/popular-list'
import { gigService } from '../services/gig.service'
import { userService } from '../services/user.service'

import HeroImg1 from '../assets/imgs/jumbo/1.png'

// import HeroImg2 from '../assets/imgs/jumbo/2.png'
// import HeroImg3 from '../assets/imgs/jumbo/3.png'
// import HeroImg4 from '../assets/imgs/jumbo/4.png'



export const Home = () => {

  let navigate = useNavigate();




  return <section className='home'>

    <div className='hero-wrapper full'>
      <div className='hero-background hero-dani'>
        <img src={HeroImg1} alt="Dani, Web Expert" />
        <div className='seller-name'>
          <div className='reviews-container flex row'></div>
          Dani, Web Expert
        </div>

      </div>
      {/* <div className='hero-background hero-mor'></div>
  <div className='hero-background hero-julio'></div>
  <div className='hero-background hero-mani'></div> */}

      <div className='hero-content'>
        <h1>Find the perfect <span className='italic-font'>freelance</span> <br /> services for your business</h1>
        <form className='home-search-box flex row'>
          <div className='search-icon flex justify-center'><i>icon</i></div>
          <input type="text" />
          <button>Search</button>
        </form>
        <div className='popular-categories flex gap'>Popular:
          {['logo design', 'artisitic', 'proffesional', 'accessible'].map((tag, idx) =>
            <span key={idx}><Link to={`/explore?filter=tags:${tag}`}>{tag}</Link></span>
          )}
        </div>
      </div>


    </div>
     
      {/* <div className='social-proof-line flex row justify-center'>Trusted by:
        <span>PlayBook</span>
        <span>Keygle</span>
        <span>BigNoise</span>
        <span>BHB</span>
        <span>PayMe</span>
      </div> */}

<div className='popular-tags main-layout'>
                <h2>Popular professional services</h2>
                <PopularTagsList />
            </div>

  </section>
}
