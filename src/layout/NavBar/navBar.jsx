import React, { useState, useEffect } from "react";
import Styles from "./styles.module.css";
import { useNavigate } from "react-router";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import {BiXCircle} from "react-icons/bi";
import {BiArrowBack} from "react-icons/bi"
import { Button, Drawer, Radio, Space } from "antd";
import Cart from "../../components/drawerComponents/Cart/cart";
import { actions } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";
import { Loguserout } from "../../store/slices/authSlice";
import {RxHamburgerMenu} from "react-icons/rx"
import Index from "../../components/drawerComponents/mobileNavMenu";

export default function NavBar() {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [openMenu, setMenu] = useState(false)
  const [placement, setPlacement] = useState("right");
  const [menuPlacement, setmenuplace] = useState("left")
  const [user, setuser] = useState();

  const { cart, cartTotal } = useSelector((state) => state.Cart);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showMenu = () =>{
    setMenu(true)
  }

  const closeMenu = () =>{
    setMenu(false)
  }

  //clear cart
  const emptyCart = () => {
    Dispatch(actions.clearCart());
  };

  const cartLength = cart.length;

  // //check login status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        // User is signed in.
        setuser(currentuser);
      } else {
        // User is signed out.
        setuser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userLogout = () => {
    Dispatch(Loguserout());
  };

  return (
    <section className={`${Styles.Nav} border-b-[1px] `}>
      <section className="w-[90%] mx-auto flex justify-between items-center">

      <section className="md:hidden">
        <div onClick={showMenu}><RxHamburgerMenu/></div>
      </section>

      <div>
        <h1
          className={`${Styles.Brand} `}
          onClick={() => Navigate({ pathname: "/" })}
        >
          TheTonaBrand
        </h1>
      </div>
     
      
      <div className="md:contents hidden">
        <ul>
          <li>
            <a href="/Men">MEN</a>
          </li>
          <li>
            <a href="/Female">WOMEN</a>
          </li>
          <li>
            <a href="/Unisex">UNISEX</a>
          </li>
          {/* <li>
            <a>CONTACT</a>
          </li> */}
        </ul>
      </div>

      <div >
        <ul>
         <div className="md:contents hidden">
          {user ? (
            <li onClick={userLogout}>Logout</li>
          ) : (
            <li onClick={() => Navigate({ pathname: "/signup" })}>
              <BiSolidUserCircle size="30px" />
            </li>
          )}
          </div>

          <div className=" flex gap-x-1 items-center">
            <li onClick={showDrawer}>
              <BiCart size="30px" />
            </li>

            <li>{cartLength}</li>
          </div>
          </ul>
      </div>
      
      </section>
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <div className="cursor-pointer" onClick={onClose}><BiArrowBack/></div>
            <h3>Cart</h3> <h3 onClick={emptyCart} className="cursor-pointer">Clear</h3>
          </div>
        }
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Cart close={onClose} />
      </Drawer>
      <Drawer
        title={<div className="flex justify-between"><p>MENU</p>  <div ><BiXCircle size="25px" onClick={closeMenu}/></div> </div>}
        placement={menuPlacement}
        closable={false}
        onClose={closeMenu}
        open={openMenu}
        key={menuPlacement}
        
      >
        <Index close={closeMenu}/>
      </Drawer>
    </section>
  );
}
