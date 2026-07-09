import  { useContext } from 'react'

import { CartContext } from './contextapi/CartContext';
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
  { id: 205, name: "Sugar", price: 55, description: "Premium sugar", imageurl: "/images/Sugar.avif" },
  { id: 206, name: "Salt", price: 25, description: "Iodized salt", imageurl: "/images/Salt.avif" },
  { id: 207, name: "Turmeric Powder", price: 45, description: "Pure turmeric powder", imageurl: "/images/Turmeric Powder.avif" },
  { id: 208, name: "Red Chilli Powder", price: 80, description: "Spicy chilli powder", imageurl: "/images/Red Chilli Powder.avif" },
  { id: 209, name: "Coriander Powder", price: 60, description: "Fresh coriander powder", imageurl: "/images/Coriander Powde.jpg" },
  { id: 210, name: "Black Pepper", price: 120, description: "Whole black pepper", imageurl: "/images/Black Pepper.avif" },
  { id: 211, name: "Jeera", price: 90, description: "Whole cumin seeds", imageurl: "/images/Jeera.jpg" },
  { id: 212, name: "Mustard Seeds", price: 45, description: "Premium mustard seeds", imageurl: "/images/Mustard Seeds.avif" },
  { id: 213, name: "Poha", price: 70, description: "Fresh poha", imageurl: "/images/Poha.jpg" },
  { id: 214, name: "Rava", price: 60, description: "Fine rava", imageurl: "/images/rava.jpg" },
  { id: 215, name: "Maida", price: 50, description: "Refined flour", imageurl: "/images/Maida.jpg" },
  { id: 216, name: "Besan", price: 90, description: "Gram flour", imageurl: "/images/Besan.jpg" },
  { id: 217, name: "Green Gram", price: 130, description: "Protein-rich green gram", imageurl: "/images/Green Gram.avif" },
  { id: 218, name: "Black Gram", price: 140, description: "Premium black gram", imageurl: "/images/Black Gram.avif" },
  { id: 219, name: "Chickpeas", price: 110, description: "Healthy chickpeas", imageurl: "/images/Chickpeas.avif" },
  { id: 220, name: "Tea Powder", price: 220, description: "Premium tea powder", imageurl: "/images/Tea Powder.jpg" },
];


let listItems = groceryItems.map((grocery) => (
  <li
    key={grocery.id}
    className="bg-white rounded-3xl shadow-lg p-6 text-center flex flex-col items-center hover:shadow-xl transition-all duration-300"
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      {grocery.name}
    </h2>

    <img
      src={grocery.imageurl}
      alt={grocery.name}
      className="w-60 h-60 object-cover rounded-2xl mb-5"
    />

    <div className="space-y-2 mb-5">
      <p className="text-2xl font-bold text-green-600">
        ₹{grocery.price}
      </p>

      <p className="text-gray-600 text-lg">
        {grocery.description}
      </p>
    </div>

    <button
      onClick={() => addToCart(grocery)}
      className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xl font-semibold py-3 rounded-xl transition-all duration-300"
    >
      Add To Cart
    </button>
  </li>
));
 
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  )
}

export default Groceries

