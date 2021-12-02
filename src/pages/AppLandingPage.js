import React from 'react'
import { Link } from 'react-router-dom'

// Our main landing page for the app. When the user clicks "Start here" it will bring them to the main section of the app to fill out the form.
const AppLandingPage = () => {
    return (
        <div className="wrapper appLandingPage">
            <h2>Welcome to <span className="logo">Smooth Landing</span>!</h2>
            {/* This Link will bring the User to the MAIN SECTION to fill out the form */}
            <Link to="/main">
                <p>Start Here</p>
            </Link>
        </div>
    )
}

export default AppLandingPage
