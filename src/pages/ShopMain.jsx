import React, { useState } from 'react'
import shopData from '../data/shopData'
import {useNavigate, useOutletContext, useParams } from 'react-router-dom'
import '../styles/ShopMain.css';

export default function ShopMain() {


   const {onAddToCart}=useOutletContext();
  const {id} =useParams();
  const item=shopData.find((el) => el.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(item.colors[0]);
  const navigate=useNavigate();
  const handleAddToCart = () =>{
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn){
      alert("please Log-in");
      navigate('/Login');
      return;
      }
    
    const newItem={
      id:item.id,
      title:item.title,
      price:item.price,
      color:selectedColor,
      qty:1,
      image:item.images[2]
    };

      onAddToCart(newItem);
  };



  return (
    <div className='shopDM'>
      <div className='dataL'>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <div className='colorOpt'>
          {item.colors.map((color, index) => (
            <div key={index} className={`colorCircle ${selectedColor === color? 'selected' : ''}`}
            style={{backgroundColor:color}}
            onClick={()=>setSelectedColor(color)}></div>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add To Bag</button>
        <p className='dataLd'>{item.detail}</p>

      </div>

      <div className='dataR'>
        <div className='dataRImg'>
        {(item.images || []).map((img, index)=>(
          <img key={index} src={img} alt={`${item.title}-${index}`} />
        ))}
        </div>
      </div>
    </div>
  )
}
