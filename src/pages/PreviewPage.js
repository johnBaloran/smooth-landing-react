import React from 'react'
import { Link } from 'react-router-dom';

const PreviewPage = ({ formAnswers }) => {
    
    const {
        firstName,
        lastName,
        subtitle,
        socialLink,
        fonts,
        backgroundImage,
        color,
    } = formAnswers;

    return (
        <div className="previewContainer">
            <section
                className="previewPage"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    fontFamily: `${fonts}`,
                }}
            >
                <h1>
                    {firstName} {lastName}
                </h1>
                <h2>{subtitle}</h2>
                <p>{socialLink}</p>
            </section>
            <Link to="/main">
                <p className="editButton">Edit</p>
            </Link>
        </div>
    )
}

export default PreviewPage
