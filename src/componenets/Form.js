import { useState, useEffect } from "react";
import FontSelection from "./FontSelection";
import firebase from "../firebase";

import ImageSelection from "./ImageSelection";

// Function that will disable the rest of the checkboxes in the form if one check box is checked. This prevents the user from checking too many inputs 
const checkboxValues = (values) => {
  const { checked } = values;
  const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
  const disabled = checkedCount === 1;
  return [checked, disabled]
}

// Form Function, destructuring the grabObject, socialIconHandler and enableButton functions in order to grab the values being passed into each function 
const Form = ({ grabObject, socialIconHandler, enableButton }) => {
  // Setting two seperate states for the font selection and image selection to a checked object
  const [fontCheckboxValues, setFontCheckboxValues] = useState({ checked: {} });
  const [imageCheckboxValues, setImageCheckboxValues] = useState({ checked: {} });
  // setting state for the userInputs. The whole form is an object, and each input and value are a key-value pair. Initially an empty string. 
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    subtitle: "",
    github: "",
    linkedIn: "",
    twitter: "",
    fonts: "",
    backgroundImage: "",
    // Setting initial color selection
    fontColor: "#161b25",
  });

  // Grabbing firebase and pushing the userInputs to firebase to save their information so the form doesn't reload when the user Routes to a different page. 
  useEffect(() => {
    // make a reference to our database
    const dbRef = firebase.database().ref("landingPage");
    // add event listener to watch for changes to our database
    dbRef.on("value", (response) => {
      // variable to store a new state
      const data = response.val();
      // console.log(data)
      
      
      // update state with new state
      setUserInput(data);

    });
  }, []);

  // a submit handler that whenever form is submitted grabs the userInput object and puts it inside grabObject() from the app component
  const handleSubmit = (e) => {
    e.preventDefault();
    socialIconHandler();
    // // function coming from App component
    grabObject(userInput);
    enableButton()
    const dbRef = firebase.database().ref("landingPage");
    dbRef.update(userInput);
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

  // Functions for our checkboxs. 
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

  // Function to allow the user to clear form by removing the input information from firebase
  const clearFormHandler = () => {
    const dbRef = firebase.database().ref("landingPage");
      dbRef.update({
      firstName: "",
      lastName: "",
      subtitle: "",
      github: "",
      linkedIn: "",
      twitter: "",
      fonts: "",
      backgroundImage: "",
      fontColor: "#161B25",
      id: "",
      });
  }

  const[checkedOne, disabledOne] = checkboxValues(fontCheckboxValues);
  const[checkedTwo, disabledTwo] = checkboxValues(imageCheckboxValues);
  
  return (
    // this is our form. Essentially we want to pass in every event change handler for each input. 
    // we also  want to set the value to be the property inside of the userInput object. 
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
        
      {/* for each checkbox section (component) we want to track when the user changes their selection, make sure they are only able to select one option and disable the rest */}
      <FontSelection
        fontChangeHandler={fontChangeHandler}
        checked={checkedOne}
        disabled={disabledOne}
        fontCheckboxHandler={fontCheckboxHandler}
        imageCheckboxHandler={imageCheckboxHandler}
      />
      <ImageSelection
        backgroundImageChangeHandler={backgroundImageChangeHandler}
        checked={checkedTwo}
        disabled={disabledTwo}
        fontCheckboxHandler={fontCheckboxHandler}
        imageCheckboxHandler={imageCheckboxHandler}
      />
      <div className="formButtons">
        {/* when the user click the clear form button activate the clearFormHandler */}
        <button onClick={clearFormHandler} type="button">Clear Form</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
