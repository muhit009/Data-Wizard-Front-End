import React from "react";
import "../Footer.css";

const Footer = () => {
    return (
        <footer className="home-footer">
            <p>© Copyright for DataWizard</p>
            <nav className="footer-nav">
                <a href="#contact-us">Contact Us</a>
                <a href="#discord">Discord</a>
                <a href="#facebook">Facebook</a>
                <a href="#instagram">Instagram</a>
            </nav>
        </footer>
    );
};

export default Footer;
