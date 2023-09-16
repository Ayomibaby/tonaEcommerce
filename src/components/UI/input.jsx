import React from 'react'

export default function InputTag({label, placeholder, className}) {
  return (
    <div className="mt-2">
    <label className="block">{label}</label>

    <input
        placeholder={placeholder}
      className={`${className} placeholder:text-sm  w-full py-3 pl-5 mt-2 rounded-lg border border-black`}
      
    
    />
  </div>
  )
}




