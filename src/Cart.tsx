import { useContext, useRef, useState } from "react";
import {
  FaShoppingCart,
  FaTicketAlt,
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./contextapi/CartContext";
import { coupons } from "./data/coupons";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const couponRef = useRef<HTMLInputElement>(null);

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [couponPercent, setCouponPercent] = useState(0);
  const [message, setMessage] = useState("");

  const applyCoupon = () => {
    const couponCode = couponRef.current?.value.trim() || "";

    const coupon = coupons.find(
      (c) => c.code.toUpperCase() === couponCode.toUpperCase()
    );

    if (coupon) {
      setCouponPercent(coupon.discount);
      setMessage(`🎉 Coupon Applied (${coupon.discount}% OFF)`);
    } else {
      setCouponPercent(0);
      setMessage("❌ Invalid Coupon Code");
    }
  };

  const discount = (grandTotal * couponPercent) / 100;
  const finalAmount = grandTotal - discount;

  let navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-8 py-10">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-5xl font-black text-center mb-14 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
  🛒 My Cart ({cart.length} items)
</h1>
        

        {cart.length === 0 ? (
          <div className="flex items-center justify-center min-h-[70vh]">
  <div className="bg-gradient-to-br
from-white
to-emerald-50 p-16 rounded-3xl shadow-sm text-center max-w-md w-full border border-gray-100 shadow-xl
rounded-[30px]">
    <h2 className="text-2xl text-gray-700 font-bold mb-2">
      Your Cart is Empty 😔
    </h2>
    <p className="text-gray-500">Add items to get started!</p>
  </div>
</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT SIDE: PRODUCT CARDS */}
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="
group
bg-white
rounded-[30px]
border
border-gray-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-1
transition-all
duration-300
px-8
py-8
flex
flex-col
sm:flex-row
items-center
justify-between
gap-8
"
                >
                  {/* Image */}
                  <div className="
w-32
h-32
bg-gradient-to-br
from-gray-50
to-white
rounded-3xl
border
border-gray-100
flex
items-center
justify-center
shadow-sm
">
                    <img
                      src={item.imageurl}
                      alt={item.description}
                      className="
max-w-full
max-h-full
object-contain
group-hover:scale-110
transition
duration-300
"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <h2 className="
text-2xl
font-black
text-gray-900
tracking-tight
">
                      {item.description}
                    </h2>
                    <p className="text-gray-400 text-sm font-semibold">
                      Base Price: ₹{item.price}
                    </p>
                    <p className="text-gray-900 font-bold text-lg mt-2 sm:hidden">
                      Total: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* Counter */}
                  <div className="flex flex-row sm:flex-col items-center gap-6 sm:gap-5 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-none pt-4 sm:pt-0">
                    <div className="flex items-center justify-between bg-gradient-to-r
from-emerald-100
to-green-50 border border-emerald-200 rounded-2xl h-11 w-32 px-4 shadow-sm">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="text-emerald-700 hover:text-emerald-900 p-1.5 transition"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="text-emerald-900 font-extrabold text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="text-emerald-700 hover:text-emerald-900 p-1.5 transition"
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="
bg-red-50
hover:bg-red-500
hover:text-white
text-red-600
px-4
py-2
rounded-xl
transition-all
duration-300
font-bold
flex
items-center
gap-2
"
                    >
                      <FaTrash size={12} />
                      <span>Remove</span>
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="hidden sm:block text-right min-w-[140px]">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Subtotal</p>
                    <p className="text-gray-900 font-black text-2xl mt-1">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* RIGHT SIDE: FIXED AMAZON/BLINKIT STYLE BILL DETAILS SUMMARY */}
            <div className="lg:col-span-4 xl:col-span-3 sticky top-8 bg-white/95
backdrop-blur-md rounded-[32px] border border-gray-100 shadow-lg p-8 min-w-[360px] min-h-[560px] flex flex-col justify-between">
              
              {/* Top Wrapper to handle separation cleanly */}
              <div className="flex flex-col flex-1 justify-start">
                
                {/* Header Container with margin protection */}
                <div className="mb-5">
                  <h2 className="text-xl font-black text-gray-900 flex items-center gap-2.5">
                    <FaShoppingCart className="text-emerald-600 text-xl" />
                    Bill Summary
                  </h2>
                  <p className="text-xs text-gray-400 mt-1 font-medium">Items details and promo summaries</p>
                </div>

                {/* Promo Input Box - isolated with a distinct light slate container */}
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl mb-8">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-500 block mb-2">Have a promo code?</label>
                  <div className="flex bg-white border border-gray-200 rounded-xl p-1 items-center focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition">
                    <input
                      ref={couponRef}
                      type="text"
                      placeholder="ENTER CODE"
                      className="flex-1 min-w-0 bg-transparent px-3 py-2 text-xs uppercase font-bold tracking-widest outline-none text-gray-800"
                    />
                    <button
                      onClick={applyCoupon}
                      className="bg-gradient-to-r
from-green-500
to-emerald-600
hover:from-green-600
hover:to-emerald-700 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2 rounded-lg shadow-sm transition flex-shrink-0"
                    >
                      Apply
                    </button>
                  </div>
                  {message && (
                    <p className={`text-xs font-semibold mt-2 px-1 ${discount > 0 ? "text-emerald-600" : "text-red-500"}`}>
                      {message}
                    </p>
                  )}
                </div>

                {/* Calculations Layout - Using flex wrappers with explicit row gap overrides */}
                <div className="flex flex-col gap-5 justify-center flex-1 py-4 border-t border-b border-gray-100 border-dashed">
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-semibold text-base">Item Total</span>
                    <span className="font-extrabold text-gray-900 text-lg">₹{grandTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 text-gray-500 font-semibold text-base">
                      <FaTicketAlt className="text-orange-500 text-sm" /> Promo Discount
                    </span>
                    <span className="font-extrabold text-emerald-600 text-lg">
                      {discount > 0 ? `- ₹${discount.toFixed(2)}` : "₹0.00"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-semibold text-base">Delivery Charges</span>
                    <span className="text-emerald-600 font-black uppercase text-[11px] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-md tracking-wider">FREE</span>
                  </div>

                </div>
              </div>

              {/* Total To Pay Block & Checkout Button Container */}
              <div className="pt-6 mt-auto">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="font-black text-gray-900 text-xl block tracking-tight">To Pay</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-0.5 block">Inclusive of all taxes</span>
                  </div>
                  <span className="text-5xl
font-black
text-emerald-600 text-gray-900 tracking-tight">
                    ₹{finalAmount.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() =>
                    navigate("/checkout", {
                      state: { grandTotal, discount, finalAmount, couponPercent },
                  })
                }
                className="
w-full
bg-gradient-to-r
from-emerald-500
to-green-600
hover:from-green-600
hover:to-emerald-700
text-white
font-black
text-lg
py-5
rounded-2xl
shadow-xl
hover:shadow-2xl
hover:scale-[1.02]
transition-all
duration-300
"
                >
                  Proceed to Checkout
                </button>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;