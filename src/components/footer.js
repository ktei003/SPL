import React from 'react'
import './footer.css';

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-rows">
                <div className="main-font">Company</div><br/>
                <div className="minor-font">About Us<br/>Careers<br/>Partners</div>
            </div>
            <div className="footer-rows">
            <div className="main-font">Courses</div><br/>
            <div className="minor-font">Register<br/>Login<br/>Projects<br/>Teachers<br/>Parents<br/>Resources</div>
            </div>
            <div className="footer-rows">
                <div className="main-font">Support</div><br/>
                <div className="minor-font">FAQ's<br/>Helpdesk<br/>Contact Us</div>
                </div>
            <div className="footer-rows">
            <div className="main-font">Legal</div><br/>
            <div className="minor-font">Terms &amp; Conditions<br/>Privacy Policy</div>
            </div>
            <div className="footer-rows-x2">
            <div className="main-font">Level Up Works</div><br/>
            <div className="minor-font">
            LevelUp Works is an Auckland-based enteprise 
            dedicated to developing game-based learning 
            software to help teachers in response to the 
            New Zealand Digital Technologies &amp; Hangarau 
            Matihiko.<br/>
            alan@levelupworks.com<br/>
            (021) 668 185</div>
            </div>
        </div>
        
    )
}