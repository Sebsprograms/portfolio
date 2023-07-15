import './App.css';
import FooterBar from './components/navigation/FooterBar';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <div className="App primary-bg-color">
      <NavBar />
      <div id='main-body'>
        {/* Future content will go here */}
      </div>
      <FooterBar />
    </div>
  );
}

export default App;
