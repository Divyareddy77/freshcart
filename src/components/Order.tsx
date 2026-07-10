import { useContext, useState } from "react";
import { OrderContext } from "../contextapi/OrderContext";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaShoppingBag,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Orders() {
  const { orders } = useContext(OrderContext);

  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  const toggleOrder = (orderNumber: number) => {
    setExpandedOrder((prev) =>
      prev === orderNumber ? null : orderNumber
    );
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-500">
          No Orders Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        📦 My Orders
      </h1>

      <div className="max-w-7xl mx-auto space-y-5">

        {orders.map((order) => (

          <div
            key={order.orderNumber}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >

            {/* Header */}

            <div
              onClick={() => toggleOrder(order.orderNumber)}
              className="bg-green-600 text-white px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-green-700 transition"
            >

              <div>

                <h2 className="text-xl font-bold">
                  Order #{order.orderNumber}
                </h2>

                <p className="flex items-center gap-2 text-sm mt-1">
                  <FaCalendarAlt />
                  {order.orderDate}
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                  <FaCheckCircle />
                  {order.status}
                </span>

                {expandedOrder === order.orderNumber ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}

              </div>

            </div>

            {/* Expandable Content */}

            {expandedOrder === order.orderNumber && (

              <div className="grid lg:grid-cols-2 gap-6 p-6">

                {/* LEFT SIDE */}

                <div>

                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FaShoppingBag className="text-green-600" />
                    Ordered Products
                  </h3>

                  <div className="space-y-4">

                    {order.items.map((item) => (

                      <div
                        key={item.id}
                        className="flex items-center gap-4 border rounded-xl p-3 hover:bg-gray-50"
                      >

                        <img
                          src={item.imageurl}
                          alt={item.description}
                          className="w-20 h-20 object-contain rounded"
                        />

                        <div className="flex-1">

                          <h4 className="font-semibold">
                            {item.description}
                          </h4>

                          <p className="text-gray-500">
                            Qty : {item.quantity}
                          </p>

                        </div>

                        <div className="text-lg font-bold text-green-700">
                          ₹{item.price}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="bg-gray-50 rounded-xl p-5">

                  <h3 className="text-xl font-bold mb-5">
                    Order Details
                  </h3>

                  <div className="space-y-4">

                    <div className="flex items-center gap-3">
                      <FaUser className="text-blue-600" />
                      <span>{order.customerName}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaPhone className="text-green-600" />
                      <span>{order.mobile}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-red-600 mt-1" />
                      <span>{order.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCreditCard className="text-purple-600" />
                      <span>{order.paymentMode}</span>
                    </div>

                    <hr />

                    <div className="flex justify-between">
                      <span>Grand Total</span>
                      <span>₹{order.grandTotal}</span>
                    </div>

                    <div className="flex justify-between text-red-600">
                      <span>Discount</span>
                      <span>- ₹{order.discount}</span>
                    </div>

                    <div className="flex justify-between text-2xl font-bold text-green-700">
                      <span className="flex items-center gap-2">
                        <FaMoneyBillWave />
                        Payable
                      </span>

                      <span>
                        ₹{order.finalAmount}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Orders;