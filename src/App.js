import './App.css';
import NotFound from './pages/notFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Works from './pages/works/Works';
import Contactus from './pages/contactus/Contactus';
import Home from './pages/home/Home';
const App = () => (
  <div className="app">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='ourworks' element={<Works />} />
        <Route path='contactus' element={<Contactus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
)


export default App;
