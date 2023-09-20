import React, { useState } from 'react'

import {BiSolidCartAdd} from "react-icons/bi";
import Modal from '../modals/modal';
import ProductDetails from '../modals/ProductDetails/ProductDetails';
import { TruncateString } from '../../utils/truncateSTring';
import { formatNumber } from '../../utils/formatNumbers';


export default function Pcard({product}) {
  const [Details, setDetails] = useState(false) 

  return (
    <section className='w-[100%]  cursor-pointer ' onClick={()=>setDetails(true)}>
        <img className='w-[100%] md:h-[250px] h-[100px]' src={product.img}/>

        <div className='flex justify-between p-[1rem] h-[150px] border rounded-b-[0.5rem]'>
            <div>
        <h3>{TruncateString(product.name)} </h3>
        <h3 className='mt-[0.5rem]'>NGN {formatNumber(product.price, true, false)}</h3>
        </div>
        <BiSolidCartAdd size="30px"/>
        </div>
        {Details && (<Modal CloseModal={setDetails} message="hello"><ProductDetails product={product}></ProductDetails></Modal>)}
    </section>

  )
}
