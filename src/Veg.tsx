import React from 'react'
  interface VegItem{
    id : number
    name : string
    price : number
    imageurl : string
    description : string
  }
function Veg() {

      const vegItems: VegItem[] =[
        {
          id: 1,
          name: "Broccoli",
          price: 120,
          imageurl: "public/images/broccoli.jpg",
          description: "Rich in vitamins",

        },
        {
          id: 2,
          name: "Tomato",
          price: 30,
          imageurl: "public/images/tomato.jpg",
          description: "Juicy red tomatoes",

        },
        {
          id: 3,
          name: "potato",
          price: 40,
          imageurl: "public/images/potato.jpg",
          description: "Fresh farm potatoes",

        },
        {
          id: 4,
          name: "Carrots",
          price: 50,
          imageurl: "public/images/carrot.jpg",
          description: "Fresh carrots",

        }
        

      ];
      let listItems = vegItems.map((veg) => ( 
      <li>
        {veg.name}
        <img src={veg.imageurl} alt={veg.name} width={150} height={150} />
        Price: ₹{veg.price}
        {veg.description}

      </li>
    ));
      
    
  
  return (
    <>
      <ol>{listItems}</ol>

    </>
  )
}
export default Veg
