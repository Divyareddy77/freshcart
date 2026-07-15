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
  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
>
    <div className="px-4 pt-4">
    <span className="inline-block bg-indigo-100 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-md">
    FARM FRESH
</span>
</div>
    

    <div className="flex justify-center py-5">
    <img
        src={milk.imageurl}
        alt={milk.name}
        className="w-48 h-48 object-contain hover:scale-110 transition-transform duration-300"
    />
</div>
<div className="flex justify-between items-center px-4">

   <span className="text-indigo-400 text-xs font-semibold">
    ⚡ 10 MINS
</span>
    <div className="flex items-center gap-1 text-yellow-500 text-sm">
        <FaStar size={12}/>
        <span>4.5</span>
    </div>

</div>

    <div className="px-4 py-4">

    <h2 className="text-2xl font-bold text-gray-800">
        {milk.name}
    </h2>

    <p className="text-gray-500 mt-2 h-12">
        {milk.description}
    </p>

    <div className="flex justify-between items-center mt-5">

       <h2 className="text-3xl font-bold text-indigo-400">
            ₹{milk.price}
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

                addToCart(milk);

                toast.success(`${milk.name} added to cart 🥛`, {
                    autoClose: 2000,
                });
            }}
            className="border-2 border-indigo-400 text-indigo-500 font-bold px-7 py-2 rounded-lg hover:bg-indigo-400 hover:text-white transition"
        >
            ADD +
        </button>

    </div>

</div>
  </li>
));
 
  return (
    <>
    
  <div className="min-h-screen bg-gray-50 py-10 px-6">
    <div className="bg-white border border-gray-200 rounded-3xl p-10 mb-10 shadow-sm text-center">
    <h1 className="text-5xl font-bold text-gray-800">
        🥛 Fresh Dairy Collection
    </h1>

    <p className="mt-3 text-gray-500">
        Pure • Fresh • Healthy • Delivered Daily
    </p>

</div>
     <ol className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6">
    {listItems}
</ol>
  </div>

    </>
  )
}

export default Milk



