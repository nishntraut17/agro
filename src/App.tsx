import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ProductsPage from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Footer from './components/extra/Footer';
import Whatsapp from './components/extra/Whatsapp';
import NewNavbar from './components/navBarComponents/NewNavBar';
import Herbisides from './pages/products/Herbisides';
import Fungisides from './pages/products/Fungisides';
import Insectisides from './pages/products/Insectisides';
import MicroFertilizers from './pages/products/MicroFertilizers';
import BioFertilizers from './pages/products/BioFertilizers';
import PGR from './pages/products/PGR';
import NewLaunch from './pages/media/NewLaunch';
import CompanyNews from './pages/media/CompanyNews';
import AnnualDealerMeeting from './pages/gallery/AnnualDealerMeeting';
import FieldVisits from './pages/gallery/FieldVisits';
import VideoNews from './pages/gallery/VideoNews';
import Enquiry from './pages/enquiry/Enquiry';
import Career from './pages/career/Career';
import B2B from './pages/verticals/B2B';
import TourPhotos from './pages/gallery/TourPhotos';

function App() {
  const language = localStorage.getItem('language');
  if (!language) {
    localStorage.setItem('language', 'English');
  }
  return (
    <Provider store={store}>
      <Router>
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
          <Route path='/media/new-launch' element={<NewLaunch />} />
          <Route path='/media/company-news' element={<CompanyNews />} />
          <Route path='/gallery/annual-dealers-meet' element={<AnnualDealerMeeting />} />
          <Route path='/gallery/field-visits' element={<FieldVisits />} />
          <Route path='/gallery/tour-photos' element={<TourPhotos />} />
          <Route path='/gallery/video-news' element={<VideoNews />} />
          <Route path='/enquiry' element={<Enquiry />} />
          <Route path='/careers' element={<Career />} />
          <Route path='/verticals/b2b' element={<B2B />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
