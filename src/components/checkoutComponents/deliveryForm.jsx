import React, {useState} from 'react'
import InputTag from '../UI/input'
import NaijaStates from 'naija-state-local-government';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/slices/cartSlice';


export default function DeliveryForm() {
    const [states, setstates] = useState(NaijaStates.states());

    const [selectedState, setSelected ] = useState()

    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setSelected(e.target.value)
        const state = e.target.value
       
        dispatch(actions.deliveryDetails(state))
    }
   
    
  return (
    <section className='w-[100%]'>
        <h4>Delivery Information</h4>

        <form>
            <div className=''>
                <InputTag label="First Name" placeholder="Enter your first name"/>
                <InputTag label="Last Name" placeholder="Enter your Last name"/>
            </div>
            <div className=''>
              
                <label className='mt-4'>State</label>
                <select className='w-full py-3 pl-5 mt-2 rounded-lg border border-black ' value={selectedState} onChange={handleChange}>
                    <option>Select a state</option>
                    {states.map((state)=>(<option key={state} value={state}>{state}</option>))}
                </select>
                <InputTag label="Street Address" placeholder="Enter your Street Address"/>
            </div>
            <div className=''>
               
                <InputTag label="Phone Number" placeholder="Enter your Phone Number"/>
                <InputTag label="Email" placeholder="Enter your Email"/>
            </div>
                {/* <button>Save Details </button> */}
        </form>
    </section>
  )
}
