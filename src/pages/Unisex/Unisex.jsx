import React from 'react'
import Pcard from '../../components/productCard/Pcard';
import {Products} from "../../Data/products"

export default function Unisex() {
    const designType = (prod) =>{
        return (prod.Stype === "uni")
    }

    const MaleDesigns = Products?.filter(designType)

  return (
    <section>
     <section className='px-[40px] my-[2rem]' >
        <h2 className='my-[2rem] text-center'>Unisex Designs</h2>   

        <section className='grid grid-cols-4 gap-8 mt-[20px]'
        >
            {MaleDesigns.map((male)=>(
                <Pcard product={male}/>
            ))}
            
        </section>  
    </section>
   </section>
  )
}
