import  { useContext } from 'react'
import './Milk.css';
import { CartContext } from './contextapi/CartContext';
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

];
 let listItems = milkItems.map((milk) =>
  <li key={milk.id}>
    {milk.name}
        <img src={milk.imageurl} alt={milk.name} width={150} height={150} />
        Price: ₹{milk.price}
        {milk.description}
        <button onClick={() => addToCart(milk)}>Add To Cart</button>

  </li>
 )
  return (
    <>
      <ol>{listItems}</ol>
    </>
  )
}

export default Milk



