import React, { useEffect } from 'react'
import '../styles/ArchiveMain.css';
import archiveData from '../data/archiveData';

export default function ArchiveMain({ archive, onClose }) {

  useEffect (()=>{
    document.body.style.overflow='hidden';
    return () => document.body.style.overflow='auto';
  }, []);
  return (
    <div className='archiveMain'>
      <p className='close' onClick={onClose}>CLOSE X</p>
      <div className='modalContent slideUp'>
        <img src={archive.images[1]} alt={archive.title} className='arImgB'/>
        <p className='arMT1'>{archive.title}</p>
        <p className='arMT2'>{archive.date}</p>
        <div className='arcMainImg2'>
          {archive.images.map((img, index) => (
    <img key={index} src={img} alt={`${archive.title}-${index}`} />
  ))}</div>

       <p className='arcDe'>{archive.description}</p>
      </div>
    </div>
  );
}
