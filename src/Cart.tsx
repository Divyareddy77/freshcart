import { useContext,  useRef, useState } from "react";

import {
  FaMoneyBillWave,
  FaShoppingCart,
  FaTicketAlt,
  FaCheckCircle,
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
      setMessage("❌ Invalid Coupon Code by Ujwala");
    }
  };
  
  const discount = (grandTotal * couponPercent) / 100;
  const finalAmount = grandTotal - discount;

  // let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        🛒 My Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white p-10 rounded-xl shadow text-center">
          <h2 className="text-3xl text-red-500 font-bold">
            Your Cart is Empty 😔
          </h2>
        </div>
      ) : (

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex flex-col md:flex-row items-center gap-6"
              >

                <img
                  src={item.imageurl}
                  alt={item.description}
                  className="w-36 h-36 object-contain"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold text-gray-800">
                    {item.description}
                  </h2>

                  <p className="text-green-600 text-xl font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <p className="text-gray-500 mt-2">
                    Quantity : {item.quantity}
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-2">
                    Total : ₹{item.price * item.quantity}
                  </p>

                </div>

                <div className="flex flex-col items-center gap-4">

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full"
                    >
                      <FaMinus />
                    </button>

                    <span className="text-2xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
                    >
                      <FaPlus />
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                  >
                    <FaTrash />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}

          <div className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-5">

            <div className="flex items-center gap-3 mb-6">

              <FaShoppingCart className="text-3xl text-green-600" />

              <h2 className="text-3xl font-bold">
                Order Summary
              </h2>

            </div>

            <div className="flex gap-3 mb-5">

              <input
                ref={couponRef}
                type="text"
                placeholder="Enter Coupon"
                className="border p-3 rounded-lg flex-1"
              />

              <button
                onClick={applyCoupon}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
              >
                Apply
              </button>

            </div>

            <p
              className={`font-semibold mb-6 ${
                discount > 0
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
                        <div className="space-y-5">

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-600" />
                  <span>Grand Total</span>
                </div>

                <span className="font-bold text-lg">
                  ₹{grandTotal.toFixed(2)}
                </span>

              </div>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-2">
                  <FaTicketAlt className="text-orange-500" />
                  <span>Coupon Discount</span>
                </div>

                <span className="font-bold text-red-600">
                  - ₹{discount.toFixed(2)}
                </span>

              </div>

              <hr />

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="font-bold">
                    Payable Amount
                  </span>
                </div>

                <span className="text-3xl font-bold text-green-700">
                  ₹{finalAmount.toFixed(2)}
                </span>
              </div>
            </div>

    <button

  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
>
  Proceed to Checkout
</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;








// import { useContext } from "react";
// import { CartContext } from "./contextapi/CartContext";
// import "./Cart.css";

// function Cart() {
//   const {
//     cart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeFromCart,
//     clearCart,
//   } = useContext(CartContext);

//   const total = cart.reduce(
//     (sum, product) => sum + product.price * product.quantity,
//     0
//   );

//   return (
//     <div className="cart-page">
//       <div className="cart-container">

//         {/* Heading */}
//         <div className="cart-header">
//           <h1 className="cart-title">🛒 Shopping Cart</h1>

//           {cart.length > 0 && (
//             <button
//               className="clear-btn"
//               onClick={clearCart}
//             >
//               Clear Cart
//             </button>
//           )}
//         </div>

//         {cart.length === 0 ? (
//           <div className="empty-cart">
//             <h2>🛍 Your Cart is Empty</h2>
//             <p>Add some products to start shopping.</p>
//           </div>
//         ) : (
//           <div className="cart-grid">

//             {/* Left Side */}
//             <div className="cart-items">

//               {cart.map((product) => (
//                 <div
//                   key={product.id}
//                   className="cart-card"
//                 >
//                   {/* Product Image */}
//                   <div className="cart-image">
//                     <img
//                       src={product.imageurl}
//                       alt={product.name}
//                     />
//                   </div>

//                   {/* Product Details */}
//                   <div className="cart-details">

//                     <h2>{product.name}</h2>

//                     <p>{product.description}</p>

//                     <h3 className="price">
//                       ₹{product.price}
//                     </h3>

//                     {/* Quantity */}
//                     <div className="quantity">

//                       <button
//                         className="minus"
//                         onClick={() => decreaseQuantity(product.id)}
//                       >
//                         −
//                       </button>

//                       <span className="count">
//                         {product.quantity}
//                       </span>

//                       <button
//                         className="plus"
//                         onClick={() => increaseQuantity(product.id)}
//                       >
//                         +
//                       </button>

//                       <button
//                         className="remove-btn"
//                         onClick={() => removeFromCart(product.id)}
//                       >
//                         Remove
//                       </button>

//                     </div>

//                   </div>

//                   {/* Subtotal */}
//                   <div className="subtotal">

//                     <p>Subtotal</p>

//                     <h2>
//                       ₹{product.price * product.quantity}
//                     </h2>

//                   </div>
//                 </div>
//               ))}

//             </div>

//             {/* Right Side */}
//             <div className="summary">

//               <h2>Order Summary</h2>

//               <div className="summary-row">
//                 <span>Total Products</span>
//                 <span>{cart.length}</span>
//               </div>

//               <div className="summary-row">
//                 <span>Delivery</span>
//                 <span className="free">FREE</span>
//               </div>

//               <div className="summary-row total">
//                 <span>Total</span>
//                 <span>₹{total}</span>
//               </div>

//               <button className="checkout">
//                 Proceed to Checkout
//               </button>

//             </div>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default Cart;