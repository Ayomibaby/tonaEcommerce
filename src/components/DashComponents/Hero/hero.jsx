import React, {useEffect} from 'react'
import Styles from "./styles.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router';

export default function Hero() {
  const Navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <section  className={Styles.main}>
      <div data-aos="fade-up"   data-aos-easing="ease-in"  data-aos-duration="800" >
        <h1 className='text-[2.5rem] md:text-[3.5rem]'>Bespoke Leather Brand</h1>
        <button className={`${Styles.shop} w-[70%] md:w-[20%] `} onClick={()=>(Navigate({pathname: "/shop"}))}>Shop Now</button>
        </div>
    </section>
  )
}
