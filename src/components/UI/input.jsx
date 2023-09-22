import React, {useState, useEffect} from 'react'
import {AiFillEyeInvisible} from "react-icons/ai"
import {AiFillEye} from "react-icons/ai"

export default function InputTag({label, placeholder, className, innerRef, type, classname}) {
    //usestate
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState("password");
  
    //useeffect
    useEffect(() => {
      showPassword ? setInputType("text") : setInputType("password");
    }, [showPassword]);

  return (
    <div className="mt-2">
    <label className="block">{label}</label>

    <div className={`${classname} placeholder:text-sm  w-full mt-2 rounded-lg border border-black flex justify-between items-center`}>
    <input
        placeholder={placeholder}
      className='w-[90%]  bg-transparent outline outline-none py-3 pl-5'
      ref={innerRef}
      type={type === "true" ? inputType : "text"}
    />
    {type === "true" && 
   ( <div onClick={() => {
            setShowPassword((showPassword) => !showPassword);
          }}>
            {showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
    
    
    </div>)
    }
    </div>
  </div>
  )
}




