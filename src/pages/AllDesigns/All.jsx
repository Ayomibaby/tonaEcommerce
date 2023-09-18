import React, {useState} from 'react'
import Pcard from '../../components/productCard/Pcard';
import {Products} from "../../Data/products"

export default function All() {








  return (
    <section className='px-[40px] my-[2rem]' >
      
        <h2 className='my-[2rem] text-center'>All Designs</h2>   
       
    

        <section className='grid grid-cols-4 gap-8 mt-[20px]'
        >
            {Products.map((prod)=>(
                <Pcard product={prod} key={prod.key}/>
            ))}
            
        </section>  
    </section>
  )
}
