import React from 'react';
import './navdash.css'; // You can create a CSS file for styling
import ChatApp from '../chat/chat'; 
import { IoChatboxEllipsesOutline } from "react-icons/io5"; 
import { useState } from 'react';

const PopUpComponent = ({ onClose }) => {
  return (
     <div className="chat-box-container">

       <ChatApp />
     </div>
  );
 };

const Navdash = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

 const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
 };
  return (
    <div className="navbar">
      <div className="left-icons">
        {/* Icon on the extreme left */}
        <img className="jobmate" src="logo-img.png" ></img>
      </div>
      
      <div className="right-icons">
        {/* Icon on the extreme right */}
       
                 <button className="toggle-chat-button" onClick={togglePopUp}><IoChatboxEllipsesOutline size={25} color='cyan'/></button>
      {isPopUpVisible && <PopUpComponent onClose={togglePopUp} />}
     
        {/* Spacer */}
        <span className="spacer"></span>
        {/* Button at the right */}
        <span className="right-icon">Icon right</span>
      </div>
    </div>
  );
};

export default Navdash;


