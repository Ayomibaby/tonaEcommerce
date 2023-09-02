import React from 'react'
import CollectionCard from './collectionCard'

export default function Collection() {
  return (
    <section className='my-[40px]'>
    <section className='w-[95%] mx-auto border-b-[1.5px] pb-[20px]'>
        <h2 className='text-black text-center'>OUR CATEGORIES</h2>
    </section>

   <section className='flex'>

    <CollectionCard  category="ALL" path="/shop"/>
    <CollectionCard  category="MEN" path="/Men"/>
    <CollectionCard  category="WOMEN" path="/Female"/>
    <CollectionCard  category="UNISEX" path="/Unisex"/>
   
   </section>
   </section>
  )
}
