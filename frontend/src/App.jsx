import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Homeold';
import Aboutus from './pages/Aboutus'; 
import Slider from './components/Slider'; // Assuming Slider component is in components folder
import MovieDetails from './components/MovieDetails'; // Assuming MovieDetails component is in components folder

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center min-h-screen bg-red-400">
        <div className="w-full max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
