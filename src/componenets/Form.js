import { useState } from "react";
import FontSelection from "./FontSelection";


import ImageSelection from "./ImageSelection";

const checkboxValues = (values) => {
  const { checked } = values;
  const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
  const disabled = checkedCount === 1;
  return [checked, disabled]
}

const Form = ({ grabObject, socialIconHandler, enableButton }) => {
  const [fontCheckboxValues, setFontCheckboxValues] = useState({ checked: {} });
  const [imageCheckboxValues, setImageCheckboxValues] = useState({ checked: {} });
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    subtitle: "",
    github: "",
    linkedIn: "",
    twitter: "",
    fonts: "",
    backgroundImage: "",
    fontColor: "#161b25",
  });

  // a submit handler that whenever form is submitted grabs the userInput object and puts it inside grabObject() from the app component
  const handleSubmit = (e) => {
    e.preventDefault();
    socialIconHandler();
    console.log("submitted");

    // function coming from App component
      grabObject(userInput);
      enableButton()
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
  const githubChangeHandler = (e) => {
    setUserInput({ ...userInput, github: e.target.value });
  };
  const linkedInChangeHandler = (e) => {
    setUserInput({ ...userInput, linkedIn: e.target.value });
  };
  const twitterChangeHandler = (e) => {
    setUserInput({ ...userInput, twitter: e.target.value });
  };
  const fontColorHandler = (e) => {
    setUserInput({ ...userInput, fontColor: e.target.value });
  }
  const backgroundImageChangeHandler = (e) => {
    setUserInput({ ...userInput, backgroundImage: e.target.value });
  };
  const fontChangeHandler = (e) => {
    setUserInput({ ...userInput, fonts: e.target.value });
  };
  const fontCheckboxHandler = (index) => {
    setFontCheckboxValues(previousState => ({
      checked: {
        ...previousState.checked,
        [index]: !previousState.checked[index]
      }
    })) 
  }
  const imageCheckboxHandler = (index) => {
    setImageCheckboxValues(previousState => ({
      checked: {
        ...previousState.checked,
        [index]: !previousState.checked[index]
      }
    }))
  }

  const[checkedOne, disabledOne] = checkboxValues(fontCheckboxValues);
  const[checkedTwo, disabledTwo] = checkboxValues(imageCheckboxValues);
  
  return (
      <form type="submit" onSubmit={handleSubmit}>
        <div className="formInputs">
          <label htmlFor="userFirstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="userName"
            onChange={firstNameChangeHandler}
            value={userInput.firstName}
            required
          />
          <label htmlFor="userLastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="userLastName"
            onChange={lastNameChangeHandler}
            value={userInput.lastName}
            required
          />
          <label htmlFor="subtitle">Heading</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            onChange={subtitleChangeHandler}
            value={userInput.subtitle}
            required
          />
          <label htmlFor="github">Github</label>
          <input
            type="url"
            id="github"
            name="github"
            onChange={githubChangeHandler}
            value={userInput.github}
            required
          />
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            type="url"
            id="linkedIn"
            name="linkedIn"
            onChange={linkedInChangeHandler}
            value={userInput.linkedIn}
            required
          />
          <label htmlFor="twitter">Twitter</label>
          <input
            type="url"
            id="twitter"
            name="twitter"
            onChange={twitterChangeHandler}
            value={userInput.twitter}
            required
          />
          <label htmlFor="fontColor">Font Color</label>
          <input 
          type="color"
          id="fontColor"
          name="fontColor"
          onChange={fontColorHandler}
          value={userInput.fontColor}
          required
          />
        </div>
        {/* button can be deleted if we want to and just use enter to submit */}
        
      <FontSelection fontChangeHandler={fontChangeHandler} checked={checkedOne} disabled={disabledOne} fontCheckboxHandler={fontCheckboxHandler} imageCheckboxHandler={imageCheckboxHandler}/>
        <ImageSelection
        backgroundImageChangeHandler={backgroundImageChangeHandler} checked={checkedTwo} disabled={disabledTwo} fontCheckboxHandler={fontCheckboxHandler} imageCheckboxHandler={imageCheckboxHandler}
        />
        <button type="submit">Submit</button>
      </form>
  );
};

export default Form;
