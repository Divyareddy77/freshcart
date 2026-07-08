import  { useContext } from 'react'
import './Nonveg.css';
import { CartContext } from './contextapi/CartContext';
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

  
  let listItems = nonVeg.map((nonveg) =>
  <li key={nonveg.id}>
        {nonveg.name}
        <img src={nonveg.imageurl} alt={nonveg.name} width={150} height={150} />
        Price: ₹{nonveg.price}
        {nonveg.description}
        <button onClick={() => addToCart(nonveg)}>Add To Cart</button>
  </li>
  )
  return (
    <>
      <ol>{listItems}</ol>
    </>
  )
}

export default Nonveg




