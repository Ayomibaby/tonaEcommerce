import React from 'react'
import Pcard from '../../productCard/Pcard'

export default function Preview() {
  return (
    <>
    <section className='my-[10rem] px-16 flex gap-x-2'>
        <Pcard/>
        <Pcard/><Pcard/><Pcard/><Pcard/><Pcard/>
 
    </section>
    </>
  )
}
