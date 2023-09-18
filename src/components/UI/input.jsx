import React from 'react'

export default function InputTag({label, placeholder, className, innerRef, type, classname}) {
  return (
    <div className="mt-2">
    <label className="block">{label}</label>

    <input
        placeholder={placeholder}
      className={`${classname} placeholder:text-sm  w-full py-3 pl-5 mt-2 rounded-lg border border-black`}
      ref={innerRef}
      type={type === "true" ? "password" : "text"}
    />
  </div>
  )
}




