import React from "react";
import "../LoginPage.css";
import {Link, useNavigate} from "react-router-dom";
import logo from '../logo-mod.png'
const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/home");
    };

    const handleClickJobSeaker = (e) => {
        e.preventDefault();
        navigate("/create-account");
    };
    const handleClickRec = (e) => {
        e.preventDefault();
        navigate("/create-account-recruiter");
    };
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="inner-box">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Password" />
                        </div>
                        <div className="form-options">
                            <label>
                                <input type="checkbox"/> Remember me
                            </label>
                            <a href="#forgot-password">Forgot password</a>
                        </div>

                            <button type="submit" className="login-button">
                                Sign In
                            </button>

                    </form>
                </div>
            </div>

            {/* Signup section */}
            <div className="signup-section">
                <img src={logo} alt="App Logo" className="app-logo" />
                <h1>Welcome to JobScout.AI</h1>
                <p>Don't have an account?</p>
                <div className="signup-buttons">
                    <button className="signup-button" onClick={handleClickJobSeaker}>Sign Up as Job Seeker</button>
                    <button className="signup-button" onClick={handleClickRec}>Sign Up as Recruiter</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
