import React, {useRef, useState} from 'react'
import { useDispatch } from 'react-redux';
import { logUserIn } from '../../store/slices/authSlice';
import InputTag from '../../components/UI/input';
import { toast } from 'react-toastify';
import Cliploader from "react-spinners/ClipLoader"
import { useNavigate } from 'react-router';

export default function Login() {
  const mail = useRef();
  const password = useRef();

  const [isloading , setisLoading] = useState(false)

  const Dispatch = useDispatch()
  const Navigate = useNavigate()

  const loginuser = (e) =>{
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
       
       Dispatch(logUserIn(data)).then(({payload, error})=>{
        if(payload){
          setisLoading(false)
          toast.success("Logged in successfully");
          Navigate({pathname:"/"})
        }
        if(error){
          if(error.message == "Firebase: Error (auth/invalid-login-credentials)."){
            toast.error("Invalid username or password")
            setisLoading(false)
          }
        
        }
       })
    }

    const toSignUp = () =>{
      Navigate({pathname:"/signup"})
    }

  return (
    <section className='my-[4rem] mx-auto md:w-[50%] w-[80%]  '> 
    <div >
        <h2 className='text-center'>Login</h2>

        <form onSubmit={loginuser}>
           
            <InputTag label="Email" placeholder="Enter email" innerRef={mail} type="false" />

            <InputTag label="Password" placeholder="Enter your password" innerRef={password} type="true" />

            <button type='submit' className='w-full bg-black text-white py-4 rounded my-3'>{isloading ? (<Cliploader size={12} color='white'/> ) : "Login" } </button>
        </form>

        <div>
          <p className='text-right'>Don't have an account? <span onClick={toSignUp}>Sign Up</span></p>
        </div>
        </div>
    </section>
  )
}
