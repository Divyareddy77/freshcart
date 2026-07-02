import React from 'react'
interface GroceryItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}

function Groceries() {
    const groceryItems: GroceryItem[] = [
  {
    id: 1,
    name: "Rice",
    price: 70,
    imageurl: "/images/rice.jpg",
    description: "Premium quality rice",
  },
  {
    id: 2,
    name: "Wheat Flour",
    price: 50,
    imageurl: "/images/wheatflour.jpg",
    description: "Fresh whole wheat flour",
  },
  {
    id: 3,
    name: "Toor Dal",
    price: 140,
    imageurl: "/images/toordal.jpg",
    description: "Protein-rich pigeon peas",
  },
  {
    id: 4,
    name: "Cooking Oil",
    price: 180,
    imageurl: "/images/oil.jpg",
    description: "Refined sunflower oil",
  },

]
let listItems = groceryItems.map((grocery) =>
  <li>
    {grocery.name}
        <img src={grocery.imageurl} alt={grocery.name} width={150} height={150} />
        Price: ₹{grocery.price}
        {grocery.description}
  </li>
 )
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  )
}

export default Groceries
