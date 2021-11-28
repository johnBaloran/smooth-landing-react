import React from 'react'
import { Link } from 'react-router-dom'

const AppLandingPage = () => {
    return (
        <div className="wrapper appLandingPage">
            <h2>Welcome to <span className="logo">Smooth Landing</span>!</h2>
            <Link to="/main">
                <p>Start Here</p>
            </Link>
        </div>
    )
}

export default AppLandingPage
