import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/dashboard">
                    Dashboard
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/quiz">
                                Quiz
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/generate-id-card">
                                Generate ID Card
                            </Link>
                        </li>
                    </ul>
                    <Logout />
                </div>
            </div>
        </nav>
    )
}

export default Navbar2