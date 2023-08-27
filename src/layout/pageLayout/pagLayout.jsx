import React from 'react'
import NavBar from '../NavBar/navBar'
import Footer from '../Footer/footer'

export default function PagLayout({children}) {
  return (
    <section>
        <NavBar></NavBar>
        <section>{children}</section>
        <Footer></Footer>
        <section className='bg-black text-white py-[1rem] text-center'>
          Developed by Tolulope
        </section>
    </section>
  )
}
