import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import NavBar from './components/navbar/NavBar';

import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';




function App() {
  return (
    <div >
      <div className='container'> 
      <NavBar/>
      <Outlet />
      </div>
      <Footer />


    </div>
  )
}
export default App
