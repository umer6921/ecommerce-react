import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

export default function Product(curElem) {
    const { id, name, image, price, category } = curElem;
    
    return (
        <>

            <NavLink to={`/singleproduct/${id}`}>
                <div class="card">
                    <div className='fig'>
                        <img src={image} className="card-img-top" alt={name} />
                        <div className='item-name'>
                            {category}
                        </div>
                    </div>
                    <div className="card-body d-flex justify-content-between pt-0">
                        <p className='m-0'>{name}</p>
                        <p className='m-0'>{<FormatPrice price={price} />}</p>
                    </div>
                </div>

            </NavLink>

        </>
    )
}
