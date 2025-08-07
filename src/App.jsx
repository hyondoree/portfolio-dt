import { useLocation,
Outlet } from 'react-router-dom'
import './App.css'
import HeaderB from './components/HeaderB'
import HeaderW from './components/HeaderW'
import Footer from './components/Footer';
import { useState } from 'react';
import Category from './modals/Category';
import ArchiveList from './pages/ArchiveList';
import ProtectRoute from './components/ProtectRoute';
import CartPreview from './modals/CartPreview';



function App() {
  const location=useLocation();
  const path=location.pathname;


  const isHeaderW=(
    path === '/' || path.startsWith('/ArchiveList') || path.startsWith("/ShopMain")
  );


const [isModalOpen, setIsModalOpen] = useState(false);
const [isCartModalOpen, setIsCartModalOpen] = useState(false);
const [cartItems, setCartItems] = useState(() => {
  return JSON.parse(localStorage.getItem('cart')) || [];
}); 
const clearCart = () =>{
  setCartItems([]);
  localStorage.removeItem("cart");
}

const increaseQty = (index) => {
  const updated = [...cartItems];
  updated[index].qty += 1;
  setCartItems(updated);
  localStorage.setItem('cart', JSON.stringify(updated));
};

const decreaseQty = (index) => {
  const updated = [...cartItems];
  if (updated[index].qty > 1) {
    updated[index].qty -= 1;
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  }
};

const deleteItem = (index) => {
  const updated = cartItems.filter((_, i) => i !== index);
  setCartItems(updated);
  localStorage.setItem('cart', JSON.stringify(updated));
};

  const handleAddToCart = (newItem) => {
    const existItem = cartItems.findIndex(
      (el) => el.id === newItem.id && el.color === newItem.color
    );

    const updatedCart = [...cartItems];
    if (existItem !== -1){
      updatedCart[existItem].qty+=1;
      alert("This item is already in your cart.");
    }else{updatedCart.push(newItem);
      alert("Item added to your cart!")
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setIsCartModalOpen(true);
  }

    const totalPrice = cartItems.reduce((acc, item) => {
  const price = Number(item.price.replace(/[^\d]/g, ''));
  return acc + price * item.qty;
}, 0);

  return (
    <>
    {isHeaderW ? <HeaderW onLogoClick={()=>setIsModalOpen(!isModalOpen)} /> : <HeaderB onLogoClick={()=>setIsModalOpen(!isModalOpen)}/> }
    <Outlet context={{onAddToCart: handleAddToCart, cartItems, increaseQty, decreaseQty, deleteItem, totalPrice, clearCart}}/>
    {isModalOpen && (
    <>
      <div className={`overlay ${isModalOpen? 'show' : ''}`} onClick={()=>{setIsModalOpen(false)}} />
      <Category onClose={() => setIsModalOpen(false)} />
    </>

)}
{isCartModalOpen && <CartPreview cartItems={cartItems} onClose={() => setIsCartModalOpen(false)} increaseQty={increaseQty}
  decreaseQty={decreaseQty}
  deleteItem={deleteItem}
  totalPrice={totalPrice}/>}
    <Footer/>
    </>
  )
}

export default App
