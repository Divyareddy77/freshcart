
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../contextapi/CartContext";
import QRCode from "react-qr-code";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import { sendOrderEmail } from "../services/EmailService";
import { getAddressFromLocation } from "./Locationapi";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    grandTotal = 0,
    discount = 0,
    finalAmount = 0,
    couponPercent = 0,
  } = location.state;

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [email,setEmail] = useState("")

  const placeOrder = async () => {
    if (!name || !mobile || !address) {
      alert("Please fill all address details.");
      return;
    }
    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }

    alert("Order Placed Successfully!");
     const order = {
      order_id: Math.floor(Math.random() * 100000),
      name: name,
      email: email, // Recipient email
	  
      orders: cart.map((item) => ({
        name: item.name,
        units: item.quantity,
        price: item.price,
        image_url: item.imageurl,
      })),

      cost: {
        shipping: 100,
        tax: 100,
        coupon: discount,
        total: finalAmount,
      },
    };
    
    await sendOrderEmail(order);


    clearCart();
    navigate("/cart");
  };
 const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {
        const data = await getAddressFromLocation(lat, lng);

        setAddress(data.display_name);
      } catch (error) {
        alert("Unable to fetch address.");
      }
    },
    (error) => {
      alert(error.message);
    }
  );
};



  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Checkout
      </h1>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-8">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <FaMapMarkerAlt className="text-red-600"/> Delivery Address
            </h2>

            <div className="space-y-5">
              <div>
                <label className="font-semibold">Customer Name</label>
                <div className="flex items-center border rounded-lg mt-2">
                  <FaUser className="mx-3 text-gray-500"/>
                  <input
                    className="w-full p-3 outline-none"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold">Mobile Number</label>
                <div className="flex items-center border rounded-lg mt-2">
                  <FaPhone className="mx-3 text-gray-500"/>
                  <input
                    className="w-full p-3 outline-none"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold">Email</label>
                <div className="flex items-center border rounded-lg mt-2">
                  <FaPhone className="mx-3 text-gray-500"/>
                  <input
                    className="w-full p-3 outline-none"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <button
    type="button"
    onClick={getCurrentLocation}
    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
  >
    <FaMapMarkerAlt />
    Use Current Location
  </button>
    
              <div>
                <label className="font-semibold">Address</label>
                <textarea
                  rows={4}
                  className="border rounded-lg w-full mt-2 p-3 outline-none"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

            <label className="flex items-center gap-3 mb-4">
              <input
                type="radio"
                value="UPI"
                checked={paymentMode==="UPI"}
                onChange={(e)=>setPaymentMode(e.target.value)}
              />
              <FaQrcode className="text-blue-600"/> UPI Payment
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="COD"
                checked={paymentMode==="COD"}
                onChange={(e)=>setPaymentMode(e.target.value)}
              />
              <FaTruck className="text-green-600"/> Cash On Delivery
            </label>

            {paymentMode === "UPI" && (
              <div className="qr-section">
                <h4>Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                <QRCode
                  value={`upi://pay?pa=9390591458@ybl&pn=ArunMart&am=${finalAmount.toFixed(2)}&cu=INR`}
                />
                <p>UPI ID: 9390591458@ybl</p>
              </div>
            )}

            {paymentMode==="COD" && (
              <div className="mt-6 bg-green-100 p-5 rounded-xl">
                Cash will be collected during delivery.
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-5">
          <h2 className="text-3xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FaMoneyBillWave className="text-green-600"/>
                Grand Total
              </span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Coupon ({couponPercent}%)</span>
              <span className="text-red-600">
                -₹{discount.toFixed(2)}
              </span>
            </div>

            <hr/>

            <div className="flex justify-between text-2xl font-bold text-green-700">
              <span>Payable</span>
              <span>₹{finalAmount.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl flex justify-center items-center gap-2"
          >
            <FaCheckCircle/>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
  
