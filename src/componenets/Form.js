import { useState, useEffect } from 'react';


const Form = ({images}) => {
    const [userInput, setUserInput] = useState({
        userName: "",
        subtitle: "",
        socialLink: "",
        fonts: "",
        backgroundImage: "",
        color: "",
    })

    const fonts = [
        { name: "Roboto", fontStyle: "Roboto" },
        { name: "Space Mono", fontStyle: "Space Mono" },
        { name: "Staatliches", fontStyle: "Staatliches" }
    ]

    console.log(images)
    
    return (
        <form>
            <label htmlFor="userFirstName">First Name</label>
            <input
                type="text"
                id="firstName"
                name="userName"
            />
            <label htmlFor="userLastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="userLastName"
            />
            <label htmlFor="subtitle">Heading</label>
            <input
                type="text"
                id="subtitle"
                name="subtitle"
            />
            <label htmlFor="socialLinks">Social Links</label>
            <input
                type="url"
                id="socialLinks"
                name="socialLinks"
            />
            <button>+ Add Link</button>
            <h2>Choose your Font</h2>
            {fonts.map((font) => {
                return(
                    <label htmlFor="font"><h3 style={{ fontFamily: `${font.fontStyle}` }}>{font.name}</h3></label>
                )
            })}
            <h2>Choose your Background Image</h2>
            <label>Select a Category for your Background Image</label>
            {images.map((image) => {
                return (
                    <div>
                        <img src={image.urls.regular} alt={image.description} />
                    </div>
                )
            })}
        </form>
    )
}

export default Form
