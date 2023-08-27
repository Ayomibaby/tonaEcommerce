import React from 'react'

import Product3 from "../../assets/images/IMG_1838.jpg"

import {BiSolidCartAdd} from "react-icons/bi";

export default function Pcard() {
  return (
    <section className='w-[20%] '>
        <img className='w-[100%] h-[200px]' src={Product3}/>

        <div className='flex justify-between p-[1rem]  border rounded-b-[0.5rem]'>
            <div>
        <h3>Kunle slides</h3>
        <h3 className='mt-[0.5rem]'>₦12,000</h3>
        </div>
        <BiSolidCartAdd size="30px"/>
        </div>
    </section>
  )
}
