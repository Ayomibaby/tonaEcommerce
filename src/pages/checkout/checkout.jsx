import React from "react";
import DeliveryForm from "../../components/checkoutComponents/deliveryForm";
import YourItems from "../../components/checkoutComponents/yourItems";
import PriceSummary from "../../components/checkoutComponents/priceSummary";

export default function Checkout() {
  return (
    <section className="py-[4rem] w-[95%] mx-auto">
      <h2 className="mb-[2rem] text-center">Checkout</h2>
      <section className="md:flex md:justify-between ">
        <section className="md:w-[48%] w-[90%] mx-auto md:mx-0">
          <DeliveryForm />
        </section>
        <section className="md:w-[48%] w-[90%] mx-auto mt-16 md:mt-0 md:mx-0">
          <YourItems />
          <section> <PriceSummary/> </section>
        </section>
      </section>
    </section>
  );
}
