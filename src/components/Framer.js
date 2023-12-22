import { motion } from "framer-motion"
import { Container, Row, Col, Tabs, Tab, Nav } from "react-bootstrap";

const Skill = ({ name, x, y, img }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full absolute p-8'
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  )
}

export const Framer = () => {

  return (
    <section className="framer" id="framer">
      <Container>
        <h2>My Skills</h2>
        <div className="w-full h-full relative flex items-center justify-center rounded-full bg-circularLight">
          <Skill name="React" x={'-5vw'} y={'-10vw'} />
          <Skill name="React Native" x={'0'} y={'0'} />
        </div>
      </Container>

    </section>
  )
}

