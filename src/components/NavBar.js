import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo-brian-removebg.png';
import githubIcon from '../assets/img/github-mark.svg';
import linkedInIcon from '../assets/img/iconmonstr-linkedin-4.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Brand href="/" className="ms-auto">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#framer" className={activeLink === 'framer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('framer')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text ms-auto">
              <div className="social-icon">
                <a href="https://github.com/Boyuan-Yu"><img src={githubIcon} alt="" /></a>
                <a href="https://www.linkedin.com/in/boyuan-yu/"><img src={linkedInIcon} alt="" /></a>
              </div>
              <a href="#connect" onClick={() => onUpdateActiveLink('connect')}>
                <button className="vvd">
                  <span>let's connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>



        </Container>
      </Navbar>
    </Router>
  )
}
