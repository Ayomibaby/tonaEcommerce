import React, { useState } from "react";

import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

export default function Quantity({setSQuantity}) {
  const [amount, setamt] = useState(1)
  const increment = (e) =>{
    e.preventDefault();
  setamt((amount)=>amount + 1)
  
  }

  const decrement = (e) =>{
    e.preventDefault();
    if(amount < 2){
      setamt(1)
    }
    if(amount > 1) {
      setamt((amount)=> amount - 1)
    }
  }
  setSQuantity(amount);
  return (
    <section>
      <div className="border border-1 rounded-[0.5rem] w-[80px] flex gap-x-3 p-2">
        <button  onClick={decrement}>
          <BiMinus />
        </button>

        <h2 className="text-[16px]">{amount}</h2>
        <button onClick={increment}>
          <BiPlus  />
        </button>
      </div>
    </section>
  );
}
