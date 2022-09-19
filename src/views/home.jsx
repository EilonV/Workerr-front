import React from 'react'
import { Link } from 'react-router-dom'
import { PopularTagsList } from '../cmps/popular-list'
import { AppHeader } from '../cmps/app-header'

import BottomImg1 from '../assets/imgs/jumbo/1.png'
import HeroImg2 from '../assets/imgs/jumbo/2.jpeg'
import HeroImg3 from '../assets/imgs/jumbo/3.jpeg'
import HeroImg4 from '../assets/imgs/jumbo/4.jpeg'
import HeroImg5 from '../assets/imgs/jumbo/5.jpeg'
import HeroImg6 from '../assets/imgs/jumbo/6.jpeg'

import trusted1 from '../assets/imgs/trusted-by/1.png'
import trusted2 from '../assets/imgs/trusted-by/2.png'
import trusted3 from '../assets/imgs/trusted-by/3.png'
import trusted4 from '../assets/imgs/trusted-by/4.png'
import trusted5 from '../assets/imgs/trusted-by/5.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let hero = 1

export const Home = () => {

  const changeHero = () => {
    setInterval(() => {
      if (hero === 6) hero = 1
      hero++
      const currHero = document.querySelector(`.hero-background${hero}`)
      const prevHero = document.querySelector(`.hero-background${hero - 1}`)

      console.log(`.hero-background${hero}`)
      if (currHero.style.opacity == '0') {
        if (hero < 7 && hero > 2)
          prevHero.style.opacity = '0'
        if (hero === 2)
          document.querySelector(`.hero-background6`).style.opacity = '0'
        currHero.style.opacity = '1'
      }
      else {
        // document.querySelector(`.hero-background${--hero}`).style.opacity = '1'
        currHero.style.opacity = '0'
      }
    }, 8000);
  }
  // changeHero()

  return <section>
    <AppHeader />
    <section className='home'>

      <div className='hero-wrapper'>
        <div className='hero-background'>
          <div className='hero-background6' style={{ opacity: 1 }}>
            <img className='hero-image' src={HeroImg6} alt="Dani, Web Expert" />
            <div className='hero-info-container main-layout'>
              <div className='hero-info flex column'>
                <div>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                </div>
                <p>Gabrielle, <span className='bold'>Video Editor</span></p>
              </div>
            </div>
          </div>
          <div className='hero-background5' style={{ opacity: 0 }}>
            <img className='hero-image' src={HeroImg5} alt="Zac, Bar Owner" />
            <div className='hero-info-container main-layout'>
              <div className='hero-info flex column'>
                <div>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                </div>
                <p>Zac, <span className='bold'>Bar Owner</span></p>
              </div>
            </div>
          </div>
          <div className='hero-background4' style={{ opacity: 0 }}>
            <img className='hero-image' src={HeroImg4} alt="Ritika, Shoemaker and Designer" />
            <div className='hero-info-container main-layout'>
              <div className='hero-info flex column'>
                <div>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                </div>
                <p>Ritika, <span className='bold'>Shoemaker and Designer</span></p>
              </div>
            </div>
          </div>
          <div className='hero-background3' style={{ opacity: 0 }}>
            <img className='hero-image' src={HeroImg3} alt="Moon, Marketing Expert" />
            <div className='hero-info-container main-layout'>
              <div className='hero-info flex column'>
                <div>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                </div>
                <p>Moon, <span className='bold'>Marketing Expert</span></p>
              </div>
            </div>
          </div>
          <div className='hero-background2' style={{ opacity: 0 }}>
            <img className='hero-image' src={HeroImg2} alt="Dani, Web Expert" />
            <div className='hero-info-container main-layout'>
              <div className='hero-info flex column'>
                <div>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                </div>
                <p>Andrea, <span className='bold'>Fashion Designer</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className='hero-info-container main-layout flex align-center'>
          <div className='hero-content-left '>
            <h2>Find the perfect <i><span>freelance</span></i> </h2>
            <h2>services for your business</h2>
            <div className='hero-search flex'>
              <form>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#62646a" d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" /></svg>
                <input className='header-input' type="text" placeholder='Try "building mobile app"' />
                <button className='header-search-btn'>Search</button>
              </form>
            </div>
            <div className='hero-tags flex align-center'>
              <p>Popular:</p>
              <ul className='hero-list flex'>
                <li><a href="">Website Design</a></li>
                <li><a href="">WordPress</a></li>
                <li><a href="">Logo Design</a></li>
                <li><a href="">Video Editing</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className='hero-content'>
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
        </div> */}
        <div className='trusted-by-full'>
          <div className='trusted-by-content main-layout flex justify-center align-center'>
            <p>Trusted by:</p>
            <div>
              <ul className='flex justify-center align-center'>
                <li>
                  <img src={trusted1} alt="facebook" />
                </li>
                <li>
                  <img src={trusted2} alt="google" />
                </li> <li>
                  <img src={trusted3} alt="netflix" />
                </li> <li>
                  <img src={trusted4} alt="p&g" />
                </li> <li>
                  <img src={trusted5} alt="paypal" />
                </li>
              </ul>
            </div>
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

      <div className='filler'></div>

    </section>

  </section>

}
