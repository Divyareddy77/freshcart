import React from 'react'
interface nonVegItem{
  id : number
  name : string
  price : number
  imageurl : string
  description : string
}
function Nonveg() {
  const nonVeg : nonVegItem[] =[
    {
      id : 1,
      name : "Chicken",
      price : 800,
      imageurl : "public/images/chicken.jpg",
      description : "Fresh skinless chicken"
    },
        {
      id : 2,
      name : "Mutton",
      price : 800,
      imageurl : "/images/mutton.jpg",
      description : "Premium fresh mutton"
    },
        {
      id : 3,
      name : "Fish",
      price : 800,
      imageurl : "/images/fish.jpg",
      description : "Fresh river fish"
    },
        {
      id : 4,
      name : "Eggs",
      price : 800,
      imageurl : "/images/eggs.jpg",
      description : "Farm fresh eggs"
    }

  ]
  let listItems = nonVeg.map((nonveg) =>
  <li>
    {nonveg.name}
        <img src={nonveg.imageurl} alt={nonveg.name} width={150} height={150} />
        Price: ₹{nonveg.price}
        {nonveg.description}
  </li>
  )
  return (
    <>
      <ol>{listItems}</ol>
    </>
  )
}

export default Nonveg
