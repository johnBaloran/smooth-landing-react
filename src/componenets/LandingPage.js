import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/context";

const LandingPage = ({ formAnswers, icons, isSubmitted }) => {
  const ctx = useContext(Context);
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
    fontColor,
  } = ctx.formAnswers;

  return (
    <>
      <section className="landingPage">
        <div
          // passing in the formAnswers to grab the values in order to style the landingPage in the MainSection
          className="landingScreen"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            fontFamily: `${fonts}`,
            color: fontColor,
          }}
        >
          <h1>
            {firstName} {lastName}
          </h1>
          <h2>{subtitle}</h2>
          {icons ? (
            <div className="socialIcons">
              <a href={twitter}>
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href={linkedIn}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={github}>
                <i className="fab fa-github-square"></i>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>

        <section className="previewButtons">
          <div className="preview">
            {/* If the form is submitted then route to the preview/code generation page, and if not then stay on the main page */}
            <Link
              to={!ctx.isSubmitted ? "/main" : "/preview"}
              className={!ctx.isSubmitted && "linkButton"}
            >
              <p>Preview</p>
            </Link>
          </div>
          <div className="generateCode">
            <Link
              to={!ctx.isSubmitted ? "/main" : "/code"}
              className={!ctx.isSubmitted && "linkButton"}
            >
              <p>Generate Code</p>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default LandingPage;
