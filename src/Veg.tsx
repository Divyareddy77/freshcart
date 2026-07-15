import { useContext} from 'react'



import type { Product } from './interfaces/Products';
import { CartContext } from './contextapi/CartContext';
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
  
  
  
function Veg() {
  // const [customerResponse,setcustomerResponse] = useState<customerResponse |null>(null)
  // useEffect(() =>{
  //   fetch("http://localhost:8080/api/customers")
  //   .then((res) => res.json())
  //   .then((data) => setcustomerResponse(data))
  //   .catch((error) => console.error("Error fetching customer ",error))
  // },[])
  const context = useContext(CartContext);
  if (!context) return null;
  const { addToCart } = context;
  const navigate = useNavigate();
  
  
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
  <li
  key={veg.id}
  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
>
  {/* Badge */}
  <div className="px-4 pt-4">
    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-md">
      ORGANIC
    </span>
  </div>

  {/* Image */}
  <div className="flex justify-center items-center h-52 py-4">
  <img
    src={veg.imageurl}
    alt={veg.name}
    className="w-44 h-44 object-cover rounded-xl"
  />
</div>

  {/* Rating */}
  <div className="flex justify-between items-center px-4">
    <span className="text-orange-500 text-xs font-semibold">
      ⚡ 10 MINS
    </span>

    <div className="flex items-center gap-1 text-yellow-500 text-sm">
      <FaStar size={12} />
      <span>4.5</span>
    </div>
  </div>

  {/* Details */}
  <div className="px-4 py-4">
    <h2 className="text-2xl font-bold text-gray-800">
      {veg.name}
    </h2>

    <p className="text-gray-500 mt-2 h-12">
      {veg.description}
    </p>

    {/* Price + Button */}
    <div className="flex justify-between items-center mt-5">
      <h2 className="text-3xl font-bold">
        ₹{veg.price}
        <span className="text-base font-medium text-gray-500">
          /kg
        </span>
      </h2>

      <button
        onClick={() => {
          const loggedInUser = JSON.parse(
            localStorage.getItem("loggedInUser") || "null"
          );

          if (!loggedInUser) {
            toast.warning("Please login first!");
            setTimeout(() => navigate("/Login"), 1500);
            return;
          }

          addToCart(veg);
          toast.success(`${veg.name} added to cart`);
        }}
        className="border-2 border-orange-400 text-orange-500 font-bold px-7 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition"
      >
        ADD +
      </button>
    </div>
  </div>
</li>
));
      
    
  
  return (
  <>
    <div className="bg-white border border-gray-200 rounded-3xl p-10 mb-10 shadow-sm text-center">
      <h1 className="text-5xl font-bold text-gray-800">
        🥦 Fresh Vegetables
      </h1>

      <p className="text-gray-500 mt-3">
        Fresh from farms • Best Quality • Delivered in Minutes
      </p>
    </div>

    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {listItems}
    </ol>
  </>
);
}
export default Veg



