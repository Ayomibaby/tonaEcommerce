import React, { useState } from "react";

//assets
import ProdSample from "../../../assets/images/shoeDesigns/male/male10.jpeg";

//components
import Quantity from "../../UI/quantity";

//redux
import { useDispatch } from "react-redux";
import { actions } from "../../../store/slices/cartSlice";
import { toast } from "react-toastify";

export default function ProductDetails({ product }) {
  const Dispatch = useDispatch();

  //states
  const [selectedColor, setColor] = useState(" ");
  const [selectedSize, setSize] = useState(" ");
  const [selectedQuantity, setSQuantity] = useState();

  //functions
  const quantitysetting = (quantity) => {
    setSQuantity(quantity);
  };

  const AddToCart = (e) => {
    e.preventDefault();
    const totalPrice = selectedQuantity * product.price;

    console.log(totalPrice);

    if(!selectedColor || selectedColor == " "){
    toast.error("Please select a color")
    }else if (!selectedSize || selectedSize == " "){
      toast.error("Please select a size")
    }else{
      const data = {
        name: product.name,
        image: product.img,
        price: product.price,
        color: selectedColor,
        size: selectedSize,
        quantity: selectedQuantity,
        totalPrice: totalPrice
      };
  
      Dispatch(actions.additem(data))
      toast.success("Item added to cart")
    }

  };

  return (
    <section className="flex gap-x-4 w-[90%] h-[100%] mx-auto">
      <section className="w-[100%]">
        <img className="w-[85%]" src={product.img} />
      </section>
      <section>
        <h2> {product.name}</h2>
        <h3> NGN {product.price}</h3>

        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pretium blandit nulla, eget vehicula tellus vestibulum a. Sed eu
          tempus dolor, ut gravida dolor. Curabitur dignissim vehicula metus eu
          dapibus.
        </h3>
        <form>
          <div className="my-[1rem]">
            <select
              className="border border-2  rounded-lg w-[20%] mr-[1rem] p-[0.5rem]"
              onChange={(e) => setColor(e?.target?.value)}
            >
              <option>Color</option>
              {product.color?.map((col) => (
                <option name="color" value={col}>
                  {col}
                </option>
              ))}
            </select>
            <select
              className="border border-2  rounded-lg w-[20%] mr-[1rem] p-[0.5rem]"
              onChange={(e) => setSize(e?.target?.value)}
            >
              <option>Sizes</option>
              {product.Sizes.map((col) => (
                <option name="size" value={col}>
                  {col}
                </option>
              ))}
            </select>
          </div>

          <Quantity setSQuantity={quantitysetting} />

          <button
            type="submit"
            onClick={AddToCart}
            className="mt-[1rem] bg-black rounded-lg py-4 w-[100%] text-white active:opacity-50 active:bg-black"
          >
            Add to cart
          </button>
        </form>
      </section>
    </section>
  );
}
