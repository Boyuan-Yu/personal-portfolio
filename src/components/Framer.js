import { motion } from "framer-motion"
import { Container } from "react-bootstrap";
import brianIcon from "../assets/img/brian-fig-1.png";

import nlpIcon from "../assets/img/icons/icons8-nlp-64.png";
import opencvIcon from "../assets/img/icons/icons8-opencv.svg";
import deepLearningIcon from "../assets/img/icons/icons8-deep-learning-64.png";
import dataMiningIcon from "../assets/img/icons/icons8-data-mining-64.png";
import tensorflowIcon from "../assets/img/icons/icons8-tensorflow.svg";
import sklearnIcon from "../assets/img/icons/sklearn.png";
import numpyIcon from "../assets/img/icons/icons8-numpy.svg";
import pandasIcon from "../assets/img/icons/icons8-pandas.svg";
import pythonIcon from "../assets/img/icons/icons8-python.svg";
import javaIcon from "../assets/img/icons/icons8-java-48.png";
import javascriptIcon from "../assets/img/icons/icons8-javascript.svg";
import cppIcon from "../assets/img/icons/icons8-cpp-64.png";
import sqlIcon from "../assets/img/icons/icons8-sql-48.png";
import htmlIcon from "../assets/img/icons/icons8-html.svg";
import matlabIcon from "../assets/img/icons/icons8-matlab-48.png";
import reactIcon from "../assets/img/icons/icons8-react.svg";
import nodejsIcon from "../assets/img/icons/icons8-nodejs.svg";
import storybookIcon from "../assets/img/icons/storybook-icon.png";
import restIcon from "../assets/img/icons/icons8-rest-api-64.png";
import springIcon from "../assets/img/icons/icons8-spring-boot.svg";
import djangoIcon from "../assets/img/icons/icons8-django-64.png";
import gitIcon from "../assets/img/icons/icons8-git.svg";
import dockerIcon from "../assets/img/icons/icons8-docker-48.png";
import awsIcon from "../assets/img/icons/icons8-amazon-web-services.svg";
import linuxIcon from "../assets/img/icons/icons8-linux-48.png";
import firebaseIcon from "../assets/img/icons/icons8-firebase.svg";
import herokuIcon from "../assets/img/icons/icons8-heroku.svg";
import jiraIcon from "../assets/img/icons/icons8-jira.svg";




const Skill = ({ name, x, y, img }) => {
  return (
    <motion.div className='skill-icon'
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <img src={img} alt={name} />
      <p className="skill-name">{name}</p>
    </motion.div >
  )
}

export const Framer = () => {

  return (
    <section className="framer" id="framer">
      <Container>

        <h2>Skills</h2>
        <div className="bg-circularDark">
          <div className="corner-text top-left">MACHINE LEARNING</div>
          <div className="corner-text top-right">PROGRAMMING LANGUAGES</div>
          <div className="corner-text bottom-left">DEVOPS & TOOLS</div>
          <div className="corner-text bottom-right">FULL STACK DEVELOPMENT</div>
          <Skill name="Me" img={brianIcon} x={'0'} y={'0'} />

          <Skill name="NLP" img={nlpIcon} x={'-18vw'} y={'-13vh'} />
          <Skill name="OpenCV" img={opencvIcon} x={'-30vw'} y={'-10vh'} />
          <Skill name="Deep Learning" img={deepLearningIcon} x={'-24vw'} y={'-20vh'} />
          <Skill name="Data Mining" img={dataMiningIcon} x={'-25vw'} y={'-30vh'} />
          <Skill name="TensorFlow" img={tensorflowIcon} x={'-5vw'} y={'-7vh'} />
          <Skill name="SKlearn" img={sklearnIcon} x={'-12vw'} y={'-3vh'} />
          <Skill name="NumPy" img={numpyIcon} x={'-10vw'} y={'-15vh'} />
          <Skill name="Pandas" img={pandasIcon} x={'-15vw'} y={'-26vh'} />

          <Skill name="Python" img={pythonIcon} x={'3vw'} y={'-10vh'} />
          <Skill name="JavaScript" img={javascriptIcon} x={'21vw'} y={'-3vh'} />
          <Skill name="Java" img={javaIcon} x={'13vw'} y={'-13vh'} />
          <Skill name="C++" img={cppIcon} x={'6vw'} y={'-23vh'} />
          <Skill name="SQL" img={sqlIcon} x={'24vw'} y={'-28vh'} />
          <Skill name="HTML" img={htmlIcon} x={'27vw'} y={'-5vh'} />
          <Skill name="MatLab" img={matlabIcon} x={'20vw'} y={'-20vh'} />

          <Skill name="React" img={reactIcon} x={'7vw'} y={'7vh'} />
          <Skill name="NodeJS" img={nodejsIcon} x={'16vw'} y={'10vh'} />
          <Skill name="Storybook" img={storybookIcon} x={'17vw'} y={'20vh'} />
          <Skill name="REST API" img={restIcon} x={'23vw'} y={'15vh'} />
          <Skill name="Spring Boot" img={springIcon} x={'3vw'} y={'17vh'} />
          <Skill name="Django" img={djangoIcon} x={'10vw'} y={'25vh'} />

          <Skill name="Git" img={gitIcon} x={'-4vw'} y={'5vh'} />
          <Skill name="Docker" img={dockerIcon} x={'-23vw'} y={'9vh'} />
          <Skill name="AWS" img={awsIcon} x={'-10vw'} y={'12vh'} />
          <Skill name="Linux" img={linuxIcon} x={'-14vw'} y={'7vh'} />
          <Skill name="Firebase" img={firebaseIcon} x={'-17vw'} y={'20vh'} />
          <Skill name="Heroku" img={herokuIcon} x={'-5vw'} y={'17vh'} />
          <Skill name="Jira" img={jiraIcon} x={'-12vw'} y={'30vh'} />

        </div>

      </Container>
    </section>
  )
}

