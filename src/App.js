// NPM MODULES
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENET IMPORTS
import AppLandingPage from "./pages/AppLandingPage";
import Header from "./componenets/Header";
import MainSection from "./pages/MainSection";
import PreviewPage from "./pages/PreviewPage";
import DisplayCode from "./pages/DisplayCode";
import Footer from "./componenets/Footer";
import Context from "./context/context";

function App() {
  // Creating state for the inputs on the forms so we can access their values and render them to the page
  const [formAnswers, setFormAnswers] = useState({});
  // creating state for the social Icons so that they don't appear with a toggle click on the submission for button
  const [socialIcons, setSocialIcons] = useState(false);
  // Create State for the form submission.
  const [isSubmitted, setIsSubmitted] = useState(false);
  // When the form isSubmitted is true, then enable the preview buttons
  const enableButton = () => {
    setIsSubmitted(true);
  };
  // a function that can be passed down as a prop to grab object made in Form component
  const grabObject = (object) => {
    setFormAnswers(object);
  };

  // creating a handler so the social icons appear when the form is submitted
  const socialIconHandler = () => {
    setSocialIcons(true);
  };

  return (
    <div className="App">
      <Context.Provider
        value={{
          isSubmitted: isSubmitted,
          grabObject: grabObject,
          formAnswers: formAnswers,
          enableButton: enableButton,
        }}
      >
        {/* HEADER componenet */}
        <Header />
        <main>
          {/* Declaring where our Routes need to go */}
          <Routes>
            {/* Route for the home page */}
            <Route path="/" element={<AppLandingPage />} />
            {/* Route for the form and Main Section of the page */}
            {/* Passing props to the MainSection componenet */}
            <Route
              path="/main"
              element={
                <MainSection
                  icons={socialIcons}
                  socialIconHandler={socialIconHandler}
                />
              }
            />
            {/* Route for the landing page preview. Pass in props from the user inputs and social icons so the appear on the preview  */}
            <Route
              path="/preview"
              element={<PreviewPage icons={socialIcons} />}
            />
            {/* Route to where the user can copy and paste code. Need to pass props from the user inputs from the form so the values show up in the code. */}
            <Route path="/code" element={<DisplayCode />} />
          </Routes>
        </main>
        {/* FOOTER COMPONENET */}
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
