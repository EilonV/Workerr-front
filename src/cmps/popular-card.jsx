import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export const PopularTagCard = ({ tag }) => {
    

    console.log(tag)
    return (
        
        <article className='popular-card '>
            <li>
                <img className='tag-img' src={tag.img} alt={tag.title} />
                <h5>{tag.subTitle}</h5>
                <h3>{tag.title}</h3>
            
            </li>
        </article>

)
}