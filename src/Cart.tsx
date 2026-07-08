import { useContext } from "react";
import { CartContext } from "./contextapi/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-container">

        {/* Heading */}
        <div className="cart-header">
          <h1 className="cart-title">🛒 Shopping Cart</h1>

          {cart.length > 0 && (
            <button
              className="clear-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>🛍 Your Cart is Empty</h2>
            <p>Add some products to start shopping.</p>
          </div>
        ) : (
          <div className="cart-grid">

            {/* Left Side */}
            <div className="cart-items">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="cart-card"
                >
                  {/* Product Image */}
                  <div className="cart-image">
                    <img
                      src={product.imageurl}
                      alt={product.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="cart-details">

                    <h2>{product.name}</h2>

                    <p>{product.description}</p>

                    <h3 className="price">
                      ₹{product.price}
                    </h3>

                    {/* Quantity */}
                    <div className="quantity">

                      <button
                        className="minus"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        −
                      </button>

                      <span className="count">
                        {product.quantity}
                      </span>

                      <button
                        className="plus"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </button>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                  {/* Subtotal */}
                  <div className="subtotal">

                    <p>Subtotal</p>

                    <h2>
                      ₹{product.price * product.quantity}
                    </h2>

                  </div>
                </div>
              ))}

            </div>

            {/* Right Side */}
            <div className="summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total Products</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span className="free">FREE</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button className="checkout">
                Proceed to Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;