import React from 'react'
import { Link } from 'react-router-dom';

const PreviewPage = ({ formAnswers, icons }) => {

    const {
        firstName,
        lastName,
        subtitle,
        twitter,
        linkedIn,
        github,
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
                {icons ? (
                    <div>
                        <a href={twitter}><i class="fab fa-twitter-square"></i></a>
                        <a href={linkedIn}><i class="fab fa-linkedin"></i></a>
                        <a href={github}><i class="fab fa-github-square"></i></a>
                    </div>
                ) : ""}
            </section>
            <Link to="/main">
                <p className="editButton">Edit</p>
            </Link>
        </div>
    )
}

export default PreviewPage
