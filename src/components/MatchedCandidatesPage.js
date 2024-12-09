import React from "react";
import "../MatchedCandidatesPage.css";

function MatchedCandidatesPage() {
    // Example data to simulate matched candidates
    const matchedCandidates = [
        {
            candidate: "John Snow",
            skills: "Java, Python, Machine Learning",
            description: "A short Candidate Description",
            matchPercentage: "92%",
        },
    ];

    return (
        <div className='container'>
            <div className="matched-candidates-page">
                {matchedCandidates.map((candidate, index) => (
                    <div key={index} className="candidate-card">
                        <div className="candidate-details">
                            <h3>{candidate.candidate}</h3>
                            <p>{candidate.skills}</p>
                            <p>{candidate.description}</p>
                        </div>
                        <div className="candidate-match">
                            <p className="match-percentage">{candidate.matchPercentage}</p>
                            <p className="match-description">This shows the matching percentage of the job to the
                                candidate</p>
                        </div>
                    </div>
                ))}
                <button className="show-more-button">Show More</button>
            </div>
        </div>
    );
}

export default MatchedCandidatesPage;
