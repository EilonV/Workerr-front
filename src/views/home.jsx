import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { PopularTagsList } from '../cmps/popular-list'
import { AppHeader } from '../cmps/app-header'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import StarFill from '../assets/imgs/icons/5-stars.svg'
import DoneCircle from '../assets/imgs/icons/done-circle.svg'
import Magnifying from '../assets/imgs/icons/magnifying-glass.svg'


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

import pop1 from '../assets/imgs/popular-slideshow-imgs/books.jpeg'
import pop2 from '../assets/imgs/popular-slideshow-imgs/books2.jpeg'
import pop3 from '../assets/imgs/popular-slideshow-imgs/computers.jpeg'
import pop4 from '../assets/imgs/popular-slideshow-imgs/house-design.jpeg'
import pop5 from '../assets/imgs/popular-slideshow-imgs/laptop.jpeg'
import pop6 from '../assets/imgs/popular-slideshow-imgs/mic.jpeg'
import pop7 from '../assets/imgs/popular-slideshow-imgs/phone-white.jpeg'
import pop8 from '../assets/imgs/popular-slideshow-imgs/phone.jpeg'
import pop9 from '../assets/imgs/popular-slideshow-imgs/photography.jpeg'
import { AppHeaderScroll } from '../cmps/app-header-scroll'
import { useEffect } from 'react'

let hero = 1
let interval

export const Home = () => {
  function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.querySelector('.header-scroll').style.opacity = 1
      document.querySelector('.app-header').style.opacity = 0
    } else {
      document.querySelector('.app-header').style.opacity = 1
      document.querySelector('.header-scroll').style.opacity = 0
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction)
    return () => {
      window.removeEventListener('scroll', scrollFunction)
    }
  })
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  useLayoutEffect(() => {
    return () => {
      clearInterval(interval)
      hero = 1
    }
  }, [])

  const changeHero = () => {
    interval = setInterval(() => {
      console.log('interval is running')
      if (hero === 6) hero = 1
      hero++
      const currHero = document.querySelector(`.hero-background${hero}`)
      const prevHero = document.querySelector(`.hero-background${hero - 1}`)

      if (currHero.style.opacity == '0') {
        if (hero < 7 && hero > 2) prevHero.style.opacity = '0'
        if (hero === 2)
          document.querySelector(`.hero-background6`).style.opacity = '0'
        currHero.style.opacity = '1'
      } else {
        currHero.style.opacity = '0'
      }
    }, 8000)
  }

  //activates the changing jumbo
  changeHero()

  return (
    <section>
      <AppHeader />
      <AppHeaderScroll />
      <section className='home main-layout'>
        <div className='hero-wrapper'>
          <div className='hero-background'>
            <div className='hero-background6' style={{ opacity: 1 }}>
              <img
                className='hero-image'
                src={HeroImg6}
                alt='Dani, Web Expert'
              />
              <div className='hero-info-container'>
                <div className='hero-info flex column main-layout'>
                  <div>
                    <svg width="78" height="13" viewBox="0 0 78 13" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.5l-4.114 2.163.785-4.581L.343 4.837l4.6-.669L7 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L39 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm-16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L23 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L55 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L71 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581z" fill="#FFC100" /></svg>
                  </div>
                  <p>
                    Gabrielle, <span className='bold'>Video Editor</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='hero-background5' style={{ opacity: 0 }}>
              <img className='hero-image' src={HeroImg5} alt='Zac, Bar Owner' />
              <div className='hero-info-container'>
                <div className='hero-info flex column main-layout'>
                  <div>
                    <svg width="78" height="13" viewBox="0 0 78 13" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.5l-4.114 2.163.785-4.581L.343 4.837l4.6-.669L7 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L39 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm-16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L23 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L55 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L71 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581z" fill="#FFC100" /></svg>
                  </div>
                  <p>
                    Zac, <span className='bold'>Bar Owner</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='hero-background4' style={{ opacity: 0 }}>
              <img
                className='hero-image'
                src={HeroImg4}
                alt='Ritika, Shoemaker and Designer'
              />
              <div className='hero-info-container'>
                <div className='hero-info flex column main-layout'>
                  <div>
                    <svg width="78" height="13" viewBox="0 0 78 13" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.5l-4.114 2.163.785-4.581L.343 4.837l4.6-.669L7 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L39 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm-16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L23 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L55 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L71 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581z" fill="#FFC100" /></svg>

                  </div>
                  <p>
                    Ritika, <span className='bold'>Shoemaker and Designer</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='hero-background3' style={{ opacity: 0 }}>
              <img
                className='hero-image'
                src={HeroImg3}
                alt='Moon, Marketing Expert'
              />
              <div className='hero-info-container'>
                <div className='hero-info flex column main-layout'>
                  <div>
                    <svg width="78" height="13" viewBox="0 0 78 13" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.5l-4.114 2.163.785-4.581L.343 4.837l4.6-.669L7 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L39 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm-16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L23 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L55 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L71 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581z" fill="#FFC100" /></svg>

                  </div>
                  <p>
                    Moon, <span className='bold'>Marketing Expert</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='hero-background2' style={{ opacity: 0 }}>
              <img
                className='hero-image'
                src={HeroImg2}
                alt='Dani, Web Expert'
              />
              <div className='hero-info-container'>
                <div className='hero-info flex column main-layout'>
                  <div>
                    <svg width="78" height="13" viewBox="0 0 78 13" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.5l-4.114 2.163.785-4.581L.343 4.837l4.6-.669L7 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L39 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm-16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L23 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm32 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L55 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581zm16 0l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L71 0l2.057 4.168 4.6.669-3.328 3.245.785 4.581z" fill="#FFC100" /></svg>
                  </div>
                  <p>
                    Andrea, <span className='bold'>Fashion Designer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='hero-info-container flex align-center'>
            <div className='hero-content-left '>
              <h2>
                Find the perfect{' '}
                <i>
                  <span>freelance</span>
                </i>{' '}
              </h2>
              <h2>services for your business</h2>
              <div className='hero-search flex'>
                <form>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#62646a'
                      d='M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z'
                    />
                  </svg>
                  <input
                    className='header-input'
                    type='text'
                    placeholder='Try "building mobile app"'
                  />
                  <button className='header-search-btn'>Search</button>
                </form>
              </div>
              <div className='hero-tags flex align-center'>
                <p>Popular:</p>
                <ul className='hero-list flex'>
                  <li>
                    <a href=''>Website Design</a>
                  </li>
                  <li>
                    <a href=''>WordPress</a>
                  </li>
                  <li>
                    <a href=''>Logo Design</a>
                  </li>
                  <li>
                    <a href=''>Video Editing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>

        <div className='trusted-by-full full'>
          <div className='trusted-by-content flex justify-center align-center'>
            <p>Trusted by:</p>
            <div>
              <ul className='flex justify-center align-center'>
                <li>
                  <img src={trusted1} alt='facebook' />
                </li>
                <li>
                  <img src={trusted2} alt='google' />
                </li>{' '}
                <li>
                  <img src={trusted3} alt='netflix' />
                </li>{' '}
                <li>
                  <img src={trusted4} alt='p&g' />
                </li>{' '}
                <li>
                  <img src={trusted5} alt='paypal' />
                </li>
              </ul>
            </div>
          </div>
        </div>


        <h2 className='popular-text fs32'>Popular professional services</h2>

        <div className='slick-container-home'>
          <Slider {...settings}>
            <div>
              <a href=''>
                <img src={pop1} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Go global</p>
                <h3>Translation</h3>
              </div>
            </div>
            <div>
              <a href=''>
                <img src={pop2} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Showcase your story</p>
                <h3>Book Covers</h3>
              </div>
            </div>
            <div>
              <a href=''>
                <img src={pop3} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Customize your site</p>
                <h3>WordPress</h3>
              </div>
            </div>
            <div>
              <a href=''>
                <img src={pop4} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Build your brand</p>
                <h3>Logo Design</h3>
              </div>
            </div>
            <div>
              <a href=''>
                <img src={pop5} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Unlock growth online</p>
                <h3>SEO</h3>
              </div>
            </div>
            <div>
              <a href=''>
                <img src={pop6} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Share your message</p>
                <h3>Voice Over</h3>
              </div>
            </div>
            <div>
              <a href=''>
                <img src={pop7} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Learn your business</p>
                <h3>Data Entry</h3>
              </div>
            </div>
            <div>
              <a href=''>
                <img src={pop8} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Color your dreams</p>
                <h3>Illustration</h3>
              </div>
            </div>
            <div>
              <a href=''>
                <img src={pop9} alt='' />
              </a>
              <div className='slick-img-caption'>
                <p>Engage your audience</p>
                <h3>Video Explainer</h3>
              </div>
            </div>
          </Slider>
        </div>

        <div className='video-container full'>
          <div className='over-blue main-layout'>
            <div className='flex-video flex align-center'>
              <div className='video-text'>
                <h2>A whole world of freelance talent at your fingertips</h2>
                <div className='flex'>
                  <svg
                    className='mar-right-10'
                    width='24'
                    height='24'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#74767e'
                      d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'
                    />
                    <path
                      fill='#74767e'
                      d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'
                    />
                  </svg>
                  <h6>The best for every budget</h6>
                </div>
                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
                <div className='flex'>
                  <svg
                    className='mar-right-10'
                    width='24'
                    height='24'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#74767e'
                      d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'
                    />
                    <path
                      fill='#74767e'
                      d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'
                    />
                  </svg>
                  <h6>Quality work done quickly</h6>
                </div>
                <p>
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
                <div className='flex'>
                  <svg
                    className='mar-right-10'
                    width='24'
                    height='24'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#74767e'
                      d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'
                    />
                    <path
                      fill='#74767e'
                      d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'
                    />
                  </svg>
                  <h6>Protected payments, every time</h6>
                </div>
                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
                <div className='flex'>
                  <svg
                    className='mar-right-10'
                    width='24'
                    height='24'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#74767e'
                      d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'
                    />
                    <path
                      fill='#74767e'
                      d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'
                    />
                  </svg>
                  <h6>24/7 support</h6>
                </div>
                <p>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </div>
              <div className='video'>
                <iframe
                  src='https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7'
                  frameBorder='0'
                ></iframe>
              </div>
            </div>
          </div>

        </div>

        <div className='bottom-categories'>
          <h2>Explore the marketplace</h2>
          <ul className='bot-category-list'>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" /><br /> Graphics & Design</a> </li>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg" alt="" /><br />Digital Marketing</a></li>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" alt="" /><br />Writing & Translation</a></li>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" alt="" /><br />Video & Animation</a></li>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" alt="" /><br />Music & Audio</a></li>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg" alt="" /><br />Programming & Tech</a></li>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt="" /><br />Business</a></li>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg" alt="" /><br />Lifestyle</a></li>
            <li><a href=""><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg" alt="" /><br />Data</a></li>
          </ul>
        </div>

      </section>
    </section>
  )
}
