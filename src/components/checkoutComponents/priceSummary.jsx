import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";
import { formatNumber } from "../../utils/formatNumbers";
import { actions } from "../../store/slices/cartSlice";

export default function PriceSummary() {
  const Navigate = useNavigate();

  const Dispatch = useDispatch()

  const { cart, cartTotal, deliveryCost } = useSelector((state) => state.Cart);



  let totalOrder = cartTotal + deliveryCost;

  const Apikey = process.env.REACT_APP_FLUTTERKEY;

  const [loading, setLoading] = useState(false)

  const config = {
    public_key: Apikey,
    tx_ref: Date.now(),
    amount: totalOrder,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "Tona Brand",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const finalizeWalletProcess = (response) => {
    Dispatch(actions.clearCart())
    setLoading(false)
    Navigate({ pathname: "/" })
    toast.success("payment made successfully");
    
  };
  const handleFlutterPayment = useFlutterwave(config);

  return (
    <section className="pt-2">
      <h4>Price Summary</h4>

      <div>
        <div className="flex justify-between mt-2">
          <h3>Subtotal</h3> <h3>NGN {formatNumber(cartTotal)}</h3>
        </div>
        <div className="flex justify-between my-2">
          <h3>Delivery fee </h3> <h3>NGN {formatNumber(deliveryCost)}</h3>
        </div>
        <hr></hr>
        <div className="flex justify-between mt-2">
          <h3>Order Total </h3> <h3>NGN {formatNumber(totalOrder)}</h3>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-black py-1 md:w-[25%] w-[100%] rounded-lg  text-white disabled:bg-[#cccccc] disabled:cursor-not-allowed"
            onClick={() => {
              setLoading(true)
              handleFlutterPayment({
                callback: (response) => {
                  // setAcc(response)
                  localStorage.setItem("flutter", JSON.stringify(response));
                  // finalizeWalletProcess(response?.tx_ref, response?.amount);
                  finalizeWalletProcess(response);
                  closePaymentModal(); // this will close the modal programmatically
                },
                onClose: () => {
                  setLoading(false)
                  Navigate({ pathname: "/" })
                },
              });
            }}
            disabled={loading || !deliveryCost || !cartTotal ? true : false }
          >
            {loading ? (<ClipLoader color="white" size={12}/>) : "Make Payment"}
            
          </button>
        </div>
      </div>
    </section>
  );
}
