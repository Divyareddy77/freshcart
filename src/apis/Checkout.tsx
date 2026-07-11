
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../contextapi/CartContext";
import Swal from "sweetalert2";
import QRCode from "react-qr-code";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";
import { sendOrderEmail } from "../services/EmailService";
import { getAddressFromLocation } from "./Locationapi";
import { OrderContext } from "../contextapi/OrderContext";

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
  const {addOrder}=useContext(OrderContext)

  const placeOrder = async () => {
    if (!name || !mobile || !address) {
      alert("Please fill all address details.");
      return;
    }
    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }

    Swal.fire({
  icon: "success",
  title: "✅ Order Placed!",
  text: `Your order has been placed successfully.\nOrder ID: ${12345}`,

  showConfirmButton: true,
  confirmButtonText: "Track Order",
  confirmButtonColor: "#2563eb",

  showCancelButton: true,
  cancelButtonText: "Close/Cancel",
  cancelButtonColor: "#ef4444",

  timer: 10000,
  timerProgressBar: true,
}).then((result) => {
  // If user clicks "Track Order"
  if (result.isConfirmed) {
    navigate("/orders");
  }

  // If timer completes automatically
  if (result.dismiss === Swal.DismissReason.timer) {
    navigate("/orders");
  }
});
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


    const orderData = {
      orderNumber: Math.floor(Math.random() * 100000),

      customerName: name,

      mobile: mobile,

      email: email,

      address: address,

      paymentMode: paymentMode,

      grandTotal: grandTotal,

      discount: discount,

      finalAmount: finalAmount,

      orderDate: new Date().toLocaleString(),

      status: "PLACED",

      items: [...cart],
    };

    addOrder(orderData);

    clearCart();

    //navigate("/orders");
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 px-6 py-10">
      <h1 className="text-5xl font-black text-center bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-12">
        Checkout
      </h1>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-8">

          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-green-100 p-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
    <FaMapMarkerAlt className="text-red-600"/>
</div> Delivery Address
            </h2>

            <div className="space-y-5">
              <div>
                <label className="text-gray-700 font-bold text-lg">Customer Name</label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl focus-within:border-green-500 transition duration-300 mt-2">
                  <FaUser className="mx-3 text-gray-500"/>
                  <input
                    className="w-full p-4 rounded-xl outline-none bg-transparent text-gray-700 placeholder:text-gray-400 "
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-bold text-lg">Mobile Number</label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl focus-within:border-green-500 transition duration-300 mt-2">
                  <FaPhone className="mx-3 text-gray-500"/>
                  <input
                    className="w-full p-4 rounded-xl outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-700 font-bold text-lg">Email</label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl focus-within:border-green-500 transition duration-300 mt-2">
                  <FaEnvelope className="mx-3 text-gray-500" />
                  <input
                    className="w-full p-4 rounded-xl outline-none bg-transparent text-gray-700 placeholder:text-gray-400
"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <button type="button"
                      onClick={getCurrentLocation}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:scale-105 transition-all duration-300 text-white px-5 py-3 rounded-lg flex items-center gap-2"
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

          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-green-100 p-8">
            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
            <div className="border rounded-2xl p-5 hover:border-green-500 cursor-pointer transition">
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
            </div>

            {paymentMode === "UPI" && (
              <div className="mt-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-8 text-center border border-green-200 ">
                <h4>Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                <div className="flex justify-center my-5">
                <QRCode
                  value={`upi://pay?pa=8779810053@ybl&pn=DivyaMart&am=${finalAmount.toFixed(2)}&cu=INR`}
                />
                </div>
                <p className="font-bold text-lg text-green-700 mt-3">UPI ID: 8779810053@ybl</p>
              </div>
            )}

            {paymentMode==="COD" && (
              <div className="mt-6 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl border border-green-300 p-5 rounded-xl">
                Cash will be collected during delivery.
              </div>
            )}
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-green-100 p-8 sticky top-5 p-6 h-fit sticky top-5">
          <h2 className="text-3xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between text-lg font-medium text-gray-700">
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

            <div className="flex justify-between text-4xl font-black text-green-600">
              <span>Payable</span>
              <span>₹{finalAmount.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="mt-8 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white 
            font-black text-xl py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex justify-center items-center gap-3">
            <FaCheckCircle/>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
  
