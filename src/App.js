
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Navbar from './components/Navbar';
import Van from './pages/vans';
import Home from './pages/home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          {/* <Route path="/van" element={<Van />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
