import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          The diversity of cuisines around the world reflects the richness of
          different cultures and their unique culinary traditions. From street
          food to gourmet dining, food offers a spectrum of experiences,
          appealing to various tastes and preferences.
        </p>
        <p className="primary-text">
          Beyond its nutritional value, food is often associated with emotions,
          memories, and shared experiences. Meals can bring people together,
          fostering connections and creating lasting memories.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
            Watch video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
