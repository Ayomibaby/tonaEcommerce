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
      <div data-aos="fade-up"   data-aos-easing="linear"  data-aos-duration="1000" >
        <h1 className=''>Bespoke Leather Brand</h1>
        <button className={Styles.shop} onClick={()=>(Navigate({pathname: "/shop"}))}>Shop Now</button>
        </div>
    </section>
  )
}
