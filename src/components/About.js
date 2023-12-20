import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const About = () => {

  return (
    <section className="about" id="about">
        <Container>
            <Row>

            <Col xs={6} md={4} xl={3}>
            </Col>
            <Col xs={12} md={7} xl={7}>
                <h2>About Me</h2>
                <p>I am a Full Stack Developer with a passion for learning and building new things. I have experience working with a variety of technologies and languages including Python, JavaScript, React, Node, Express, MongoDB, and more. I am currently working as a Software Engineer</p>
                <p>When I'm not coding, I enjoy playing guitar, reading, and playing video games.</p>
            </Col>
            </Row>

        </Container>
    </section>
  )
}
