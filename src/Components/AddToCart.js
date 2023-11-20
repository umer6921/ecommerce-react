import React, { useState } from 'react';
import {BsCheck} from 'react-icons/bs';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';

export default function AddToCart({product}) {
    const {id, colors, stock} = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = ()=>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = ()=>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
        console.log("🚀 ~ file: AddToCart.js:16 ~ setIncrease ~ stock:", stock)
        
    }
  return (
    <>
    <section>
        <div>
            <p className='d-flex align-items-center'>
                Colors: {
                    colors.map((curColor, index)=>{
                        return <button key={index} style={{backgroundColor: `${curColor}`}}
                        className={color === curColor? "color-selection active me-2" : "color-selection me-2"}
                        onClick={()=>{setColor(curColor)}}
                        >
                            {color === curColor? <BsCheck className='color-check'/> : null}
                            
                        </button>
                    })
                }
            </p>
        </div>
        <CartAmountToggle amount={amount} setDecrease = {setDecrease} setIncrease = {setIncrease} />
        <NavLink to="/cart" >
            <button className='add-car-btn btn mt-3'>
                ADD TO CART
            </button>
        </NavLink>
    </section>
    </>
  )
}
