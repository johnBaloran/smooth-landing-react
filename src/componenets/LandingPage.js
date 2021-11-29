import React from "react"; 
import { Link } from "react-router-dom";
import { useState } from "react";

const LandingPage = ({ formAnswers, icons }) => {
  console.log(formAnswers);
  // destructuring our object to make it easier for us to reference 
   const {
    firstName,
    lastName,
    subtitle,
    github,
    linkedIn,
    twitter,
    fonts,
    backgroundImage,
    color,
  } = formAnswers;
  // style up the landing page! add divs and move it around etc.
  return (
    <>
      <section
        className="landingPage"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          fontFamily: `${fonts}`,
        }}
      >
        <h1>
          {firstName} {lastName}
        </h1>
        <h2>{subtitle}</h2>
        {icons ? (
          <div>
            <a href={twitter}><i class="fab fa-twitter-square"></i></a>
            <a href={linkedIn}><i class="fab fa-linkedin"></i></a>
            <a href={github}><i class="fab fa-github-square"></i></a>
          </div> 
        ) : "" }
        <div className="preview">
          <Link to="/preview">
            <p>Preview</p>
          </Link>
        </div>
        <div className="generateCode">
          <Link to="/code">
            <p>Generate Code</p>  
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
