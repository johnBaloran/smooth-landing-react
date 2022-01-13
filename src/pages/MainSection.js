// NPM MODULES

// COMPONENET IMPORTS
import Form from "../componenets/Form";
import LandingPage from "../componenets/LandingPage";

// Destructuring these props (objects) in order to grab the values within them to pass to other componenets
const MainSection = ({ socialIconHandler, icons }) => {
  return (
    <div className="mainSection wrapper">
      {/* Form Componenet takes the inputs from the form, sets state of social icons and the state of the preview buttons */}
      <Form socialIconHandler={socialIconHandler} />
      {/* LandingPage Componenet grabs the form inputs, the icons and the state of the form submission */}
      <LandingPage icons={icons} />
    </div>
  );
};

export default MainSection;
