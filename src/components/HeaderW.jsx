import React from 'react'
import logoW from "../assets/logo-white.png";
import '../styles/Header.css';

export default function HeaderW({onLogoClick}) {
  return (
        <header>
            <img src={logoW} alt="로고 W버전" className='logo' onClick={onLogoClick}/>
        </header>
  )
}
