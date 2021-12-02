// NPM MODULES
import { useState } from 'react';


// COMPONENET IMPORTS 
import Form from "../componenets/Form"
import LandingPage from "../componenets/LandingPage"

const MainSection = ({grabObject, formAnswers, socialIconHandler, icons}) => {
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const enableButton = () => {
        setIsSubmitted(true)
    }
    return (
        <div className="mainSection wrapper">
            <Form grabObject={grabObject} socialIconHandler={socialIconHandler} enableButton={enableButton} />
            <LandingPage formAnswers={formAnswers} icons={icons} isSubmitted={isSubmitted} /> 
        </div>
    )
}

export default MainSection
