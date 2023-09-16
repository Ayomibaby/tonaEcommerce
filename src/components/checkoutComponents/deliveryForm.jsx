import React from 'react'
import InputTag from '../UI/input'
import { Button } from 'antd'

export default function DeliveryForm() {
  return (
    <section className='w-[100%]'>
        <h4>Delivery Information</h4>

        <form>
            <div className=''>
                <InputTag label="First Name" placeholder="Enter your first name"/>
                <InputTag label="Last Name" placeholder="Enter your Last name"/>
            </div>
            <div className=''>
                
                <InputTag label="State" placeholder="Enter your State"/>
                <InputTag label="Street Address" placeholder="Enter your Street Address"/>
            </div>
            <div className=''>
               
                <InputTag label="Phone Number" placeholder="Enter your Phone Number"/>
                <InputTag label="Email" placeholder="Enter your Email"/>
            </div>

            {/* <div>
                <Button className='w-[100%] text-white bg-black rounded-lg my-4 '>Submit</Button>
            </div> */}
        </form>
    </section>
  )
}
