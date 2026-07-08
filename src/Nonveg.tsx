import React, { useContext } from 'react'
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
    }

  ]
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




