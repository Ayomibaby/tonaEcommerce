import React, {useRef, useState} from 'react'
import InputTag from '../../components/UI/input'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CreateNewUser } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router';
import Cliploader from "react-spinners/ClipLoader"

export default function Signup() {
    const mail = useRef();
    const password = useRef();

    const [isloading , setisLoading] = useState(false)
    const [charno, setchar] = useState(false)

    const Dispatch = useDispatch();
    const Navigate = useNavigate();

    

    const NewUser = (e) =>{
    e.preventDefault();
      
      setisLoading(true)
       const EmailAddress = mail.current?.value;
       const userPassword = password.current?.value;

       const data = {
        mail : EmailAddress,
        password: userPassword
       }

       if(!EmailAddress){
        toast.error("please enter your email")
        setisLoading(false)
       }
       if(!userPassword ){
        toast.error("please enter your password")
        setisLoading(false)
       }
       if(userPassword.length < 6){
        toast.error("Password has to be longer than 6 characters")
        setisLoading(false)
       }
       
       Dispatch(CreateNewUser(data)).then(({payload, error})=>{
        if(payload){
          toast.success("Account created successfully");
          setisLoading(false)
          Navigate({pathname:"/"})
        }
        
        if(error){
        if(error.code == "auth/invalid-email"){
          toast.error("Please enter a valid email")
          setisLoading(false)
        }else{
          toast.error(error.message);
          setisLoading(false)
        }
      }

       })
    }
    
    const toLogin = () =>{
      Navigate({pathname:"/login"})
    }
    
  return (
    <section className='my-[6rem] mx-auto md:w-[50%] w-[80%] '> 
    <div >
        <h2 className='text-center'>Sign up</h2>

        <form onSubmit={NewUser}>
           
            <InputTag label="Email" placeholder="Enter email" innerRef={mail} type="false" />

            <InputTag label="Password" placeholder="Enter your password" innerRef={password} type="true"  />
            <p className='pt-2'>-Minimum of 6 characters</p>

            <button type='submit' className='w-full bg-black text-white py-4 rounded my-3'> Signup</button>
        </form>

        <div>
          <p className='text-right' onClick={toLogin}>Already have an account? <span  >Login</span></p>
        </div>
        </div>
    </section>
  )
}
