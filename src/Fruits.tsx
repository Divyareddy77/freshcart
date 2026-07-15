import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { CartContext } from "./contextapi/CartContext";
import { useNavigate } from "react-router-dom";

interface FruitItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}

function Fruits() {
  const context = useContext(CartContext);
  if (!context) return null;

  const { addToCart } = context;
  const navigate = useNavigate();

  const fruits: FruitItem[] = [
    {
      id: 401,
      name: "Apple",
      price: 180,
      imageurl: "/images/apple.avif",
      description: "Fresh Kashmiri apples",
    },
    {
      id: 402,
      name: "Banana",
      price: 60,
      imageurl: "/images/banana.avif",
      description: "Naturally sweet bananas",
    },
    {
      id: 403,
      name: "Orange",
      price: 120,
      imageurl: "/images/orange.avif",
      description: "Juicy oranges",
    },
    {
      id: 404,
      name: "Mango",
      price: 220,
      imageurl: "/images/mango.avif",
      description: "Sweet Alphonso mangoes",
    },
    {
      id: 405,
      name: "Grapes",
      price: 140,
      imageurl: "/images/grapes.avif",
      description: "Fresh green grapes",
    },
    {
      id: 406,
      name: "Watermelon",
      price: 90,
      imageurl: "/images/watermelon.avif",
      description: "Refreshing watermelon",
    },
    {
      id: 407,
      name: "Pineapple",
      price: 130,
      imageurl: "/images/pineapple.avif",
      description: "Sweet pineapple",
    },
    {
      id: 408,
      name: "Strawberry",
      price: 250,
      imageurl: "/images/strawberry.avif",
      description: "Fresh strawberries",
    },
    {
      id: 409,
      name: "Pomegranate",
      price: 180,
      imageurl: "/images/pomegranate.avif",
      description: "Healthy pomegranate",
    },
    {
      id: 410,
      name: "Papaya",
      price: 80,
      imageurl: "/images/papaya.avif",
      description: "Vitamin-rich papaya",
    },
    {
      id: 411,
      name: "Kiwi",
      price: 260,
      imageurl: "/images/kiwi.avif",
      description: "Imported kiwi",
    },
    {
      id: 412,
      name: "Guava",
      price: 90,
      imageurl: "/images/guava.avif",
      description: "Fresh guava",
    },
    {
      id: 413,
      name: "Dragon Fruit",
      price: 180,
      imageurl: "/images/dragon fruit.avif",
      description: "Premium dragon fruit",
    },
    {
      id: 414,
      name: "Avocado",
      price: 250,
      imageurl: "/images/avacado.avif",
      description: "Healthy avocado",
    },
    {
      id: 415,
      name: "Pear",
      price: 150,
      imageurl: "/images/pear.jpg",
      description: "Juicy pears",
    },
    {
      id: 416,
      name: "Cherry",
      price: 350,
      imageurl: "/images/cherry.jpg",
      description: "Fresh cherries",
    },
    {
      id: 417,
      name: "Muskmelon",
      price: 100,
      imageurl: "/images/muskmelon.jpg",
      description: "Sweet muskmelon",
    },
    {
      id: 418,
      name: "Lychee",
      price: 220,
      imageurl: "/images/lychee.avif",
      description: "Seasonal lychees",
    },
    {
      id: 419,
      name: "Blueberries",
      price: 380,
      imageurl: "/images/blueberries.avif",
      description: "Fresh blueberries",
    },
    {
      id: 420,
      name: "Coconut",
      price: 55,
      imageurl: "/images/coconut.avif",
      description: "Fresh coconut",
    },
  ];

  const listItems = fruits.map((fruit) => (
    <li
      key={fruit.id}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      <div className="px-4 pt-4">
    <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-md">
        FARM PICK
    </span>
</div>

      
      <div className="flex justify-center py-5">
  <img
    src={fruit.imageurl}
    alt={fruit.name}
    className="w-48 h-48 object-contain hover:scale-110 transition duration-300"
  />
</div>

     <div className="flex justify-between items-center px-4">
  <span className="text-orange-500 text-xs font-semibold">
    ⚡ 10 MINS
  </span>

  <div className="flex items-center gap-1 text-yellow-500 text-sm">
    <FaStar size={12} />
    <span>4.5</span>
  </div>
</div>

     <div className="px-5 pb-5">

    <h2 className="text-2xl font-bold text-gray-800">
        {fruit.name}
    </h2>

    <p className="text-gray-500 mt-2 h-12">
        {fruit.description}
    </p>

    <div className="flex justify-between items-center mt-5">

        <h2 className="text-3xl font-bold">
            ₹{fruit.price}
            <span className="text-base font-medium text-gray-500">
                /kg
            </span>
        </h2>

        <button
  onClick={() => {
    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser") || "null"
    );

    if (!loggedInUser) {
      toast.warning("Please login first!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

      return;
    }

    addToCart(fruit);

    toast.success(`${fruit.name} added to cart 🍎`, {
      autoClose: 2000,
    });
  }}
  className="border-2 border-orange-400 text-orange-500 font-bold px-7 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition"
>
  ADD +
</button>

    </div>

</div>
    </li>
  ));

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-3xl p-10 mb-10 shadow-sm text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          🍎 Fresh Fruits Collection
        </h1>

        <p className="mt-3 text-gray-500">
          Sweet • Juicy • Naturally Fresh • Farm Picked
        </p>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {listItems}
      </ol>
    </>
  );
}

export default Fruits;