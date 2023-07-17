import './App.css';
import { Outlet } from "react-router-dom";
import FooterBar from './components/navigation/FooterBar';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <div className="App primary-bg-color">
      <NavBar />
      <div id='main-body'>
        <Outlet />
      </div>
      <FooterBar />
    </div>
  );
}

export default App;
