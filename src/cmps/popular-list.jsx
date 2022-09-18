import React from 'react';
import { Link } from "react-router-dom"

import Accessible from '../assets/imgs/popular-slideshow-imgs/books.jpeg'
import Proffesionals from '../assets/imgs/popular-slideshow-imgs/laptop.jpeg'
import LogoDesign from '../assets/imgs/popular-slideshow-imgs/mic.jpeg'
import Artisitic from '../assets/imgs/popular-slideshow-imgs/books2.jpeg'

import { PopularTagCard } from '../cmps/popular-card'



export const PopularTagsList = () => {

    const popularTags = [

        { img: Accessible, title: 'Accessible', subTitle: 'Share your message' },
        { img: Proffesionals, title: 'Proffesionals', subTitle: 'Engage your audience' },
        { img: LogoDesign, title: 'Logo Design', subTitle: 'Build your brand' },
        { img: Artisitic, title: 'Artisitic', subTitle: 'Reach more costumers' }

    ]

    return (

        <section>

            <ul className='popular-tags-list flex row gap  justify-center'>
                {popularTags.map((tag) =>


                    <PopularTagCard key={tag.title} tag={tag} />

                )}

            </ul>
        </section>

    )

}
