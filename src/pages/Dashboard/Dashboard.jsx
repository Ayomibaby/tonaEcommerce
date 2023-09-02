import React from "react";
import Hero from "../../components/DashComponents/Hero/hero";
import BestSellers from "../../components/DashComponents/ProductsPreview/preview";
import Features from "../../components/DashComponents/features";
import Collection from "../../components/DashComponents/collection/collection";
import Modal from "../../components/modals/modal";
import ProductDetails from "../../components/modals/ProductDetails/ProductDetails";

export default function dashboard() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <Collection />
      </section>

      <section>
        <Features />
      </section>

      <section>
        <BestSellers />
      </section>

      
    </>
  );
}
