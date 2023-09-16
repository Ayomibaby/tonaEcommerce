import React, {useEffect} from "react";
import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store/slices/cartSlice";

export default function Cart() {
  const Dispatch = useDispatch();

  const { cart, cartTotal } = useSelector((state) => state.Cart);

useEffect(() => {
  Dispatch(actions.sumupCart())

}, [cart])



  return (
    <>
      <section className="pb-[5rem]">
        {cart?.map((item) => (
        
          <CartItem item={item} />
        ))}
      </section>
      <section className="bg-white flex justify-between items-center border-t-[1px] absolute bottom-0 pb-6 left-0 p-4 w-[100%]">
        <button className="bg-[#000023] py-[0.75rem] text-white w-[50%] rounded-lg">
          Proceed to checkout
        </button>

        <h4>Total: NGN {cartTotal}</h4>
      </section>
    </>
  );
}
