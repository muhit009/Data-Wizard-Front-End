import React from "react";
import "../HomePage.css";
import HeroImage from '../hero.png'

const HomePage = () => {
    return (
        <div className="home-page">
            <main className="hero-section">
                <div className="hero-text">
                    <h1>The New Standard in Job Matching.</h1>
                    <p>
                        <b>Say goodbye to hours of searching and hello to quick, personalized job matches that make job hunting easier
                        for you and smarter for recruiters.</b>
                    </p>
                    <div className="hero-search-bar">
                        <input type="text" placeholder="Start searching..." />
                        <button>Search</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Hero" />
                </div>
            </main>
        </div>
    );
};

export default HomePage;
