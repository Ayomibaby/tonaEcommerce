import React from "react";
import { useNavigate } from "react-router";

export default function Index({ close }) {
  const Navigate = useNavigate();
  return (
    <section className="bg-[#FAF9F6] ">
      <p
        className="my-[1.5rem]"
        onClick={() => {
          Navigate("/");
          close();
        }}
      >
        {" "}
        HOME
      </p>
      <hr></hr>
      <p
        className="my-[1.5rem]"
        onClick={() => {
          Navigate("/Shop");
          close();
        }}
      >
        {" "}
        All
      </p>
      <hr></hr>
      <p
        className="my-[1.5rem]"
        onClick={() => {
          Navigate("/Men");
          close();
        }}
      >
        {" "}
        MEN
      </p>
      <hr></hr>
      <p
        className="my-[1.5rem]"
        onClick={() => {
          Navigate("/Female");
          close();
        }}
      >
        {" "}
        WOMEN
      </p>
      <hr />
      <p
        className="my-[1.5rem]"
        onClick={() => {
          Navigate("/Unisex");
          close();
        }}
      >
        {" "}
        UNISEX
      </p>
      <hr />
      <p
        className="my-[1.5rem]"
        onClick={() => {
          Navigate("/signup");
          close();
        }}
      >
        {" "}
        SIGNUP
      </p>
      <hr />
      <p
        className="my-[1.5rem]"
        onClick={() => {
          Navigate("/login");
          close();
        }}
      >
        {" "}
        LOGIN
      </p>
      <hr />
    </section>
  );
}
