import React, { Component, useState } from 'react';
import Star from "./Star";


const StarRating = ( {totalStars = 5} ) => {

    const[seletedStars, setSeletedStars] = useState(0)

    const createArray = (length) => [
        ...Array(length)
    ]
    return (
        <>
        {createArray(totalStars).map((n, i)=> (
        <Star key={i} selected={seletedStars > i} onSelect={()=> setSeletedStars( i + 1)}/>
        ))}

        <p>{seletedStars} of {totalStars}</p>
        </>

        )
   
}
 
export default StarRating;