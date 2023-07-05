import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/aboutus';
import Home from './pages/home';
import Products from './pages/products';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './pages/cart';



function App() {
  return (
      <>
    
    

    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>

        
        
    </BrowserRouter>




    
      </>
  );
}

export default App;
