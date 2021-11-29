// NPM MODULES
import { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom'

// COMPONENET IMPORTS
import AppLandingPage from "./pages/AppLandingPage";
import Header from "./componenets/Header";
import MainSection from "./pages/MainSection";
import PreviewPage from "./pages/PreviewPage";
import DisplayCode from "./pages/DisplayCode";
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
      <main>
          <Routes>
            <Route path="/" element={<AppLandingPage />}/>
            <Route
              path="/main"
              element={<MainSection
                grabObject={grabObject}
                formAnswers={formAnswers}
              />}
            />
            <Route path="/preview" element={<PreviewPage formAnswers={formAnswers}/> }/>
          </Routes>
      </main>
      <DisplayCode formAnswers={formAnswers}/>
      <Footer />
    </div>
  );
}

export default App;
