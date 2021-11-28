import React from "react";
import { Link } from "react-router-dom";

const LandingPage = ({ formAnswers }) => {
  console.log(formAnswers);
  // destructuring our object to make it easier for us to reference
  const {
    firstName,
    lastName,
    subtitle,
    socialLink,
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
        <p>{socialLink}</p>
        <div className="preview">
          <Link to="/preview">
            <p>Preview</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
