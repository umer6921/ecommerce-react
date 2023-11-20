import React from 'react'
import Product from './Product'

export default function GridView({products}) {


  return (
    <>
    <div className='row g-2'>
    
        {
            products.map((curElem)=>{
                return(
                    <div className='col-sm-6 col-md-6 col-lg-4' key={curElem.id} >
                    <Product {...curElem} />

                    </div>
                )
               

            })
        }
       
    </div>
    
    </>
  )
}
