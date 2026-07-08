import { useContext, useEffect, useState } from 'react'
import './Veg.css';

import { ToastContainer } from 'react-toastify';
import type { Product } from './interfaces/Products';
import { CartContext } from './contextapi/CartContext';
  
  interface customer{
    id : number
    name : string
    email : string
    status : string
  }
  interface customerResponse{
    success : boolean
    message : "string"
    code : number
    data : customer[]
  }
function Veg() {
  const [customerResponse,setcustomerResponse] = useState<customerResponse |null>(null)
  useEffect(() =>{
    fetch("http://localhost:8080/api/customers")
    .then((res) => res.json())
    .then((data) => setcustomerResponse(data))
    .catch((error) => console.error("Error fetching customer ",error))
  },[])
  const context = useContext(CartContext);
  if (!context) return null;
  const { addToCart } = context;
  
  const vegItems: Product[] =[
        {
          id: 1,
          name: "Broccoli",
          price: 120,
          imageurl: "/images/broccoli.jpg",
          description: "Rich in vitamins",

        },
        {
          id: 2,
          name: "Tomato",
          price: 30,
          imageurl: "/images/tomato.jpg",
          description: "Juicy red tomatoes",

        },
        {
          id: 3,
          name: "potato",
          price: 40,
          imageurl: "/images/potato.jpg",
          description: "Fresh farm potatoes",

        },
        {
          id: 4,
          name: "Carrots",
          price: 50,
          imageurl: "/images/carrot.jpg",
          description: "Fresh carrots",

        },
       
  {
    id: 5,
    name: "Cabbage",
    price: 40,
    description: "Fresh green cabbage",
    imageurl: "/images/cabbage.jpg",
  },
  {
    id: 6,
    name: "Cauliflower",
    price: 60,
    description: "Farm fresh cauliflower",
    imageurl: "/images/cauliflower.avif",
  },
  {
    id: 7,
    name: "Onion",
    price: 35,
    description: "Fresh red onions",
    imageurl: "/images/onion.avif",
  },
  {
    id: 8,
    name: "Capsicum",
    price: 90,
    description: "Fresh green capsicum",
    imageurl: "/images/capsicum.jpg",
  },
  {
    id: 9,
    name: "Beetroot",
    price: 55,
    description: "Healthy beetroot",
    imageurl: "/images/beetroot.avif",
  },
  {
    id: 10,
    name: "Spinach",
    price: 30,
    description: "Fresh spinach leaves",
    imageurl: "/images/spinach.avif",
  },
  {
    id: 11,
    name: "Cucumber",
    price: 35,
    description: "Cool fresh cucumbers",
    imageurl: "/images/cucumber.avif",
  },
  {
    id: 12,
    name: "Brinjal",
    price: 45,
    description: "Fresh purple brinjal",
    imageurl: "/images/brinjal.jpg",
  },
  {
    id: 13,
    name: "Bottle Gourd",
    price: 40,
    description: "Healthy bottle gourd",
    imageurl: "/images/bottlegourd.jpg",
  },
  {
    id: 14,
    name: "Pumpkin",
    price: 50,
    description: "Fresh pumpkin",
    imageurl: "/images/pumpkin.avif",
  },
  {
    id: 15,
    name: "Radish",
    price: 30,
    description: "Fresh white radish",
    imageurl: "/images/raddish.jpg",
  },
  {
    id: 16,
    name: "Ladies Finger",
    price: 60,
    description: "Tender ladies finger",
    imageurl: "/images/ladysfinger.jpg",
  },
  {
    id: 17,
    name: "Green Peas",
    price: 90,
    description: "Sweet green peas",
    imageurl: "/images/greenpeas.avif",
  },
  {
    id: 18,
    name: "Sweet Corn",
    price: 70,
    description: "Fresh sweet corn",
    imageurl: "/images/sweetcorn.avif",
  },
  {
    id: 19,
    name: "Beans",
    price: 60,
    description: "Fresh green beans",
    imageurl: "/images/beans.avif",
  },
  {
    id: 20,
    name: "Mushroom",
    price: 120,
    description: "Organic mushrooms",
    imageurl: "/images/mushrrom.avif",
  },
];

      
      let listItems = vegItems.map((veg) => ( 
      <li key ={veg.id}>
        {veg.name}
        <img src={veg.imageurl} alt={veg.name} width={150} height={150} />
        Price: ₹{veg.price}
        {veg.description}
        <button onClick={() => addToCart(veg)}>Add To Cart</button>

      </li>
    ));
      
    
  
  return (
    <>
      <ol>{listItems}</ol>
      <div className='min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-100'>
      <ToastContainer position='top-right' autoClose={3000}/>
      <h1>{customerResponse?.success}</h1>
      <h1>{customerResponse?.message}</h1>
      <h1>{customerResponse?.code}</h1>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
  <h1 className="text-3xl font-bold text-green-600 mb-8">
    Customer Details
  </h1>

  <div className="w-full max-w-4xl flex flex-wrap justify-center gap-6">
    {customerResponse?.data.map((customer) => (
      <div
        key={customer.id}
        className="bg-white shadow-lg rounded-xl p-6 w-80 border border-gray-200 hover:shadow-2xl transition duration-300"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          ID: <span className="font-normal">{customer.id}</span>
        </h2>

        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Name: <span className="font-normal">{customer.name}</span>
        </h2>

        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Email: <span className="font-normal">{customer.email}</span>
        </h2>

        <h2
          className={`text-lg font-semibold ${
            customer.status === "Active"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          Status: <span className="font-normal">{customer.status}</span>
        </h2>
      </div>
    ))}
  </div>
</div>

      </div>
      
    </>
  )
}
export default Veg



