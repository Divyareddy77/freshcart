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



