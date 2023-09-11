import React from 'react'

//assets
import prod2 from "../../../assets/images/shoeDesigns/male/IMG_1838.jpg"

//components
import Quantity from '../../UI/quantity'

//icons
import {BiXCircle} from "react-icons/bi";

export default function CartItem({item}) {
  return (
   <section className='flex justify-between pb-2  border-b-[1px] mt-[1rem]'>
    <section className='flex gap-x-4' >
    <div id='productImage' className='w-[70px] '>
        <img src={prod2}/>
    </div>

    <div >
        <h3 className='mb-[0.25rem]'>{item.name}</h3>

        <section>
        <h3 className='mb-[0.5rem]'>Color: {item.color}</h3>
        <h3 className='mb-[0.5rem]'>Size: {item.size}</h3>
        <div className='flex gap-x-4 items-center'>
          
        {/* <Quantity/> */}
        <h3>₦{item.totalPrice}</h3>
       
        </div>
        </section>
    </div>
    </section>

    <div><BiXCircle size="25px"/></div>
   </section>
  )
}
