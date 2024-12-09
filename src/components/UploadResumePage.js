import React, { useState } from "react";
import "../UploadResumePage.css";
import {useNavigate} from "react-router-dom";

function UploadResumePage() {
    const navigate = useNavigate();
    const [skills, setSkills] = useState("");
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Uploaded file:", file.name);
        }
    };
    const handleShowResult = (e) => {
        e.preventDefault();
        console.log("Inserted skills:", skills);
        navigate("/result-seeker");

    };

    return (
        <div className='container'>
            <div className="upload-resume-page">
                <h2>Upload Resume:</h2>
                <div className="upload-box">
                    <div className="drag-and-drop">
                        <p>Drag and Drop file to Upload</p>
                        <span>Or</span>
                        <label className="upload-button">
                            <input type="file" accept=".pdf" onChange={handleFileUpload}/>
                            Upload
                        </label>
                    </div>
                    <p className="file-support">Supported files: PDF</p>
                </div>
                <div className="skills-section">
                    <h3>Insert Skills:</h3>
                    <input
                        type="text"
                        placeholder="Insert all of your skills here"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                    />
                    <button onClick={handleShowResult} className="show-result-button">
                        Show Result
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadResumePage;
