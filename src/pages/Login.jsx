import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css';
export default function Login() {
  const [getid, setGetid] = useState('');
  const [getpw, setGetpw] =useState('');
  const navigate=useNavigate();
      useEffect(()=>{
        if(localStorage.getItem("isLoggedIn") == "true"){navigate('/')};

      }, []);


  return (


    <div className='loginContainer'>
      <h2 className='loginTitle'>LOGIN</h2>
      <div className='loginForm'>
        <label htmlFor='loginUserId'>ID</label>
        <input id="loginUserId" type="text" placeholder="Enter your id" value={getid} onChange={(e)=>setGetid(e.target.value)}/>
        <label htmlFor='loginUserPw'>PW</label>
        <input id="loginUserPw" type="password" placeholder='Enter your password' value={getpw} onChange={(e)=>setGetpw(e.target.value)}/>
        <div className='joinBox'>
          <span>will you join us?</span>
          <Link to='/Join'>JOIN</Link>
        </div>
       </div> 
        <button type='submit' className='continueButton' onClick={()=>{
          const storedUser = JSON.parse(localStorage.getItem('user'));
          if(storedUser && getid === storedUser.id && getpw === storedUser.pw){
            localStorage.setItem('isLoggedIn', 'true');        localStorage.setItem('currentUser', JSON.stringify(storedUser));
             alert("Successfully logged in.");

            navigate('/');}
          else{alert("Login failed. Please try again.")}
        }}>CONTINUE</button>
      
    </div>
  )
}
