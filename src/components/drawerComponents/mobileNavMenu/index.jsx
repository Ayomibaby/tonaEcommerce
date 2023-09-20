import React from 'react'

export default function Index() {
  return (
    <section className='bg-[#FAF9F6] '>
         {/* <ul>
          <li>
            <a href="/Men">MEN</a>
          </li>
          <li>
            <a href="/Female">WOMEN</a>
          </li>
          <li>
            <a href="/Unisex">UNISEX</a>
          </li>
         
        </ul> */}
       
        <p className='mb-[1.5rem]'> <a href="/Men">MEN</a></p>
        <hr></hr>
        <p className='my-[1.5rem]'> <a href="/Female">WOMEN</a></p>
        <hr/>
        <p className='my-[1.5rem]'> <a href="/Unisex">UNISEX</a></p>
        <hr/>
        <p className='my-[1.5rem]'> <a href="/signup">SIGNUP</a></p>
        <hr/>
        <p className='my-[1.5rem]'> <a href="/login">LOGIN</a></p>
        <hr/>
    </section>
  )
}
