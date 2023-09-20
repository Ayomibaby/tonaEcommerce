import React from 'react'
import CollectionCard from './collectionCard'
import fem from "../../../assets/images/shoeDesigns/female/fem7.jpeg"
import masc from "../../../assets/images/shoeDesigns/male/IMG_1838.jpg"
import all from "../../../assets/images/shoeDesigns/male/male10.jpeg"
import uni from "../../../assets/images/shoeDesigns/uni/uni3.jpeg"

export default function Collection() {
  return (
    <section className='my-[40px]'>
    <section className='w-[95%] mx-auto border-b-[1.5px] pb-[20px]'>
        <h2 className='text-black text-center'>OUR CATEGORIES</h2>
    </section>

   <section className='md:flex grid grid-cols-2'>

    <CollectionCard  category="ALL" path="/shop" image={all}/>
    <CollectionCard  category="MEN" path="/Men" image={masc}/>
    <CollectionCard  category="WOMEN" path="/Female" image={fem}/>
    <CollectionCard  category="UNISEX" path="/Unisex" image={uni}/>
   
   </section>
   </section>
  )
}
