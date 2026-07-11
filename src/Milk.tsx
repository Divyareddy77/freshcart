import  { useContext } from 'react'

import { CartContext } from './contextapi/CartContext';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
interface MilkItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}
function Milk() {
    const context = useContext(CartContext);
    if (!context) return null;
    const { addToCart } = context;
    const navigate = useNavigate();
    
    const milkItems: MilkItem[] = [
  {
    id: 101,
    name: "Milk",
    price: 60,
    imageurl: "/images/milk.jpg",
    description: "Fresh full-cream milk",
  },
  {
    id: 102,
    name: "Cheese",
    price: 250,
    imageurl: "/images/cheese.jpg",
    description: "Rich and creamy cheese",
  },
  {
    id: 103,
    name: "Yogurt",
    price: 40,
    imageurl: "/images/yogurt.jpg",
    description: "Fresh plain yogurt",
  },
  {
    id: 104,
    name: "Butter",
    price: 60,
    imageurl: "/images/butter.jpg",
    description: "Pure dairy butter",
  },
  
  {
    id: 105,
    name: "Paneer",
    price: 90,
    description: "Fresh cottage cheese",
    imageurl: "/images/Paneer.jpg",
  },
  {
    id: 106,
    name: "Cream",
    price: 70,
    description: "Fresh dairy cream",
    imageurl: "/images/cream.jpg",
  },
  {
    id: 107,
    name: "Ghee",
    price: 550,
    description: "Pure cow ghee",
    imageurl: "/images/Ghee.avif",
  },
  {
    id: 108,
    name: "Ice Cream",
    price: 180,
    description: "Vanilla ice cream",
    imageurl: "/images/Ice Cream.avif",
  },
  {
    id: 109,
    name: "Chocolate Milk",
    price: 45,
    description: "Chocolate flavoured milk",
    imageurl: "/images/Chocolate Milk.avif",
  },
  {
    id: 110,
    name: "Lassi",
    price: 35,
    description: "Sweet Punjabi lassi",
    imageurl: "/images/Lassi.jpg",
  },
  {
    id: 111,
    name: "Buttermilk",
    price: 25,
    description: "Refreshing buttermilk",
    imageurl: "/images/Buttermilk.jpg",
  },
  {
    id: 112,
    name: "Greek Yogurt",
    price: 120,
    description: "Protein-rich yogurt",
    imageurl: "/images/Greek Yogurt.avif",
  },
  {
    id: 113,
    name: "Mozzarella",
    price: 280,
    description: "Mozzarella cheese",
    imageurl: "/images/Mozzarella.avif",
  },
  {
    id: 114,
    name: "Cheddar Cheese",
    price: 300,
    description: "Aged cheddar cheese",
    imageurl: "/images/Cheddar Cheese.avif",
  },
  {
    id: 115,
    name: "Whipping Cream",
    price: 180,
    description: "Fresh whipping cream",
    imageurl: "/images/Whipping Cream.avif",
  },
  {
    id: 116,
    name: "Flavoured Milk",
    price: 40,
    description: "Strawberry flavoured milk",
    imageurl: "/images/Flavoured Milk.jpg",
  },
  {
    id: 117,
    name: "Condensed Milk",
    price: 150,
    description: "Sweet condensed milk",
    imageurl: "/images/Condensed Milk.jpg",
  },
  {
    id: 118,
    name: "Milk Powder",
    price: 320,
    description: "Premium milk powder",
    imageurl: "/images/Milk Powder.avif",
  },
  {
    id: 119,
    name: "Curd",
    price: 35,
    description: "Fresh curd",
    imageurl: "/images/Curd.jpg",
  },
  {
    id: 120,
    name: "Kefir",
    price: 180,
    description: "Healthy probiotic drink",
    imageurl: "/images/Kefir.jpg",
  },
];

let listItems = milkItems.map((milk) => (
  <li
    key={milk.id}
    className="group relative bg-white rounded-3xl border border-sky-100 shadow-lg overflow-hidden p-6 flex flex-col items-center 
    transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-sky-400">
    <span className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
    Fresh
</span>
    <h2 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-sky-600 transition">
      {milk.name}
    </h2>

    <div className="w-56 h-56 bg-sky-50 rounded-2xl flex items-center justify-center mb-5 shadow-inner">

    <div className="w-full h-60 rounded-2xl overflow-hidden bg-gray-100 mb-5">
  <img
    src={milk.imageurl}
    alt={milk.name}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  />
</div>

</div>
<div className="flex justify-center gap-1 text-yellow-400 mb-3">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
</div>

    <div className="space-y-2 mb-5">
      <p className="text-2xl text-center font-black text-sky-500">
    ₹{milk.price}
</p>
      <p className="text-gray-500 text-sm leading-6">
    {milk.description}
</p>
    </div>

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

    addToCart(milk);
    toast.success(`${milk.name} added to cart 🥛`, {
      autoClose: 2000,
      position: "top-right",
    });
  }}
  className="mt-auto w-full bg-gradient-to-r from-sky-300 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-lg 
  py-2.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
  🛒 Add To Cart
</button>
  </li>
));
 
  return (
    <>
    
  <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 py-10">
    <div className="max-w-7xl mx-auto mb-12 rounded-3xl bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-500 text-white shadow-2xl px-10 py-12 text-center">

    <h1 className="text-5xl font-black tracking-wide">
        🥛 Fresh Dairy Collection
    </h1>

    <p className="mt-4 text-xl text-blue-100">
        Pure • Fresh • Healthy • Delivered Daily
    </p>

</div>
     <ol className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
    {listItems}
</ol>
  </div>

    </>
  )
}

export default Milk



