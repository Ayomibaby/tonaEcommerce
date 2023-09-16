import React from 'react'
import { useSelector } from 'react-redux';

export default function PriceSummary() {
  const { cart, cartTotal } = useSelector((state) => state.Cart);
  return (
   <section className='pt-2'>
    <h4>Price Summary</h4>

    <div>
       
        <div className='flex justify-between mt-2'><h3>Subtotal</h3> <h3>NGN {cartTotal}</h3></div>
        <div className='flex justify-between my-2'><h3>Delivery fee </h3> <h3>NGN 2,500</h3></div>
        <hr></hr>
        <div className='flex justify-between mt-2'><h3>Order Total </h3> <h3>NGN 12,500</h3></div>
       <div className='flex justify-end mt-4'><button className='bg-black py-1 w-[25%] rounded-lg  text-white'>Make Payment</button></div>
    </div>
   </section>
  )
}
