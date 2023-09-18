import React from 'react'
import CartItem from '../drawerComponents/Cart/cartItem'
import { useSelector } from 'react-redux'

export default function YourItems() {
  const { cart, cartTotal } = useSelector((state) => state.Cart);

  const itemNum = cart.length
  return (
    <section className='w-[100%] '> 
    <div className='flex justify-between pb-2'>
     <h4>Your Cart</h4>
     <h4>{itemNum} item(s)</h4>
     </div>
    <section className='overflow-y-scroll h-[60vh] '>
      {itemNum < 1 && (<div className='text-center mt-5'>
        <p>No items found in cart </p>
        <a href='/' className='underline decoration-solid underline-offset-4 '>Start shopping</a>
      </div>)}
    {cart?.map((item) => (
        
        <CartItem item={item} />
      ))}
     
    </section>
    </section>
  )
}
