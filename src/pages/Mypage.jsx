import React, { useEffect, useState } from 'react';
import '../styles/Mypage.css';

export default function Mypage() {
  const user=JSON.parse(localStorage.getItem("user"));

  const [newPw, setNewPw] = useState(user.pw);
  const [newName, setNewName] = useState(user.name);
  const [newMail, setNewMail] = useState(user.mail);
  const [newPhone, setNewPhone] = useState(user.phone);
  const [newAddress, setNewAddress] = useState(user.address);
   const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.orders) {
      setOrderList(currentUser.orders);
    }
  }, []);
  return (
  <div className='myPage'>
    <div className='myPageL'>
      <h3>EDIT PROFILE</h3>
      <div className='editProf'>
        <div className='myId'>
          <p>ID</p>
          <p>{user.id}</p>
        </div>
        <div className='myPw'>
          <p>PW</p>
          <input type="password" value={newPw}onChange={(e)=>setNewPw(e.target.value)}/>
        </div>
        <div className='myMail'>
          <p>MAIL</p>
          <input type="text" value={newMail} onChange={(e)=>setNewMail(e.target.value)}/>
        </div>
        <div className='myPhone'>
          <p>Phone</p>
          <input type="text" value={newPhone} onChange={(e)=>setNewPhone(e.target.value)}/>
        </div>
        <div className='myAddress'>
          <p>ADDRESS</p>
         <input type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)}/>
        </div>
      </div>
      <button className='mySave' onClick={()=> {
      const updatedUser={
        ...user,
        pw: newPw,
        name: newName,
        mail: newMail,
        phone:newPhone,
        address:newAddress,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("Changes saved!")
      }}>SAVE</button>
    </div>
    
    <div className='myPageR'>
      <h3>ORDER LIST</h3>
      {orderList.length===0?(
        <p>You have no orders.</p>
      ) : (
        orderList.map((order, index)=>(
          <div key={order.orderId} className='orderBox'>
                      <p className="orderDate"> {new Date(order.orderDate).toLocaleString()}</p>

            
            <ul className="orderItems">
              {order.items.map((item, i) => (
                <li key={i} className="orderItem">
                  <img src={item.image} alt={item.title} className="orderImg" />
                  <div className="orderInfo">
                    <div className='orderIL'>
                    <p className="itemTitle">{item.title}</p>
                    <div className='prColorDot' style={{backgroundColor:item.color}}></div></div>
                    <p className='itemQty'>Qty: {item.qty}</p></div>
                    <p className='itemP'>{item.price}</p>
                      
                </li>
              ))}
            </ul><p className="orderTotal">Total &nbsp; ₩ {order.total.toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
    </div>
  )
}
