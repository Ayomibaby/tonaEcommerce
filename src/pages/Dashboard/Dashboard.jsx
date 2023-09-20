import React, {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";
import Hero from "../../components/DashComponents/Hero/hero";
import BestSellers from "../../components/DashComponents/ProductsPreview/preview";
import Features from "../../components/DashComponents/features";
import Collection from "../../components/DashComponents/collection/collection";



export default function Dashboard() {
 
  return (
    <>
    <section className=" bg-[#FAF9F6]   ">
      <section  className="max-w-[1600px] w-[100%] mx-auto">
        <Hero />
      </section>

      <section  className="w-[100%] mx-auto max-w-[1600px]">
        <Collection />
      </section>

      <section className="w-[100%] mx-auto max-w-[1600px]">
        <Features />
      </section>

      <section className="w-[100%] mx-auto  max-w-[1600px]">
        <BestSellers />
      </section>

      </section>
    </>
  );
}
