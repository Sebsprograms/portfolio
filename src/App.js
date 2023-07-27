import './App.css';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import FooterBar from './components/navigation/FooterBar';
import NavBar from './components/navigation/NavBar';


function App() {


  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  return (
    <div className="App primary-bg-color">
      <NavBar />
      <main id='main-body' >
        <Outlet />
      </main>
      <FooterBar />
    </div>
  );
}

export default App;
