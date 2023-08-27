import React,{useState} from 'react'
import Styles from "./styles.module.css"
import { BiSolidUserCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { Button, Drawer, Radio, Space } from 'antd';
import Cart from '../../components/drawerComponents/Cart/cart';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };

  return (
    <section className={`${Styles.Nav} border-b-[1px]`}>
        <div><h1 className={Styles.Brand}>TheTonaBrand</h1></div>
        
        <div>
            <ul>
                <li><a>MEN</a></li>
                <li><a>WOMEN</a></li>
                <li><a>UNISEX</a></li>
                <li><a>CONTACT</a></li>
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
        title="Cart"
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
