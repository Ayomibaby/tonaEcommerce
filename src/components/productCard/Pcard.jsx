import React, { useState } from 'react'

import {BiSolidCartAdd} from "react-icons/bi";
import Modal from '../modals/modal';
import ProductDetails from '../modals/ProductDetails/ProductDetails';


export default function Pcard({product}) {
  const [Details, setDetails] = useState(false) 

  return (
    <section className='w-[100%] ' onClick={()=>setDetails(true)}>
        <img className='w-[100%] h-[200px]' src={product.img}/>

        <div className='flex justify-between p-[1rem]  border rounded-b-[0.5rem]'>
            <div>
        <h3>{product.name} </h3>
        <h3 className='mt-[0.5rem]'>{product.price}</h3>
        </div>
        <BiSolidCartAdd size="30px"/>
        </div>
        {Details && (<Modal CloseModal={setDetails} message="hello"><ProductDetails product={product}></ProductDetails></Modal>)}
    </section>

  )
}
