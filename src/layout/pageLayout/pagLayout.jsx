import React from "react";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";

export default function PagLayout({ children }) {
  return (
    <section>
      <div className="">
        <NavBar></NavBar>
      </div>
      <section >{children}</section>
      <Footer></Footer>
    </section>
  );
}
