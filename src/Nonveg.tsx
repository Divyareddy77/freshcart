import  { useContext } from 'react'

import { CartContext } from './contextapi/CartContext';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
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
   
  { id: 305, name: "Prawns", price: 650, description: "Fresh prawns", imageurl: "/images/prawns.avif" },
  { id: 306, name: "Crab", price: 900, description: "Sea fresh crab", imageurl: "/images/crabs.avif" },
  { id: 307, name: "Turkey", price: 700, description: "Premium turkey meat", imageurl: "/images/turkey.avif" },
  { id: 308, name: "Lamb Chops", price: 950, description: "Premium lamb chops", imageurl: "/images/lambchops.avif" },
  { id: 309, name: "Chicken Wings", price: 300, description: "Fresh chicken wings", imageurl: "/images/chicken wings.jpg" },
  { id: 310, name: "Chicken Drumsticks", price: 350, description: "Juicy drumsticks", imageurl: "/images/chicken drumsticks.avif" },
  { id: 311, name: "Salmon", price: 1200, description: "Imported salmon", imageurl: "/images/salmon.avif" },
  { id: 312, name: "Tuna", price: 900, description: "Fresh tuna", imageurl: "/images/tuna.jpg" },
  { id: 313, name: "Sardines", price: 250, description: "Healthy sardines", imageurl: "/images/sardines.avif" },
  { id: 314, name: "Seer Fish", price: 800, description: "Fresh seer fish", imageurl: "/images/seer fish.avif" },
  { id: 315, name: "Anchovies", price: 280, description: "Fresh anchovies", imageurl: "/images/anchovies.avif" },
  { id: 316, name: "Goat Liver", price: 420, description: "Fresh goat liver", imageurl: "/images/Goat Liver.avif" },
  { id: 317, name: "Chicken Liver", price: 220, description: "Fresh chicken liver", imageurl: "/images/Chicken Liver.jpg" },
  { id: 318, name: "Lobster", price: 1400, description: "Premium lobster", imageurl: "/images/lobster.avif" },
  { id: 319, name: "Squid", price: 550, description: "Fresh squid", imageurl: "/images/Squid.avif" },
  { id: 320, name: "Chicken Breast", price: 450, description: "Boneless chicken breast", imageurl: "/images/chicken.jpg" },
];

  
 let listItems = nonVeg.map((nonveg) => (
  <li
    key={nonveg.id}
    className="
group
relative
bg-white
rounded-3xl
shadow-lg
p-6
text-center
hover:-translate-y-2
hover:shadow-2xl
transition-all
duration-500
border
border-red-100
hover:border-red-400
"
  >
    <h2 className="
text-3xl
font-extrabold
text-gray-900
tracking-wide
mb-3
group-hover:text-red-600
transition
">
      {nonveg.name}
    </h2>
    <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
  Fresh
</span>

    <div className="h-56 w-full bg-red-50 rounded-2xl overflow-hidden mb-5">
    <img
        src={nonveg.imageurl}
        alt={nonveg.name}
        className="
w-full
h-full
rounded-xl
object-cover
transition
duration-500
group-hover:scale-110"
    />
</div>
  <div className="flex justify-center gap-1 text-yellow-400 mt-4 mb-4">
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
</div>



    <div className="space-y-2 mb-5">
      <p className="text-2xl font-black text-red-600 tracking-wide">
    ₹{nonveg.price}
</p>

      <p className="
text-gray-500
leading-6
">
        {nonveg.description}
      </p>
    </div>

    <button
  onClick={() => {
    addToCart(nonveg);

    toast.success(`${nonveg.name} added to cart 🛒`, {
      autoClose: 2000,
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }}
  className="
    w-full
    py-2.5
    rounded-xl
    font-bold
    text-white
    bg-gradient-to-r
    from-red-600
    to-orange-500
    hover:from-red-700
    hover:to-orange-600
    transition
    duration-300
    shadow-lg
    hover:scale-105
    active:scale-95
  "
>
  🛒 Add To Cart
</button>
  </li>
));
  return (
    <>
    <div className="bg-gradient-to-r from-red-700 via-rose-600 to-orange-500 rounded-3xl p-10 mb-10 text-center text-white shadow-2xl">
  <h1 className="text-5xl font-black">
    🍗 Premium Non-Veg Collection
  </h1>

  <p className="mt-4 text-lg text-red-100">
    Fresh • Hygienic • Protein Rich • Delivered Chilled
  </p>
</div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
  {listItems}
</ol>
    </>
  )
}

export default Nonveg




