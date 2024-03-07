import * as React from 'react'
import './student-dashboard.css'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  



function Student_dashboard() {
   
        const [value, onChange] = useState(new Date());
        return (
        <div className=''>
            <div className="student-dashboard-cont">
                <div className="calendar">


                <Calendar onChange={onChange} showWeekNumbers value={value} />
      

                </div>

                <div className="my-div">
                    <div className="upcoming-interview">
                        <h3>Upcoming Interview</h3>
                        <h2><span>k</span>nimbus.com</h2>
                        <p>7 March, 2024</p>
                    </div>
                    <div className="application-deadlines">
                        <div className="left">
                            <img src="/clock.png" alt="" width="40%" />
                        </div>
                        <div className="right">
                            <h2>Scheduled Assignments</h2>
                            <h3>2 Problem Statements from AutoDesk Interview</h3>
                        </div>
                    </div>
                    <div className ="mylibrary">
                        <a href="/libhome">
                        <h3>
                            Library
                        </h3>
                        <p className="desc-lib">
                            Dive into a plethora of extremely helpful material orchestrated by your alumnis like Experiences, Important interview questions and study material.

                        </p>
                        </a>
                    </div>
                </div>
                <div className="chat">
                
                <div className="companies-visited">
                    <h2>Companies visiting in upcoming week</h2>
                    <hr />
                    <div className="company-logo-cont">
                        <div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div>
                        <div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div><div className="company-logo">
                            <img src="/Autodesk-logo.png" alt="" width="34%" />
                            <p>Autodesk</p>
                        </div>
                    </div>
                   
                </div>
                
            </div>
            
        </div>
        </div>
    );
}

export default Student_dashboard