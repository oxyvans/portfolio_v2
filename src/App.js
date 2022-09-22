import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />

      <div className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
