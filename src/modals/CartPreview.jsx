import React, { useEffect } from 'react'
import '../styles/CartPreview.css';
import { Link } from 'react-router-dom';
export default function CartPreview({cartItems, onClose, increaseQty, decreaseQty, deleteItem, totalPrice}) {
useEffect(() => {
  document.body.style.overflow = 'hidden';
  return () => {
    document.body.style.overflow = 'auto';
  };
}, []);

  return (
    <div className='cartPrD' onClick={onClose}>
    <div className='cartPreview' onClick={e => e.stopPropagation()}>
            <button onClick={onClose} className='cartPrClose'>CLOSE</button>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className='prIndex'>              <button className='cartClose' onClick={()=>deleteItem(index)}>x</button>
              <div className='prImg'>
              <img src={item.image} alt={item.title} /></div>
              <div className='prInfo'>
              <div className='prTopRow'>
                <p className='prTitle'>{item.title}</p>
              <div className='prColorDot' style={{backgroundColor:item.color}}></div>
                  <div className='prQty'>

              <span>Qty: {item.qty}</span>              <button onClick={()=>decreaseQty(index)}>-</button>
              <button onClick={()=>increaseQty(index)}>+</button>
            </div>
          </div>
            <p className='cartPrice'>{item.price}</p>
              </div>

            </li>
            
          ))}
        </ul>

        <span className='prSubtotal'>TOTAL &nbsp;₩ {totalPrice.toLocaleString()}</span>
        <Link to='/Cart'>
        <button className='prOrder' onClick={onClose}>ORDER</button></Link>
    </div>
    </div>
  )
}
