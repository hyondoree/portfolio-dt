import React from 'react'
import logoB from "../assets/logo-b.png";
import iconMy from "../assets/iconProfile.png";
import iconCart from "../assets/iconBuy.png";
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function HeaderB({onLogoClick}) {
  return (
        <header>
            <img src={logoB} alt="로고 B버전" className='logo' onClick={onLogoClick}/>
            <Link to='/Mypage'><img src={iconMy} alt="아이콘 마이페이지" className='iconMy'/></Link>
            <Link to='/Cart'><img src={iconCart} alt="아이콘 카트" className='iconCart'/></Link>
        </header>
  )
}
