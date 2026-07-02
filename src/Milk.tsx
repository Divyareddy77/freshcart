import React from 'react'
interface MilkItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}
function Milk() {
    const milkItems: MilkItem[] = [
  {
    id: 1,
    name: "Milk",
    price: 60,
    imageurl: "/images/milk.jpg",
    description: "Fresh full-cream milk",
  },
  {
    id: 2,
    name: "Cheese",
    price: 250,
    imageurl: "/images/cheese.jpg",
    description: "Rich and creamy cheese",
  },
  {
    id: 3,
    name: "Yogurt",
    price: 40,
    imageurl: "/images/yogurt.jpg",
    description: "Fresh plain yogurt",
  },
  {
    id: 4,
    name: "Butter",
    price: 60,
    imageurl: "/images/butter.jpg",
    description: "Pure dairy butter",
  },

];
 let listItems = milkItems.map((milk) =>
  <li>
    {milk.name}
        <img src={milk.imageurl} alt={milk.name} width={150} height={150} />
        Price: ₹{milk.price}
        {milk.description}
  </li>
 )
  return (
    <>
      <ol>{listItems}</ol>
    </>
  )
}

export default Milk
