import React, { useEffect, useState } from 'react';
import shopData from '../data/shopData';
import '../styles/Cart.css';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

export default function Cart() {
  
  const { cartItems, increaseQty, decreaseQty, deleteItem, totalPrice, clearCart } = useOutletContext();

  const navigate= useNavigate();
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [addressInput, setAddressInput] = useState("");

  useEffect(()=>{
   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
   if(currentUser){
    setNameInput(currentUser.name || "");
    setPhoneInput(currentUser.phone || "");
    setAddressInput(currentUser.address || "");
   }
  }, []);

  return (
    <div className='cart'>
      <div className='cartL'>
        <h3>CART</h3>
        
        {cartItems.map((item, index) =>{
          const itemPrice = Number(item.price.replace(/[^\d]/g, ''));
          const itemTotal = itemPrice * item.qty;
          return(
          <div key={index} className='cartItem'>
            <Link to={`/shop/${item.id}`} style={{ display: 'block' }}>
            <img src={item.image} alt={item.title} /></Link>
            <div className='itemInfo'>
              <p className='cartTitle'>{item.title}</p>
            <div className='cartFlex'>
            <div className='colorDot' style={{backgroundColor:item.color}}></div>
            <div className='qty'>
              <button onClick={()=>decreaseQty(index)}>-</button>
              <button onClick={()=>increaseQty(index)}>+</button>
              <span>Qty: {item.qty}</span>
            </div>
            </div>
            <p className='cartPrice'>₩{itemTotal.toLocaleString()}</p>
            </div> <button className='cartClose' onClick={()=>deleteItem(index)}>x</button>
          </div>
        )
})}
          
          <span className='subtotal'>TOTAL &nbsp;₩ {totalPrice.toLocaleString()}</span>
      </div>
      <div className='cartR'>
        <h3>ORDER</h3>
        <div className='orderContents'>
        <p>NAME</p>
        <input type='text' value={nameInput} onChange={(e)=>setNameInput(e.target.value)} className='nameInput'/>
        <p>PHONE</p>
        <input type='text' value={phoneInput} onChange={(e)=>setPhoneInput(e.target.value)} />
        <p>ADDRESS</p>
        <input type='text' value={addressInput} onChange={(e)=>setAddressInput(e.target.value)} />
        </div>
        <button onClick={()=>{
          const currentUser = JSON.parse(localStorage.getItem('currentUser'));
          const order={
            orderId:Date.now(),
            name:nameInput,
            phone:phoneInput,
            address:addressInput,
            items:cartItems,
            total:totalPrice,
            orderDate: new Date().toISOString(),
          };

          const updatedUser = {
            ...currentUser,
            orders : [...(currentUser.orders || []), order]
          };

          localStorage.setItem('currentUser', JSON.stringify(updatedUser));
          alert('Thank you for your purchase!');

          clearCart();
          navigate('/MyPage');

        }} className='submit'>SUBMIT</button>
      </div>
    </div>
  )
}
