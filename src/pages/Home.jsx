import React from 'react'
import '../styles/Home.css';
import mainImg from "../assets/main.webp";
import mainMidImg1 from "../assets/shop-1.webp";
import mainMidImg2 from "../assets/shop-2.webp";
import mainMidImg3 from "../assets/shop-3.webp";
import mainStoreImg from "../assets/store1.webp";
import { Link } from 'react-router-dom';



export default function Home() {
  return (
    <div>
      <img src={mainImg} alt="메인이미지" className='mainImg'/>
      <section className='aboutSection'>
      <h4>● ABOUT</h4>
      <p>paloma wool is my name and the name of this project, which is about getting dressed and the space and ideas that are created around the act of getting dressed. Since the beginning of the project in 2014, we have mainly worked with local suppliers. This has been a priority for us and has shaped the project over the years. We have built a very close relationship with our suppliers, growing together and learning from each other season after season. </p>
      </section>
      <section className='arrivalsSection'>
      <h4>● NEW ARRIVALS</h4>
        <div className='arrivalsGrid'>
        <Link to='/ShopList'><img src={mainMidImg1} alt="메인 중간, 첫번째 이미지"/></Link>
        <Link to='/ShopList'><img src={mainMidImg2} alt="메인 중간, 두번째 이미지"/></Link>
        <Link to='/ShopList'><img src={mainMidImg3} alt="메인 중간, 세번째 이미지"/></Link>
      </div>
      </section>
      <section className='storeSection'>
      <h4>● STORE</h4>
      <img src={mainStoreImg} alt="메인 스토어 이미지" className='mainStoreImg'/>
      <div className='storeText'>
      <p>NEW YORK, 425 Broome St, open daily 11AM – 8PM</p>
      <p>BARCELONA,  Coming soon</p>
      </div>
      </section>
    </div>
  )
}
