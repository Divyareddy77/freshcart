import  { useContext } from 'react'

import { CartContext } from './contextapi/CartContext';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
interface nonVegItem{
  id : number
  name : string
  price : number
  imageurl : string
  description : string
}
function Nonveg() {
  const context = useContext(CartContext);
  if (!context) return null;
  const { addToCart } = context;
  const navigate = useNavigate();
  
  const nonVeg : nonVegItem[] =[
    {
      id : 301,
      name : "Chicken",
      price : 800,
      imageurl : "/images/chicken.jpg",
      description : "Fresh skinless chicken"
    },
        {
      id : 302,
      name : "Mutton",
      price : 800,
      imageurl : "/images/mutton.jpg",        
      description : "Premium fresh mutton"
    },
        {
      id : 303,
      name : "Fish",
      price : 800,
      imageurl : "/images/fish.jpg",
      description : "Fresh river fish"
    },
        {
      id : 304,
      name : "Eggs",
      price : 800,
      imageurl : "/images/eggs.jpg",
      description : "Farm fresh eggs"
    },
   
  { 
    id: 305, 
    name: "Prawns", 
    price: 650, 
    description: "Fresh prawns", 
    imageurl: "/images/prawns.avif" 
  },
  { 
    id: 306, 
    name: "Crab", 
    price: 900, 
    description: "Sea fresh crab", 
    imageurl: "/images/crabs.avif" 
  },
  { 
    id: 307, 
    name: "Turkey", 
    price: 700, 
    description: "Premium turkey meat", 
    imageurl: "/images/turkey.avif" 
  },
  { 
    id: 308, 
    name: "Lamb Chops", 
    price: 950, 
    description: "Premium lamb chops", 
    imageurl: "/images/lambchops.avif" 
  },
  { 
    id: 309, 
    name: "Chicken Wings", 
    price: 300, 
    description: "Fresh chicken wings", 
    imageurl: "/images/chicken wings.jpg" 
  },
  { 
    id: 310, 
    name: "Chicken Drumsticks", 
    price: 350, 
    description: "Juicy drumsticks", 
    imageurl: "/images/chicken drumsticks.avif" 
  },
  { 
    id: 311, 
    name: "Salmon", 
    price: 1200, 
    description: "Imported salmon", 
    imageurl: "/images/salmon.avif" 
  },
  { 
    id: 312, 
    name: "Tuna", 
    price: 900, 
    description: "Fresh tuna", 
    imageurl: "/images/tuna.jpg" 
  },
  { 
    id: 313, 
    name: "Sardines", 
    price: 250, 
    description: "Healthy sardines", 
    imageurl: "/images/sardines.avif" 
  },
  { 
    id: 314, 
    name: "Seer Fish", 
    price: 800, 
    description: "Fresh seer fish", 
    imageurl: "/images/seer fish.avif" 
  },
  { 
    id: 315, 
    name: "Anchovies", 
    price: 280, 
    description: "Fresh anchovies", 
    imageurl: "/images/anchovies.avif" 
  },
  { 
    id: 316, 
    name: "Goat Liver", 
    price: 420, 
    description: "Fresh goat liver", 
    imageurl: "/images/Goat Liver.avif" 
  },
  { 
    id: 317, 
    name: "Chicken Liver", 
    price: 220, 
    description: "Fresh chicken liver", 
    imageurl: "/images/Chicken Liver.jpg" 
  },
  { 
    id: 318, 
    name: "Lobster", 
    price: 1400, 
    description: "Premium lobster", 
    imageurl: "/images/lobster.avif" 
  },
  { 
    id: 319, 
    name: "Squid", 
    price: 550, 
    description: "Fresh squid", 
    imageurl: "/images/Squid.avif" 
  },
  { 
    id: 320, 
    name: "Chicken Breast", 
    price: 450, 
    description: "Boneless chicken breast", 
    imageurl: "/images/chicken.jpg" 
  },
];

  
 let listItems = nonVeg.map((nonveg) => (
  <li
    key={nonveg.id}
    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
    
    <div className="px-4 pt-4">
  <span className="inline-block bg-red-100 text-red-400 text-xs font-semibold px-3 py-1 rounded-md">
    FARM FRESH
  </span>
</div>

    <div className="flex justify-center py-5">
  <img
    src={nonveg.imageurl}
    alt={nonveg.name}
    className="w-48 h-48 object-contain hover:scale-110 transition duration-300"
  />
</div>
 <div className="flex justify-between items-center px-4">

  <span className="text-red-400 text-xs font-semibold">
    ⚡ 10 MINS
  </span>

  <div className="flex items-center gap-1 text-yellow-500 text-sm">
    <FaStar size={12}/>
    <span>4.5</span>
  </div>

</div>



    <div className="px-4 py-4">

  <h2 className="text-2xl font-bold text-gray-800">
    {nonveg.name}
  </h2>

  <p className="text-gray-500 mt-2 h-12">
    {nonveg.description}
  </p>

  <div className="flex justify-between items-center mt-5">

    <h2 className="text-3xl font-bold text-red-400">
      ₹{nonveg.price}
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

        addToCart(nonveg);

        toast.success(`${nonveg.name} added to cart 🛒`, {
          autoClose: 2000,
        });
      }}
      className="border-2 border-red-400 text-red-500 font-bold px-7 py-2 rounded-lg hover:bg-red-400 hover:text-white transition"
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
    🍗 Premium Non-Veg Collection
  </h1>

  <p className="mt-3 text-gray-500">
    Fresh • Hygienic • Protein Rich • Delivered Chilled
  </p>
</div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
  {listItems}
</ol>
    </>
  )
}

export default Nonveg




