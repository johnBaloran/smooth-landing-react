import { useState } from "react";
import FontSelection from "./FontSelection";

import ImageSelection from "./ImageSelection";

const Form = ({ grabObject }) => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    subtitle: "",
    socialLink: "",
    fonts: "",
    backgroundImage: "",
    color: "",
  });

  // a submit handler that whenever form is submitted grabs the userInput object and puts it inside grabObject() from the app component
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    // function coming from App component
    grabObject(userInput);
  };

  // functions that grab each value from each input and collects it in the userInput object
  const firstNameChangeHandler = (e) => {
    setUserInput({ ...userInput, firstName: e.target.value });
  };
  const lastNameChangeHandler = (e) => {
    setUserInput({ ...userInput, lastName: e.target.value });
  };
  const subtitleChangeHandler = (e) => {
    setUserInput({ ...userInput, subtitle: e.target.value });
  };
  const socialLinksChangeHandler = (e) => {
    setUserInput({ ...userInput, socialLink: e.target.value });
  };
  const backgroundImageChangeHandler = (e) => {
    setUserInput({ ...userInput, backgroundImage: e.target.value });
  };
  const fontChangeHandler = (e) => {
    console.log("clicked");
    console.log(e.target.innerText);
    setUserInput({ ...userInput, fonts: e.target.value });
  };
  console.log(userInput);

  return (
    <div className="wrapper">
      <form type="submit" onSubmit={handleSubmit}>
        <div className="formInputs">
          <label htmlFor="userFirstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="userName"
            onChange={firstNameChangeHandler}
            value={userInput.firstName}
          />
          <label htmlFor="userLastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="userLastName"
            onChange={lastNameChangeHandler}
            value={userInput.lastName}
          />
          <label htmlFor="subtitle">Heading</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            onChange={subtitleChangeHandler}
            value={userInput.subtitle}
          />
          <label htmlFor="socialLinks">Social Links</label>
          <input
            type="url"
            id="socialLinks"
            name="socialLinks"
            onChange={socialLinksChangeHandler}
            value={userInput.socialLink}
          />
        </div>
        {/* button can be deleted if we want to and just use enter to submit */}
        
        <FontSelection fontChangeHandler={fontChangeHandler} />
        <ImageSelection
          backgroundImageChangeHandler={backgroundImageChangeHandler}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
