import React from "react";

import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

export default function Quantity() {
  return (
    <section>
      <div className="border border-1 rounded-[0.5rem] w-[80px] flex gap-x-3 p-2">
        <button>
          <BiMinus />
        </button>

        <h2 className="text-[16px]">1</h2>
        <button>
          <BiPlus  />
        </button>
      </div>
    </section>
  );
}
