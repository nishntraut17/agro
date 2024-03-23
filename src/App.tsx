import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navBarComponents/Navbar';
import About from './pages/About';
import ProductsPage from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';
import NewNavbar from './components/navBarComponents/NewNavBar';
import Herbisides from './pages/products/Herbisides';
import Fungisides from './pages/products/Fungisides';
import Insectisides from './pages/products/Insectisides';
import MicroFertilizers from './pages/products/MicroFertilizers';
import BioFertilizers from './pages/products/BioFertilizers';
import PGR from './pages/products/PGR';

function App() {
  const language = localStorage.getItem('language');
  if (!language) {
    localStorage.setItem('language', 'English');
  }
  return (
    <Provider store={store}>
      <Router>
        {/* <Navbar /> */}
        <NewNavbar />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/herbicides' element={<Herbisides />} />
          <Route path='/products/fungicides' element={<Fungisides />} />
          <Route path='/products/insecticides' element={<Insectisides />} />
          <Route path='/products/micro-nutrients-fertilizers' element={<MicroFertilizers />} />
          <Route path='/products/bio-fertilizers' element={<BioFertilizers />} />
          <Route path='/products/plant-growth-regulators' element={<PGR />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
