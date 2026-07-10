import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { CartContext } from "./contextapi/CartContext";

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
      className="
group
relative
bg-white
rounded-3xl
shadow-lg
border
border-orange-100
overflow-hidden
p-7
transition-all
duration-500
hover:-translate-y-3
hover:shadow-2xl
hover:border-orange-300
"
    >
      <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
        🌱 Farm Fresh
      </span>

      <h2  className="mt-8 text-3xl font-extrabold text-center">
        {fruit.name}
      </h2>

      <div className="h-56 w-full bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl overflow-hidden flex items-center justify-center mb-5">
  <img
    src={fruit.imageurl}
    alt={fruit.name}
    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
  />
</div>

      <div className="flex justify-center gap-1 text-amber-400 text-lg mb-3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

     <p className="text-2xl text-center font-black text-orange-600 tracking-tight">
    ₹{fruit.price}
</p>

      <p className="text-gray-500 mt-3 mb-6">
        {fruit.description}
      </p>

      <button
        onClick={() => {
          addToCart(fruit);
          toast.success(`${fruit.name} added to cart 🍎`, {
            autoClose: 2000,
          });
        }}
        className="
w-full
py-2.5
rounded-xl
font-bold
text-lg
text-white
bg-gradient-to-r
from-orange-500
via-pink-500
to-rose-500
hover:from-orange-600
hover:to-rose-600
transition-all
duration-300
hover:scale-105
shadow-lg
"
      >
        🛒 Add To Cart
      </button>
    </li>
  ));

  return (
    <>
      <div className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 rounded-3xl p-10 mb-10 text-center text-white shadow-2xl">
        <h1 className="text-5xl font-black">
          🍎 Fresh Fruits Collection
        </h1>

        <p className="mt-4 text-lg text-orange-100">
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