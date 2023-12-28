import { Container, Row, Col, Tabs, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import computerImg from "../assets/img/computer.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";


const AnimatedNumbers = ({ number }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      console.log(latest);
    })
  }, [springValue, number]);

  return (
    <span ref={ref}>{springValue}</span>
  )

}



export const About = () => {
  const [key, setKey] = useState('education');

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col xs={6} md={4} xl={3}>
            <img src={computerImg} alt="Computer Img" />

          </Col>
          <Col xs={12} md={7} xl={7}>
            <h2>About Me</h2>
            <p>I am a Full Stack Developer with a passion for learning and building new things. I have experience working with a variety of technologies and languages including Python, JavaScript, React, Node, Express, MongoDB, and more. I am currently working as a Software Engineer</p>
            <p>When I'm not coding, I enjoy playing guitar, reading, and playing video games.</p>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}>
              <Tab eventKey="education" title="Education">
                <p>This is the Home tab content.</p>
              </Tab>
              <Tab eventKey="certification" title="Certification">
                <p>This is the Profile tab content.</p>
              </Tab>
            </Tabs>
          </Col>

          <Col>
            <Row>
              <span>
                {/* <AnimatedNumbers number={50} /> */}
              </span>

            </Row>
            <Row>
              <span>111</span>

            </Row>

          </Col>


        </Row>

      </Container>
    </section>
  )
}
