import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <>
      <Header />

      <div className="main">
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
