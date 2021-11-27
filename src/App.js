// NPM MODULES
import { useState } from "react";

// COMPONENET IMPORTS
import Header from "./componenets/Header";
import Form from "./componenets/Form";
import LandingPage from "./componenets/LandingPage";
import Footer from "./componenets/Footer";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formAnswers, setFormAnswers] = useState({});
  // a function that can be passed down as a prop to grab object made in Form component
  // change name to something more specific
  const grabObject = (object) => {
    setFormAnswers(object);
    setFormSubmitted(true);
    console.log("hello");
  };

  return (
    <div className="App">
      <Header />
      <Form grabObject={grabObject} />
      <LandingPage formAnswers={formAnswers} />
      <Footer />
    </div>
  );
}

export default App;
