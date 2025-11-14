import React from "react";
import "./index.scss";
import henriImg from '../../assets/images/henri.png';
import henriClimbImg from '../../assets/images/henri_climbing.png';
import { FiDownload } from 'react-icons/fi';

const AboutMe = () => {
  const handleButtonClick = () => {
    window.open("https://drive.google.com/file/d/1GQbC0PmpiK7lre6yr10wHFHDz30irw_f/view?usp=drive_link", '_blank');
  };

  return (
    <div className="about-me-wrapper"> {/* Add this wrapper div */}
      <div className="about-me-page" id="aboutme">
        <h3>About me</h3>
        <div className="about-me">
          {/* Add the media query here */}
          <div className="img1-wrapper">
            <img className="img1" src={henriImg} alt="Henri" />
          </div>
          <p>
          Hey there, I'm Henri, a tech enthusiast and entrepreneur from Germany. I'm currently in my third semester studying Physics at TU Munich. 
          With over five years of coding experience, I've evolved from creating 2D games with Pygame to developing full-stack applications and 
          working on data science research projects. Additionally I founded my own startup EasyComp, where I developed a webapp for climbing 
          competition management across Germany.</p>
          <img className="img11" src={henriImg} alt="Henri" />
        </div>
        <div className="about-me">
          <img className="img2" src={henriClimbImg} alt="Henri" />
          <p>
          Beyond academics and entrepreneurship, I'm deeply passionate about competitive climbing. I've competed at the national level for over 
          nine years and have represented Germany internationally. This sport has shaped my approach to problem-solving, teaching me resilience, 
          strategic thinking, and the ability to perform under pressure, qualities that directly translate to my work in technology and research. 
          When I'm not coding or climbing, you'll find me hiking in the mountains, skiing, playing volleyball or just spending time with friends.
          </p>
        </div>
        <button className="btn" onClick={handleButtonClick}>
          Download resume
          <FiDownload className="icon" size={32} />
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
