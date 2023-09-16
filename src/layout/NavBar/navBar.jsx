import React,{useState} from 'react'
import Styles from "./styles.module.css"
import { useNavigate } from 'react-router';
import { BiSolidUserCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { Button, Drawer, Radio, Space } from 'antd';
import Cart from '../../components/drawerComponents/Cart/cart';
import { actions } from '../../store/slices/cartSlice';

export default function NavBar() {
  const Navigate = useNavigate();
  const Dispatch = useNavigate();

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };

      //clear cart
      const emptyCart = () =>{
      
        Dispatch(actions.clearCart());
      }

  return (
    <section className={`${Styles.Nav} border-b-[1px]`}>
        <div><h1 className={Styles.Brand} onClick={()=>(Navigate({pathname:"/"}))}>TheTonaBrand</h1></div>
        
        <div>
            <ul>
                <li><a href='/Men'>MEN</a></li>
                <li><a href='/Female'>WOMEN</a></li>
                <li><a href='/Unisex'>UNISEX</a></li>
                <li><a >CONTACT</a></li>
            </ul>
        </div>

        <div>
            <ul>
                <li><BiSearch size="30px" /></li>
                <li><BiSolidUserCircle size="30px" /></li>
                <li onClick={showDrawer}><BiCart size="30px" /></li>
            </ul>
        </div>
        <Drawer
        title={<div className='flex justify-between'><h3>Cart</h3> <h3 onClick={emptyCart}>Clear</h3></div>}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
       <Cart/>
      </Drawer>
    </section>
  )
}
