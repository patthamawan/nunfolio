import React, {useEffect ,useCallback, useState, useEventListener} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MyPhoto from '../img/me.png';
import Instagram from '../img/ig.png';
import Vimeo from '../img/vimeo.png';
import Linkedin from '../img/linkedin.png';

const About = () => {
  return(
    <div>
      <Container>
        <div className="about-me">
          <div className='title'>
                <h1>About me</h1>
          </div>
          <div className='my-info'>
          <Row>
              <Col md={6}>
              <div className='about'>
                <p>Hey there, I'm Nune, also known as Patthamawan Iteeyaporn. I've been in the creative game for almost 10 years. It all started at Staffordshire University, where I got into animation and laid the groundwork for my career.</p>
        
                <p>After working on Kid TV shows, I shifted gears into UX/UI and web design, spending a solid 5 and a half years figuring out the ropes in these creative areas. This time not only added to my professional toolkit but also introduced me to different folks in the startup world, helping me get better at teamwork, communication, and organizing stuff</p>
      
                <p>My commitment to self-motivation is manifested in a continual engagement with personal projects, ensuring a sustained relevance in the ever-evolving technological landscape. Presently, I am actively seeking new opportunities to elevate my standing within the animation domain. My aspiration lies in contributing to feature films, blending my unique fusion of creativity and technical acumen for the grandeur of the big screen. The journey ahead promises exciting prospects, and I eagerly anticipate its unfolding.</p>
              </div>
              <div className='email'>
                <a href="mailto:p.iteeyaporn@gmail.com">
                  <p>p.iteeyaporn@gmail.com</p>
                </a>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/in/p-iteeyaporn-750a3936" target="_blank">
                  <img src={Linkedin}/>
                </a>
                <a href="https://www.instagram.com/nunny_art/" target="_blank"><img src={Instagram}/></a>
                <a href="https://vimeo.com/nuniteeyaporn" target="_blank"><img src={Vimeo}/></a>
              </div>
              </Col>
              <Col md={6}>
                <div className='profilePic'>
                  <img src={MyPhoto}/>
                </div>
              
              </Col>
            </Row>
            
      
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About

