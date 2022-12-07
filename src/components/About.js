import "./About.css"
import { Typewriter } from "react-simple-typewriter"
import Button from 'react-bootstrap/Button';

export default function About(){
    return (
        <section id="about" className='about'>
            <div className='container f_flex top'>
          <div className='left top'>
            <h4>
              Hi, 
              </h4> <h1> My name is <span className="span-id" id="span-id">REDACTED </span> </h1>  <h5>I am a student at Brown University majoring in Computer Science </h5>
              <h5> My interests lie in the following fields:
            </h5>
            <h2>
              <span>
                <Typewriter words={["Full Stack Dev", " Deep Learning.", "UI-UX Dev.", "Blockchain Dev"]} loop cursor cursorStyle='|' typeSpeed={50} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>This portfolio will display a collection of my variety of interests, experiences and projects</p> <p>This portfolio also serves as a final project for CS1300: User Interfaces and User Experiences. As a coder and designer who appreciates sleek, modern interfaces with subtle animations and easy-to-navigate pages, I attempted to portray my design preferences into my own portfolio</p>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src='images/images-2.jpg' alt='' />
            </div>
            <div>
            <button className="button" type="submit"> View GitHub </button>
            <button className="button" type="submit"> View Resume </button>
            </div>
          </div>
        </div>
        </section>
    )
}