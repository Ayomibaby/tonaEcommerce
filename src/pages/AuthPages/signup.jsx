import React, {useRef, useState} from 'react'
import InputTag from '../../components/UI/input'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CreateNewUser } from '../../store/slices/authSlice';

export default function Signup() {
    const mail = useRef();
    const password = useRef();

    const [isloading , setisLoading] = useState(false)

    const Dispatch = useDispatch();

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
       
       Dispatch(CreateNewUser(data))
    }
    
  return (
    <section className='my-[4rem] mx-auto w-[50%]  '> 
    <div >
        <h2 className='text-center'>Sign up</h2>

        <form onSubmit={NewUser}>
           
            <InputTag label="Email" placeholder="Enter email" innerRef={mail} type="false" />

            <InputTag label="Password" placeholder="Enter your password" innerRef={password} type="true" />

            <button type='submit' className='w-full bg-black text-white py-4 rounded my-3'> Signup</button>
        </form>

        <div>
          <p className='text-right'>Already have an account? <span>Login</span></p>
        </div>
        </div>
    </section>
  )
}
