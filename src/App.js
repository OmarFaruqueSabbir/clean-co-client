import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import AOS from 'aos';
import 'aos/dist/aos.css'; // 
import { useEffect } from 'react';


const publicRoute = [
  {path: "/", name: "Home", Component: Home},
  {path: "/about", name: "About", Component: About},
  {path: "/services", name: "Services", Component: Services},
  {path: "/contact", name: "Contact", Component: Contact},
  {path: "/login", name: "Login", Component: Login},
];

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="">
      <Navbar>
        <Routes>
         {/* <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} /> */}

          {
          publicRoute.map(({path,Component},index) => <Route key={index} path={path} element={<Component />} />)
          }
          
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
