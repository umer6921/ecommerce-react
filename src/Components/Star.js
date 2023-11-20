import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';


export default function Star({ stars, reviews }) {

    const filledStars = Math.ceil(stars);
   
    //console.log("🚀 ~ file: Star.js:9 ~ Star ~ hasHalfStar:", hasHalfStar)

    
    const cusStars = Array.from({ length: filledStars }, (_, index) => {
        let number =  index + 0.5;
        return  (
        <span key={index} className="">
            {
               
                stars >= index + 1 ? <BsStarFill className='rating'/> :
                stars >= number ? <BsStarHalf className='rating' /> :
                <BsStar className='rating' />
             }
               
            </span>
               
        )

        
            }

    );
    return (
        <>
        
        {cusStars}
            <span className='ms-2'>{reviews} customer reviews</span>
        
           




        </>
    )
}
