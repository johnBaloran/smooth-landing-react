// NPM MODULES
import { useState } from 'react';


// COMPONENET IMPORTS 
import Form from "../componenets/Form"
import LandingPage from "../componenets/LandingPage"

// Destructuring these props (objects) in order to grab the values within them to pass to other componenets 
const MainSection = ({
    grabObject,
    formAnswers,
    socialIconHandler,
    icons
}) => {
    // Create State for the form submission. 
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    // When the form isSubmitted is true, then enable the preview buttons 
    const enableButton = () => {
        setIsSubmitted(true)
    }
    return (
        <div className="mainSection wrapper">
            {/* Form Componenet takes the inputs from the form, sets state of social icons and the state of the preview buttons */}
            <Form
                grabObject={grabObject}
                socialIconHandler={socialIconHandler}
                enableButton={enableButton}
            />
            {/* LandingPage Componenet grabs the form inputs, the icons and the state of the form submission */}
            <LandingPage
                formAnswers={formAnswers}
                icons={icons}
                isSubmitted={isSubmitted}
            />
        </div>
    )
}

export default MainSection
