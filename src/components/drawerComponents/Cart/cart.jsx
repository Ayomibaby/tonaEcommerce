import React, {useEffect} from "react";
import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store/slices/cartSlice";
import { useNavigate } from "react-router";
import { formatNumber } from "../../../utils/formatNumbers";

export default function Cart({close}) {
  const Dispatch = useDispatch();

  const navigate = useNavigate();
  const { cart, cartTotal } = useSelector((state) => state.Cart);

useEffect(() => {
  Dispatch(actions.sumupCart())

}, [cart])

const NavigateToCheckout = () =>{
  close()
  navigate({pathname:"/checkout"})
}

const lengthofCart = cart.length

  return (
    <>
      <section className="pb-[5rem]">
        {lengthofCart < 1 && (<p className="text-center">Your cart is currently empty</p>)}
        {cart?.map((item) => (
        
          <CartItem key={item.name} item={item} />
        ))}
      </section>
      <section className="bg-white flex justify-between items-center border-t-[1px] absolute bottom-0 pb-6 left-0 p-4 w-[100%]">
      <h3 >Total: NGN {formatNumber(cartTotal, true, false)}</h3>
        <button className="bg-[#000023] py-[0.75rem] text-white w-[50%] rounded-lg disabled:bg-[#cccccc] disabled:cursor-not-allowed" onClick={NavigateToCheckout} disabled={lengthofCart < 1 ? true : false}>
          Proceed to checkout
        </button>

        
      </section>
    </>
  );
}
