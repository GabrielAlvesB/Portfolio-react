import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import NavBar from './components/navbar/NavBar';

import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';




function App() {
  const [navBarHeight, setNavBarHeight] = useState(0);

  const updateNavBarHeight = (height) => {
    setNavBarHeight(height);
  };

  return (
    <div >
      <NavBar onNavBarHeightChange={updateNavBarHeight} />
      <div className='container' style={{ paddingTop: `${navBarHeight}px` }}>
        <Outlet />
      </div>
      <Footer />


    </div>
  )
}
export default App
