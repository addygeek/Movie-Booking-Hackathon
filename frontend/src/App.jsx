import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus'; 
//import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center min-h-screen bg-red-400">
        <div className="w-full max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
