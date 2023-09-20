import React from "react";
import prod from "../../../assets/images/shoeDesigns/male/IMG_1838.jpg";
import { useNavigate } from "react-router";

export default function CollectionCard({ category, path, image }) {
  const Navigate = useNavigate();
  return (
    <section className="md:p-[40px] p-[20px] md:w-[25%] w-[100%]">
      <div>
        <img className="h-[250px] w-[100%]" src={image} />
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
