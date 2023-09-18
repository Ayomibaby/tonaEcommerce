import React from 'react'
import Pcard from '../../productCard/Pcard'

import {Products} from "../../../Data/products"

export default function Preview() {
  const designType = (prod) =>{
    return (prod.bestSeller === true)
}

const MaleDesigns = Products?.filter(designType)
  return (
    <>
    <section className='py-[3rem] w-[100%]'>
    <section className='w-[92%] mx-auto border-b-[1.5px] pb-[20px]'>
        <h2 className='text-black text-center'>OUR BESTSELLERS</h2>
    </section>
    <section className='px-16 grid grid-cols-5 gap-8  mt-[2rem] w-[100%]'>
      
      {MaleDesigns.map((desg)=>
        (<Pcard product={desg}/>)
      )}
       
       
 
    </section>

  
    </section>
    </>
  )
}
