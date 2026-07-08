import React, { useContext } from 'react'

import './Groceries.css';
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

]
let listItems = groceryItems.map((grocery) =>
  <li key={grocery.id}>
    {grocery.name}
        <img src={grocery.imageurl} alt={grocery.name} width={150} height={150} />
        Price: ₹{grocery.price}
        {grocery.description}
        <button onClick={() => addToCart(grocery)}>Add To Cart</button>

  </li>
 )
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  )
}

export default Groceries

