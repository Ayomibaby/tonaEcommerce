import React from 'react'
import Pcard from '../../components/productCard/Pcard';
import {Products} from "../../Data/products"

export default function Men() {
    const designType = (prod) =>{
        return (prod.stype === "male")
    }

    const MaleDesigns = Products?.filter(designType)


  return (
   <section>
     <section className=' md:w-[90%] w-[98%] mx-auto my-[2rem]' >
        <h2 className='my-[2rem] text-center'>Male Designs</h2>   

        <section className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8  mt-[20px]'
        >
            {MaleDesigns.map((male)=>(
                <Pcard key={male.key} product={male}/>
            ))}
            
        </section>  
    </section>
   </section>
  )
}
