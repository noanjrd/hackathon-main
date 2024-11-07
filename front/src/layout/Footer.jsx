import React from 'react';
import './Footer.css'; // Importation du fichier CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Section Navigation */}
                <div className="footer-section">
                <a href="/roadmap" className="footer-link">Roadmap</a>
                    <ul className="footer-list">
                      
                    </ul>
                </div>

                {/* Section Contact */}
                <div className="footer-section">
                    <h4>Contact</h4>
            
                </div>

                {/* Section Mentions légales */}
                <div className="footer-section">
                    <h4>Mentions Légales</h4>
                    <p className="footer-text">
                     
                    </p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
