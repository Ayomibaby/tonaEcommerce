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
    {cart?.map((item) => (
        
        <CartItem item={item} />
      ))}
     
    </section>
    </section>
  )
}
