import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from './contextapi/CartProvider.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
    
  </StrictMode>,
)


