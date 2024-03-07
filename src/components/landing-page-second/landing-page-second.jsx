import React from 'react'
import './landing-page-second.css'
import { Link } from 'react-router-dom'
function Landing_page_second() {
    return (
        <div>
            <div className="landing_page_second_cont">
                <div className="landing-2-box mybg1">
                    <div className="inner-landing">
                        <img src="/Students.png" alt="" width="25%" />
                        <h4>Students</h4>
                        <p>A centralized platform for scheduling placement interviews. </p>
                    </div>
                    <a href="/studentr"><button className="get-started-btn students">Get Started</button></a>
                </div>
                
                <div className="landing-2-box mybg3">
                    <div className="inner-landing">
                        <img src="/College.png" alt="" width="25%" />
                        <h4 className="mmyypp">TPO</h4>
                        <h6 className="myh6">Training & Placement Office</h6>
                        <p>Easily track the status of each candidate</p>
                    </div>
                   <Link to="/colleger"> <button className="get-started-btn tpo">Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Landing_page_second