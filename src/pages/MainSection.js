// NPM MODULES

// COMPONENET IMPORTS 
import Form from "../componenets/Form"
import LandingPage from "../componenets/LandingPage"

const MainSection = ({grabObject, formAnswers, socialIconHandler, icons}) => {
    console.log(grabObject)
    return (
        <div className="mainSection wrapper">
            <Form grabObject={grabObject} socialIconHandler={socialIconHandler} />
            <LandingPage formAnswers={formAnswers} icons={icons}/>
        </div>
    )
}

export default MainSection
