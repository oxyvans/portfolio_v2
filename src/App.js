import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';

function App() {
  return (
    <>
      <Header />

      <div className="main">
        <Home />
        <About />
        <Qualification />
      </div>
    </>
  );
}

export default App;
