import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Join.css';
export default function Join() {

  const navigate=useNavigate();

  const [userid, setUserid] = useState('');
  const [userpw, setUserpw]= useState('');
  const [usermail, setUsermail]= useState('');
  const [username, setUsername]= useState('');
  const [userphone, setUserphone]= useState('');
  const [useraddress, setUseraddress]= useState('');

  return (
    <div className='joinContainer'>
      <h2 className='joinTitle'>JOIN</h2>
      <div className='joinForm'>

      <div className='joinFormL'>
        <label htmlFor='joinUserId'>ID</label>
        <input id="joinUserId" type="text" placeholder="Enter your id" value={userid} onChange={(e)=>setUserid(e.target.value)}/>
         <label htmlFor='joinUserPw'>PW</label>
        <input id="joinUserPw" type="password" placeholder='Enter your password' value={userpw} onChange={(e)=>setUserpw(e.target.value)}/>
        <label htmlFor='joinUserMail' >MAIL</label>
        <input id="joinUserMail" type="text" placeholder='Enter your e-mail address. ex)palomawool@gmail.com' value={usermail} onChange={(e)=>setUsermail(e.target.value)}/>
        </div>

        <div className='joinFormR'>
        <label htmlFor='joinUserName'>NAME</label>
        <input id="joinUserName" type="text" placeholder='Enter your name' value={username} onChange={(e)=>setUsername(e.target.value)}/>

        <label htmlFor='joinUserPhone'>PHONE</label>
        <input id="joinUserPhone" type="text" placeholder='Enter your phone-number' value={userphone} onChange={(e)=>setUserphone(e.target.value)}/>

        <label htmlFor='joinUserAddress'>ADDRESS</label>
        <input id="joinUserAddress" type="text" placeholder='Enter your address' value={useraddress} onChange={(e)=>setUseraddress(e.target.value)}/>

      </div>
      </div>
        <button type='button' className='continueButton' onClick={()=>{localStorage.setItem('user', JSON.stringify({
          id: userid, pw: userpw, mail:usermail, name:username, phone:userphone, address:useraddress,
        }))
        alert("Registration successful!");
        navigate('/Login');
        }}>CONTINUE</button>

    </div>
  )
}
