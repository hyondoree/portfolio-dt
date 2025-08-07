import React, { useEffect, useState } from 'react'
import '../styles/Category.css';
import { Link } from 'react-router-dom';

export default function Category({onClose}) {
  const [show, setShow]=useState(false);

  useEffect(()=>{
    const timeout=setTimeout(()=>setShow(true),50);
    return () => clearTimeout(timeout);
  }, []);



  return (
    <div className={`categoryModal ${show?'show' : ''}`}>
      <p><Link to='/' onClick={()=>onClose()}>HOME</Link></p>
      {localStorage.getItem('isLoggedIn') !== 'true' &&
       (<p ><Link to='/Login' onClick={()=>onClose()}>LOGIN</Link></p>)
      }
      
      <p><Link to='/ShopList' onClick={()=>onClose()}>SHOP</Link></p>
      <p><Link to='/ArchiveList' onClick={()=>onClose()}>ARCHIVE</Link></p>
      {localStorage.getItem('isLoggedIn') == 'true' &&
      (<p><Link to='/Mypage' onClick={()=>onClose()}>MY-PAGE</Link></p>)
      }
    
      <p><Link to='/Cart' onClick={()=>onClose()}>CART</Link></p>
      {localStorage.getItem('isLoggedIn')=='true' && (<p><Link to='/' onClick={()=>{
        onClose()
        localStorage.removeItem('isLoggedIn');

        alert("Successfully logged out.");
      }}> LOGOUT</Link></p>)}
    </div>
 
  )
}
