import React, { useState } from "react";
import "../UploadJobPage.css";
import {useNavigate} from "react-router-dom";

function UploadJobPage() {
    const navigate = useNavigate();
    const [jobLink, setJobLink] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [candidateSkills, setCandidateSkills] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Job Details Submitted:", { jobLink, jobTitle, jobDescription, candidateSkills });
        navigate('/matched-candidate')
    };

    return (
        <div className="upload-job-page">
            <form className="upload-job-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="jobLink">Insert Job Link:</label>
                    <input
                        type="url"
                        id="jobLink"
                        placeholder="Insert here"
                        value={jobLink}
                        onChange={(e) => setJobLink(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobTitle">Insert Job Title:</label>
                    <input
                        type="text"
                        id="jobTitle"
                        placeholder="Insert title here"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobDescription">Insert Job Description:</label>
                    <textarea
                        id="jobDescription"
                        placeholder="Insert job description here"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="candidateSkills">Insert Desired Candidate Skills:</label>
                    <input
                        type="text"
                        id="candidateSkills"
                        placeholder="Insert all skills here"
                        value={candidateSkills}
                        onChange={(e) => setCandidateSkills(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Submit to Job Pool
                </button>
            </form>
        </div>
    );
}

export default UploadJobPage;
