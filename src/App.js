
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Navbar from './components/commonComponents/Navbar';
import Van from './pages/vans';
import Home from './pages/home';
import Footer from './components/commonComponents/Footer';
import VanDetails from './pages/VanDetails';

import "./server";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
