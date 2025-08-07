import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx';
import ArchiveList from './pages/ArchiveList.jsx';
import ShopMain from './pages/ShopMain.jsx';
import Cart from './pages/Cart.jsx';
import Join from './pages/Join.jsx';
import Login from './pages/Login.jsx';
import ShopList from './pages/ShopList.jsx';
import Mypage from './pages/Mypage.jsx';
import ProtectRoute from './components/ProtectRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/ArchiveList' element={<ArchiveList/>}/>
          <Route path='Cart' element={<ProtectRoute><Cart/></ProtectRoute>}/>
          <Route path='Join' element={<Join/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='ShopList' element={<ShopList/>}/>
          <Route path='Shop/:id' element={<ShopMain/>}/>
          <Route path='Mypage' element={<ProtectRoute><Mypage/></ProtectRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
