import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/brian-fig-2.png";
import { ArrowDown, ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const DefaultDelta = 120;
  const period = 3000;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(DefaultDelta);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "Machine Learning Engineer", "Android Developer"];


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(DefaultDelta / 1.7);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(DefaultDelta);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>{`Hi! I'm Brian, `} <br /><span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
                  <p>As a quick learner and a real problem solver, I've refined my skills in various programming languages, frameworks, and tools. Count on me to thrive in any technical environment! </p>
                  <a href="/Brian_Yu_Resume.pdf" download>Download My Resume <ArrowDownCircle size={25} /> </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={6} md={4} xl={3}>
            <div>
              <div className="circle">
                <img src={headerImg} alt="Header Img" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
