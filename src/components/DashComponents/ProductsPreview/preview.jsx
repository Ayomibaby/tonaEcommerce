import React from 'react'
import Pcard from '../../productCard/Pcard'

export default function Preview() {
  return (
    <>
    <section className='py-[3rem] w-[100%]'>
    <section className='w-[92%] mx-auto border-b-[1.5px] pb-[20px]'>
        <h2 className='text-black text-center'>OUR BESTSELLERS</h2>
    </section>
    <section className='px-16 grid grid-cols-5 gap-8  mt-[2rem] w-[100%]'>
      
        <Pcard/>
        <Pcard/>
        <Pcard/>
        <Pcard/>
        <Pcard/>
       
        
 
    </section>

    <section className='flex justify-center'>
      <button className='border border-1 border-black p-2 w-[10%] mt-[24px]'>View All</button>
    </section>
    </section>
    </>
  )
}
