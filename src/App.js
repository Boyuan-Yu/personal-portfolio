import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Framer } from "./components/Framer";
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Framer />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
