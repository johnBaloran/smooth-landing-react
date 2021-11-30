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
        fontColor,
    } = formAnswers;

    return (
        <section className="previewContainer">
            <div
                className="previewPage"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    fontFamily: `${fonts}`,
                    color: `${fontColor}`
                }}
            >
                <h1>
                    {firstName} {lastName}
                </h1>
                <h2>{subtitle}</h2>
                {icons ? (
                    <div className="socialIconsPreview">
                        <a href={twitter}><i class="fab fa-twitter-square"></i></a>
                        <a href={linkedIn}><i class="fab fa-linkedin"></i></a>
                        <a href={github}><i class="fab fa-github-square"></i></a>
                    </div>
                ) : ""}
            </div>
            <Link to="/main">
                <p className="editButton">Edit</p>
            </Link>
        </section>
    )
}

export default PreviewPage
