import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

export default function ListView({ products }) {
  return (
    <>
      {
        products.map((curElem) => {
          const { id, name, image, price, category, description } = curElem;
          return (

            <div className='card' key={id}>
              <div className='card-body'>
                <div className='row align-items-center'>
                  <div className='col-4 col-lg-5'>
                    <figure className='list-view-img mx-auto'>
                      <img src={image} alt={name} className='img-fluid h-100' />
                    </figure>
                  </div>
                  <div className='col-6 col-lg-7'>
                    <h6>{name}</h6>
                    <p><FormatPrice price={price} /></p>
                    <p>{description.slice(0,90)}....</p>
                    <NavLink to={`/singleproduct/${id}`}>
                      <button className='btn btn-outline-primary'>Read More</button>
                    </NavLink>

                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
