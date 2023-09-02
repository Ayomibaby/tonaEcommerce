import React from "react";

import ProdSample from "../../../assets/images/shoeDesigns/male/male10.jpeg";
import Quantity from "../../UI/quantity";

export default function ProductDetails() {
  return (
    <section className="flex gap-x-4 w-[90%] h-[100%] mx-auto">
      <section className="w-[100%]">
        <img className="w-[85%]" src={ProdSample} />
      </section>
      <section>
        <h2>Basket weave slippers</h2>
        <h3>NGN 15,000</h3>

        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pretium blandit nulla, eget vehicula tellus vestibulum a. Sed eu
          tempus dolor, ut gravida dolor. Curabitur dignissim vehicula metus eu
          dapibus.{" "}
        </h3>

        <div className="my-[1rem]">
          <select className="border border-2  rounded-lg w-[20%] mr-[1rem] p-[0.5rem]">
            <option>Color</option>
          </select>
          <select className="border border-2  rounded-lg w-[20%] mr-[1rem] p-[0.5rem]">
            <option>Sizes</option>
          </select>
        </div>

        <Quantity />

        <button className="mt-[1rem] bg-black rounded-lg py-4 w-[100%] text-white">Add to cart</button>
      </section>
    </section>
  );
}
