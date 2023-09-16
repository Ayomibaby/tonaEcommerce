import React from "react";
import DeliveryForm from "../../components/checkoutComponents/deliveryForm";
import YourItems from "../../components/checkoutComponents/yourItems";
import PriceSummary from "../../components/checkoutComponents/priceSummary";

export default function Checkout() {
  return (
    <section className="py-[4rem] w-[95%] mx-auto">
      <h2 className="mb-[2rem] text-center">Checkout</h2>
      <section className="flex justify-between">
        <section className="w-[48%]">
          <DeliveryForm />
        </section>
        <section className="w-[48%]">
          <YourItems />
          <section> <PriceSummary/> </section>
        </section>
      </section>
    </section>
  );
}
