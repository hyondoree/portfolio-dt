import React from 'react'
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className='footer'>

      <div className='contact'>
        <p>Contact</p>
        <span>Tel: 01084269902 <br/>E-mail : wwilk_@naver.com</span>
      </div>
          <div className='privacy'>
          <p>Privacy</p>
          <span>대표: 신현이<br/>
      주식회사 SEOL / 05497 서울 양천구 성정길 39 12층<br/>
      사업자등록번호 : 735-88-02529/통신판매업신고 : 2025-서울양천-1234<br/>개인정보관리책임 : 신현이(info@wwilk_com) <br/>
      입금계좌 : 우리은행 1000-123-237482 주식회사 seol(SEOL INC.)</span>
    </div>
    <div className='copyright'>
            <p>&copy;2025 bonseol archive</p>
    </div>
    </div>
  )
}
