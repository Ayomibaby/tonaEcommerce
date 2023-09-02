import React from "react";
import prod from "../../../assets/images/shoeDesigns/male/IMG_1838.jpg";
import { useNavigate } from "react-router";

export default function CollectionCard({ category, path }) {
  const Navigate = useNavigate();
  return (
    <section className="p-[40px] w-[25%]">
      <div>
        <img className="h-[250px] w-[100%]" src={prod} />
      </div>

      <div>
        <h3
          className="text-center mt-[20px] border p-[2px] border-black "
          onClick={() => {
            Navigate({ pathname: path });
          }}
        >
          {category}
        </h3>
      </div>
    </section>
  );
}
