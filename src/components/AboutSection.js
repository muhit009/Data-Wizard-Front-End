import React from "react";
import "../AboutSection.css";

function AboutSection() {
    return (
        <div className='container'>
            <div className="about-section">
                <div className="about-content">
                    <h2>About This Project</h2>
                    <p>
                        This project is created by the <span className="highlight">Data Wizard Group</span> as part of a
                        school
                        project. It showcases a job matching platform designed to help candidates and recruiters connect
                        seamlessly.
                    </p>
                    <p>
                        The platform is built with modern web technologies, focusing on usability, design, and
                        functionality to
                        provide a smooth user experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
