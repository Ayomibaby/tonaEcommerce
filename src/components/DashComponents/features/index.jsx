import React from 'react'

import {BiWorld} from "react-icons/bi";
import {MdAllInclusive} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";

export default function Index() {
  return (
  <section id='features' className='flex px-[2.5rem] py-[4rem]'>
    <section className='flex gap-x-24'>
    <div id='feature1' className='flex gap-x-4 items-center'>
        <div>
        <BiWorld size="60px"/>
        </div>
        <div>
            <h4>Worldwide Shipping</h4>
            <h3 className='mt-[0.5rem]'>We ship to all parts of the globe</h3>
        </div>

    </div>

    <div id='feature2' className='flex gap-x-4 items-center'>
    <div>
        <MdAllInclusive size="60px"/>
        </div>
        <div>
            <h4>Inclusive sizes</h4>
            <h3 className='mt-[0.5rem]'>All designs are available in every size</h3>
        </div>
    </div>

    <div id='feature3' className='flex gap-x-4 items-center'>
    <div>
        <BsTelephone size="60px"/>
        </div>
        <div>
            <h4>24/7 cutomer support</h4>
            <h3 className='mt-[0.5rem]'>You can reach us all day any day</h3>
        </div>
    </div>
    </section>
  </section>
  )
}
