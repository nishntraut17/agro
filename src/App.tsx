import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import ProductsPage from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';

function App() {
  const language = localStorage.getItem('language');
  if (!language) {
    localStorage.setItem('language', 'English');
  }
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
