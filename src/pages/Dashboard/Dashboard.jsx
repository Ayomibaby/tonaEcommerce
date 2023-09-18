import React, {useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";
import Hero from "../../components/DashComponents/Hero/hero";
import BestSellers from "../../components/DashComponents/ProductsPreview/preview";
import Features from "../../components/DashComponents/features";
import Collection from "../../components/DashComponents/collection/collection";



export default function Dashboard() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      // setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
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
