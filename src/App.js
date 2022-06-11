import './App.css';
import FooterComponent from './components/Footer/FooterComponent';
import Navbar from './components/Navbar/Navbar';
import Person from './components/Main/Person';
import Experience from './components/Main/Experience';
import Contact from './components/Main/Contact';
import Projects from './components/Main/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-block">
        <Person />
        <Experience />
      </div>
      <Projects />
      <Contact />
      <FooterComponent />
    </div>
  );
}

export default App;
