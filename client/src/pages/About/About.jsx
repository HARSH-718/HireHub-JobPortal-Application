import "./About.css";

import AboutHero from "../../components/about/AboutHero/AboutHero";
import OurStory from "../../components/about/OurStory/OurStory";
import MissionVision from "../../components/about/MissionVision/MissionVision";
import Values from "../../components/About/Values/Values";
import Team from "../../components/About/Team/Team";
import CTA from "../../components/Home/CTA";

function About() {
  return (
    <>
      <AboutHero />

       <OurStory /> 
       <MissionVision/>
       <Values/>
       <Team/>
       <CTA/>

     
    </>
  );
}

export default About;