import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import AccountPage from "./components/AccountPage";
import AccountPageEmp from "./components/AccountPageEmp";
import UploadResumePage from "./components/UploadResumePage";
import UploadJobPage from "./components/UploadJobPage";
import ResultPageJobSeeker from "./components/ResultPageJobSeeker";
import MatchedCandidatesPage from "./components/MatchedCandidatesPage";
import AboutSection from "./components/AboutSection";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path= '/create-account' element={<AccountPage/>} />
                <Route path= '/create-account-recruiter' element={<AccountPageEmp/>} />
                <Route path="/home"
                    element={
                        <>
                            <Header />
                            <HomePage />
                            <Footer />
                        </>
                    }
                />
                <Route path='/upload-resume' element={
                    <>
                        <Header />
                        <UploadResumePage />
                        <Footer />
                    </>
                    }
                />
                <Route path='/upload-job' element={
                    <>
                        <Header />
                        <UploadJobPage />
                        <Footer />
                    </>
                }
                />
                <Route path='/result-seeker' element={
                    <>
                        <Header />
                        <ResultPageJobSeeker />
                        <Footer />
                    </>
                }
                />
                <Route path='/matched-candidate' element={
                    <>
                        <Header />
                        <MatchedCandidatesPage />
                        <Footer />
                    </>
                }
                />
                <Route path='/about' element={
                    <>
                        <Header />
                        <AboutSection />
                        <Footer />
                    </>
                }
                />
            </Routes>
        </Router>
    );
};

export default App;
