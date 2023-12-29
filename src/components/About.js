import { Container, Row, Col, Tabs, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import computerImg from "../assets/img/computer.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";


const AnimatedNumbers = ({ number }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= number) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, number]);

  return (
    <span ref={ref}></span>
  )

}



export const About = () => {
  const [key, setKey] = useState('education');

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col >
            <img src={computerImg} alt="Computer Img" />
          </Col>
          <Col >
            <h2>About Me</h2>
            <p>I am a Full Stack Developer with a passion for learning and building new things. I have experience working with a variety of technologies and languages including Python, JavaScript, React, Node, Express, MongoDB, and more. I am currently working as a Software Engineer</p>
            <p>When I'm not coding, I enjoy playing guitar, reading, and playing video games.</p>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}>
              <Tab eventKey="experience" title="Experience">
                <p><strong>{'\u2022'}Full Stack Developer</strong><br />
                  Enciv <em>2023/07 - Present</em></p>
                <p><strong>{'\u2022'}Machine Learning Engineer</strong><br />
                  Intelligent Precision Instrument <em>2021/01 - 2021/06</em></p>
                <p><strong>{'\u2022'}Quality Assurance Engineer Intern</strong><br />
                  GZY Information Technology <em>2019/05 - 2019/08</em></p>
              </Tab>
              <Tab eventKey="education" title="Education">
                <p><strong>{'\u2022'} Northeastern University</strong><br />
                  Master of Science in Computer Science <em>2021 - 2023</em></p>
                <p><strong>{'\u2022'} University of California, San Diego</strong><br />
                  Bachelor of Science in Computer Science <em>2016 - 2019</em></p>
              </Tab>

            </Tabs>
          </Col>

          <Col>
            <Row>
              <span className="number">
                <AnimatedNumbers number={6} />+
              </span>
              <span className="name">Years of experience</span>
            </Row>
            <Row>
              <span className="number">
                <AnimatedNumbers number={30} />+
              </span>
              <span className="name">Projects Compeled</span>
            </Row>
            <Row>
              <span className="number">
                <AnimatedNumbers number={6} />+
              </span>
              <span className="name">Years of experience</span>
            </Row>

          </Col>
        </Row>

      </Container>
    </section>
  )
}
