import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/context";

const DisplayCode = ({ formAnswers }) => {
  const ctx = useContext(Context);
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
  } = ctx.formAnswers;
  return (
    <div className="displayContainter">
      <section className="displayCodePage">
        {/* THE CODE WE WANT TO PRESENT TO THE USER TO CUT AND PASTE IN THEIR CODE EDITOR!  */}
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
                            color: ${fontColor};
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
                        <div>
                            <a href=${twitter}><i class="fab fa-twitter-square"></i></a>
                            <a href=${linkedIn}><i class="fab fa-linkedin"></i></a>
                            <a href=${github}><i class="fab fa-github-square"></i></a>
                        </div>
                    </main> 
                    <script src="https://kit.fontawesome.com/3ef22f007c.js" crossorigin="anonymous"></script>
                </body>
                </html>
                `}
        </pre>
      </section>
      <Link to="/main">
        <p className="editButton">Edit</p>
      </Link>
    </div>
  );
};

export default DisplayCode;
