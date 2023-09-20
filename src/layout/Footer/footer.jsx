import React from 'react'
import Styles from "./style.module.css"

export default function Footer() {
  return (<section className=' '>
    <section className=' w-[100%]  bg-[#000023]  p-[2rem] text-white md:flex md:justify-between'>
       
        <div><h1 className={`${Styles.Brand} sm:text-[16px] `}>TheTonaBrand</h1></div>
       
        <div><a>Facebook</a></div>
        <div><a>Twitter</a></div>
        <div><a>Instagram</a></div>
        <div><a>Whatsapp</a></div>
      
       
      
        

    </section>
    <section className='bg-black text-white py-[1rem] text-center'>
    Developed by Tolulope
  </section>
  </section>
  )
}
