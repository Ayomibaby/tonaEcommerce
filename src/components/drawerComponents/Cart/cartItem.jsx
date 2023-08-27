import React from 'react'

//assets
import prod2 from "../../../assets/images/IMG_1827.jpg"

//components
import Quantity from '../../UI/quantity'

//icons
import {BiXCircle} from "react-icons/bi";

export default function CartItem() {
  return (
   <section className='flex justify-between pb-2  border-b-[1px]'>
    <section className='flex gap-x-4' >
    <div id='productImage' className='w-[70px] '>
        <img src={prod2}/>
    </div>

    <div >
        <h3 className='mb-[0.25rem]'>Sola sandals</h3>

        <section>
        <h3 className='mb-[0.5rem]'>Color: blue</h3>
        <div className='flex gap-x-4 items-center'>
        <Quantity/>
        <h3>₦10,000</h3>
       
        </div>
        </section>
    </div>
    </section>

    <div><BiXCircle size="25px"/></div>
   </section>
  )
}
