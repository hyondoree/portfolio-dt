import React, { useState } from 'react'
import '../styles/ArchiveList.css';
import listBanner from '../assets/list-main.jpg';
import archiveData from '../data/archiveData';
import ArchiveMain from '../modals/ArchiveMain';


export default function ArchiveList() {

  const [selectedArc, setSelectedArc] = useState(null);

  return (
    <div className='archiveList'>
      <img src={listBanner} alt="리스트 배너" className='listBanner'></img>
      {archiveData.map((item)=>(
        <div key={item.id} className='listItem' >
            <p className='listTitle' onClick={()=>{setSelectedArc(item);}} >{item.title}</p>
            <div className='arLiImg' onClick={()=>{setSelectedArc(item);}} >
              {item.images.slice(0, 4).map((img, i)=>(
                <img key={i} src={img} />
              ))}
            </div>
            <div className='arLiText'>
            <p className='arLT1'>{item.description}</p>
            <p className='arMT2'>{item.date}</p>
            </div>
            <p className='arLiAbout'>●ABOUT</p>
        </div>

      ))}
      {selectedArc && (
        <>
          <ArchiveMain archive = {selectedArc} onClose={ ()=>setSelectedArc(null)}/>
        </>
      )}
    </div>
  );
}
 