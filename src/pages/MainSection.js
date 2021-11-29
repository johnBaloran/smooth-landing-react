// NPM MODULES
import { useState } from "react";

// COMPONENET IMPORTS 
import Form from "../componenets/Form"
import LandingPage from "../componenets/LandingPage"

const MainSection = ({grabObject, formAnswers}) => {
    console.log(grabObject)
    return (
        <div className="mainSection wrapper">
            <Form grabObject={grabObject} />
            <LandingPage formAnswers={formAnswers} />
        </div>
    )
}

export default MainSection
