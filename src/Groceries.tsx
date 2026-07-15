import  { useContext } from 'react'

import { CartContext } from './contextapi/CartContext';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
interface GroceryItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}

function Groceries() {
  const context = useContext(CartContext);
  if (!context) return null;  
  const { addToCart } = context;
  const navigate = useNavigate();

  const groceryItems: GroceryItem[] = [
  {
    id: 201,
    name: "Rice",
    price: 70,
    imageurl: "/images/rice.jpg",
    description: "Premium quality rice",
  },
  {
    id: 202,
    name: "Wheat Flour",
    price: 50,
    imageurl: "/images/wheatflour.jpg",
    description: "Fresh whole wheat flour",
  },
  {
    id: 203,
    name: "Toor Dal",
    price: 140,
    imageurl: "/images/toordal.jpg",
    description: "Protein-rich pigeon peas",
  },
  {
    id: 2044,
    name: "Cooking Oil",
    price: 180,
    imageurl: "/images/oil.jpg",
    description: "Refined sunflower oil",
  },
  { 
    id: 205, 
    name: "Sugar", 
    price: 55, 
    description: "Premium sugar", 
    imageurl: "/images/Sugar.avif" 
  },
  { 
    id: 206, 
    name: "Salt", 
    price: 25, 
    description: "Iodized salt", 
    imageurl: "/images/Salt.avif" 
  },
  { 
    id: 207, 
    name: "Turmeric Powder", 
    price: 45, 
    description: "Pure turmeric powder", 
    imageurl: "/images/Turmeric Powder.avif" 
  },
  { 
    id: 208, 
    name: "Red Chilli Powder", 
    price: 80, 
    description: "Spicy chilli powder", 
    imageurl: "/images/Red Chilli Powder.avif" 
  },
  { 
    id: 209, 
    name: "Coriander Powder", 
    price: 60, 
    description: "Fresh coriander powder", 
    imageurl: "/images/Coriander Powde.jpg" 
  },
  { 
    id: 210, 
    name: "Black Pepper", 
    price: 120, 
    description: "Whole black pepper", 
    imageurl: "/images/Black Pepper.avif" 
  },
  { 
    id: 211, 
    name: "Jeera", price: 90, 
    description: "Whole cumin seeds", 
    imageurl: "/images/Jeera.jpg" 
  },
  { 
    id: 212, 
    name: "Mustard Seeds", 
    price: 45, 
    description: "Premium mustard seeds", 
    imageurl: "/images/Mustard Seeds.avif" 
  },
  { 
    id: 213, 
    name: "Poha", 
    price: 70, 
    description: "Fresh poha", 
    imageurl: "/images/Poha.jpg" 
  },
  { 
    id: 214, 
    name: "Rava", 
    price: 60, 
    description: "Fine rava", 
    imageurl: "/images/rava.jpg" 
  },
  { 
    id: 215, 
    name: "Maida", 
    price: 50, 
    description: "Refined flour", 
    imageurl: "/images/Maida.jpg" 
  },
  { 
    id: 216, 
    name: "Besan", 
    price: 90, 
    description: "Gram flour", 
    imageurl: "/images/Besan.jpg" 
  },
  { 
    id: 217, 
    name: "Green Gram", 
    price: 130, 
    description: "Protein-rich green gram", 
    imageurl: "/images/Green Gram.avif" 
  },
  { 
    id: 218, 
    name: "Black Gram", 
    price: 140, 
    description: "Premium black gram", 
    imageurl: "/images/Black Gram.avif" 
  },
  { 
    id: 219, 
    name: "Chickpeas", 
    price: 110, 
    description: "Healthy chickpeas", 
    imageurl: "/images/Chickpeas.avif" 
  },
  { 
    id: 220, 
    name: "Tea Powder", 
    price: 220, 
    description: "Premium tea powder", 
    imageurl: "/images/Tea Powder.jpg" 
  },
];


let listItems = groceryItems.map((grocery) => (
  <li
    key={grocery.id}
    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
    
    <div className="px-4 pt-4">
  <span className="inline-block bg-purple-100 text-purple-500 text-xs font-semibold px-3 py-1 rounded-md">
    DAILY ESSENTIAL
  </span>
</div>

    <div className="flex justify-center py-5">
  <img
    src={grocery.imageurl}
    alt={grocery.name}
    className="w-48 h-48 object-contain hover:scale-110 transition-transform duration-300"
  />
</div>
<div className="flex justify-between items-center px-4">

  <span className="text-purple-500 text-xs font-semibold">
    ⚡ 10 MINS
  </span>

  <div className="flex items-center gap-1 text-yellow-500 text-sm">
    <FaStar size={12}/>
    <span>4.5</span>
  </div>

</div>

    <div className="px-4 py-4">

  <h2 className="text-2xl font-bold text-gray-800">
    {grocery.name}
  </h2>

  <p className="text-gray-500 mt-2 h-12">
    {grocery.description}
  </p>

  <div className="flex justify-between items-center mt-5">

    <h2 className="text-3xl font-bold text-purple-400">
      ₹{grocery.price}
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

        addToCart(grocery);

        toast.success(`${grocery.name} added to cart 🛒`, {
          autoClose: 2000,
        });
      }}
      className="border-2 border-purple-400 text-purple-500 font-bold px-7 py-2 rounded-lg hover:bg-purple-400 hover:text-white transition"
    >
      ADD +
    </button>

  </div>

</div>
  </li>
));
 
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="bg-white border border-gray-200 rounded-3xl p-10 mb-10 shadow-sm text-center">

    <h1 className="text-5xl font-bold text-gray-800">
        🛒 Grocery Essentials
    </h1>

    <p className="mt-3 text-gray-500">
        Rice • Flour • Spices • Daily Essentials
    </p>

</div>
      <ol className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6">
    {listItems}
</ol>
    </div>
  )
}

export default Groceries

