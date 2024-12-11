import React from "react";
import "../ResultPageJobSeeker.css";

function ResultPageJobSeeker() {

    // Example data to simulate a matched job
    const matchedJobs = [
        {
            title: "Data analyst",
            company: "Microsoft",
            description: "A short Job Description",
            matchPercentage: "85%",
        },
    ];

    return (
        <div className='container'>
            <div className="result-page">
                {matchedJobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <div className="job-details">
                            <h3>{job.title}</h3>
                            <p>{job.company}</p>
                            <p>{job.description}</p>
                        </div>
                        <div className="job-match">
                            <p className="match-percentage">{job.matchPercentage}</p>
                            <p className="match-description">This shows the matching percentage of the candidate to
                                job</p>
                        </div>
                    </div>
                ))}
                <button className="show-more-button">Show More</button>
            </div>
        </div>
    );
}

export default ResultPageJobSeeker;
