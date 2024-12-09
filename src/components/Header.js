import React from "react";
import "../Header.css";
import {Link, useNavigate} from "react-router-dom";
import logo from '../logo-mod.png'

const Header = () => {
    const navigate = useNavigate();

    const handleClickUploadResume = (e) => {
        e.preventDefault();

        navigate("/upload-resume");
    };
    const handleClickUploadJob = (e) => {
        e.preventDefault();

        navigate("/upload-job");
    };
    const handleClickAbout = (e) => {
        e.preventDefault();
        navigate('/about')
    }

    return (
        <header className="home-header">
            <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <img src={logo} alt="App Logo" className="logo" />
            </Link>
            <div className="search-bar">
                <input type="text" placeholder="Start searching..." />
                <button>🔍</button>
            </div>
            <nav>
                <a href="#about" onClick={handleClickAbout}>About</a>
                <div className="dropdown">
                    <button className="dropbtn">Upload ▼</button>
                    <div className="dropdown-content">
                        <a href="#upload-resume" onClick={handleClickUploadResume}>Upload Resume</a>
                        <a href="#upload-job" onClick={handleClickUploadJob}>Upload Job</a>
                    </div>
                </div>
            </nav>
            <div className="profile-icon">👤</div>
        </header>
    );
};

export default Header;
