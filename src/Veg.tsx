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

        }

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



