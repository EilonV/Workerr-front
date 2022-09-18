import React from 'react'
import { Link } from 'react-router-dom'
import { PopularTagsList } from '../cmps/popular-list'


import { AppHeader } from '../cmps/app-header'


import WorkingWomen from '../assets/imgs/jumbo/6.jpeg'
import HeroImg1 from '../assets/imgs/jumbo/1.png'
// import HeroImg2 from '../assets/imgs/jumbo/2.png'
// import HeroImg3 from '../assets/imgs/jumbo/3.png'
// import HeroImg4 from '../assets/imgs/jumbo/4.png'



export const Home = () => {






  return <section className='home'>
    <AppHeader />

    <div className='hero-wrapper'>
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

    <div className='social-proof-line flex row gap justify-center'>Trusted by:
      <span>PlayBook</span>
      <span>Keygle</span>
      <span>BigNoise</span>
      <span>BHB</span>
      <span>PayMe</span>
    </div>

    <div className='popular-tags main-layout'>
      <h2>Popular professional services</h2>
      <PopularTagsList />
    </div>

    <section>
      <div className='about-us'>
        <div className='content'>
          <h2>A whole world of freelance talent at your fingertips</h2>
          <div>
            <h6> <span></span>The best for every budget</h6>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
          </div>
          <div>
            <h6><span></span>Quality work done quickly</h6>
            <p>Find the right freelancer to begin working on your project within minutes.</p>
          </div>
          <div>
            <h6><span></span>Protected payments, every time</h6>
            <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
          </div>
          <div>
            <h6><span></span>24/7 support</h6>
            <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
        </div>
        <div className='about-us-img'>
          <img src={WorkingWomen} alt="working women" />
        </div>
      </div>

    </section>



  </section>
}
