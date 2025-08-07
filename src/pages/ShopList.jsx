import React, { useState } from 'react'
import shopData from '../data/shopData'
import '../styles/ShopList.css'
import { useNavigate } from 'react-router-dom'

export default function ShopList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex=(currentPage-1)*itemsPerPage;
  const endIndex= startIndex + itemsPerPage;
  const currentItems = shopData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(shopData.length / itemsPerPage);

  const navigate=useNavigate();

  return (
    <div className='shopWrapper'>
      <div className='paginationArea'>
        {Array.from({length: totalPages}, (_, i) => (
          <button
              key={i}
              onClick={()=>setCurrentPage(i+1)}
              className={currentPage === i+1 ? 'active' : ''}
            >
              {i}
            </button>
        ))}
      </div>
      <div className="paginationPlaceholder" />
      <div className='shoplist'>
        {currentItems.map((item)=>(
          <div key={item.id} className='shListItem' onClick={()=>navigate(`/shop/${item.id}`)}>
            <div className='shLiImgW'>
              <img src={item.images[0]} alt="첫번째 이미지" className='firstImg'/>
              <img src={item.images[1]} alt="두번째 이미지" className='secondImg'/>
            </div>
              <div className='itemText'>
              <p>{item.title}</p>
              <p className='itemPrice'>{item.price}</p>
              </div>
          </div>
        ))}
      </div>
    </div>

  )
}
