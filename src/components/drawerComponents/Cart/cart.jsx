import React from 'react'
import CartItem from './cartItem'

export default function Cart() {
  return (
    <>
   <section>
    <CartItem/>
  
   </section>
   <section className='bg-white flex justify-between items-center border-t-[1px] absolute bottom-0 pb-6 left-0 p-4 w-[100%]'>
    <button className='bg-[#000023] py-[0.75rem] text-white w-[50%] rounded-lg'>Proceed to checkout</button>

    <h4>Total: ₦10,000 </h4>
   </section>
   </>
  )
}
