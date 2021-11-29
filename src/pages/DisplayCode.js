import React from 'react'

const DisplayCode = ({ formAnswers }) => {

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
        <pre>
            {`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
                <title>Document</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Alegreya&family=Alfa+Slab+One&family=Architects+Daughter&family=Bangers&family=Comic+Neue&family=Creepster&family=Epilogue&family=Noto+Serif+Display&family=Playfair+Display&family=Roboto&family=Satisfy&family=Staatliches&display&family=Fjalla+One&display&family=Lato&display=swap');
                    .previewPage{
                        background-image: url(${backgroundImage});
                        background-size: cover;
                        font-family: ${fonts};
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .previewPage h1{
                        padding: 10px;
                        font-size: 6rem;
                    }
                    .previewPage h2{
                        font-size: 4rem;
                    }
                    .previewPage p{
                        padding: 10px 0px;
                        font-size: 2rem;
                    }
                </style>
            </head>
            <body>
                <main class="previewPage">
                    <h1>${firstName} ${lastName}</h1>
                    <h2>${subtitle}</h2>
                    <p>${socialLink}</p>
                </main> 
            </body>
            </html>
            `}
        </pre>
    )
}

export default DisplayCode
