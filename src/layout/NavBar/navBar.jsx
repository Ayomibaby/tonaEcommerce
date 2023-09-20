import React, { useState, useEffect } from "react";
import Styles from "./styles.module.css";
import { useNavigate } from "react-router";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { Button, Drawer, Radio, Space } from "antd";
import Cart from "../../components/drawerComponents/Cart/cart";
import { actions } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";
import { Loguserout } from "../../store/slices/authSlice";

export default function NavBar() {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [user, setuser] = useState();

  const { cart, cartTotal } = useSelector((state) => state.Cart);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
    <section className={`${Styles.Nav} border-b-[1px]`}>
      <div>
        <h1
          className={Styles.Brand}
          onClick={() => Navigate({ pathname: "/" })}
        >
          TheTonaBrand
        </h1>
      </div>
      <section>
        <div><p>Menu</p></div>
      </section>
      <section className="hidden md:contents">
      <div>
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

      <div>
        <ul>
          {/* <li>
            <BiSearch size="30px" />
          </li> */}
          {user ? (
            <li onClick={userLogout}>Logout</li>
          ) : (
            <li onClick={() => Navigate({ pathname: "/signup" })}>
              <BiSolidUserCircle size="30px" />
            </li>
          )}
          <span className=" flex gap-x-1 items-center">
            <li onClick={showDrawer}>
              <BiCart size="30px" />
            </li>

            <li>{cartLength}</li>
          </span>
        </ul>
      </div>
      </section>
      
      <Drawer
        title={
          <div className="flex justify-between">
            <h3>Cart</h3> <h3 onClick={emptyCart}>Clear</h3>
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
    </section>
  );
}
