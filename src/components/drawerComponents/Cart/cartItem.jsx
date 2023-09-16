import React, {useState} from 'react'

//assets
import prod2 from "../../../assets/images/shoeDesigns/male/IMG_1838.jpg"

//components
import Quantity from '../../UI/quantity'

//icons
import {BiXCircle} from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/slices/cartSlice';
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";



export default function CartItem({item}) {
  const Dispatch = useDispatch();

  

const removeFromCart = () =>{
 
 Dispatch(actions.removeItem(item.name))
}

const incrementCartItem = () =>{
  Dispatch(actions.incrementCart(item.name))
}

const decrementCartItem = () =>{
  Dispatch(actions.decrementCart(item.name))
}


  return (
   <section className='flex justify-between pb-2  border-b-[1px] mt-[1rem]'>
    <section className='flex gap-x-4' >
    <div id='productImage' className='w-[70px] '>
        <img src={item.image}/>
    </div>

    <div >
        <h3 className='mb-[0.25rem]'>{item.name}</h3>

        <section>
        <h3 className='mb-[0.5rem]'>Color: {item.color}</h3>
        <h3 className='mb-[0.5rem]'>Size: {item.size}</h3>
        <div className='flex gap-x-4 items-center'>
          
        <section>
      <div className="border border-1 rounded-[0.5rem] w-[80px] flex gap-x-3 p-2">
        <button onClick={decrementCartItem} >
          <BiMinus />
        </button>

        <h2 className="text-[16px]">{item.quantity}</h2>
        <button onClick={incrementCartItem}>
          <BiPlus  />
        </button>
      </div>
    </section>

        <h3>₦{item.totalPrice}</h3>
       
        </div>
        </section>
    </div>
    </section>

    <div><BiXCircle size="25px" onClick={removeFromCart}/></div>
   </section>
  )
}
