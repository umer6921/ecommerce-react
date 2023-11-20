import React from 'react';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

export default function CartAmountToggle({amount, setDecrease, setIncrease}) {
  return (
    <>
     <div className='cart-amount'>
        <button onClick={setDecrease} className='cart-amount-button me-4'>
           <AiOutlineMinus />
        </button>
        <p className='mb-0'>{amount}</p>
        <button onClick={setIncrease} className='cart-amount-button ms-4'>
           <AiOutlinePlus />
        </button>
     </div>
    </>
  )
}
