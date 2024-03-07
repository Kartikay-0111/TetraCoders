
import './App.css';

import Landing_page from './components/landing_page/landing_page';
import Student_dashboard from './components/student-dashboard/student-dashboard';

import Navbar from './components/library/Navbar.jsx';


import data from './components/calendar/DataBase/data.jsx';
import Home from './components/library/home';
import Events from './components/calendar/Events/Events';
import Studentregistration from './components/login/registrationpage1';
import Experience from './components/library/ContentList.jsx';
import ChatApp from './components/chat/chat.jsx';
import Collegeregistration from './components/login/registrationpage3';
import Companyregistration from './components/login/registrationpage2';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Recruiter_Dashboard from './components/recruiter-dashboard/recruiter-dashboard';
import { useEffect } from 'react';
import Input from './components/library/input.jsx';
import Input2 from './components/library/input2.jsx';
import ContentList from './components/library/ContentList.jsx';

function App() {
  useEffect(() => {

    localStorage.setItem("events", JSON.stringify(data));
  }, [])

  return (

    // <Landing_page />

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/companyr" element={<Companyregistration />} />
          <Route path="/colleger" element={<Collegeregistration />} />
          <Route path="/studentr" element={<Studentregistration />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Landing_page />} />
          <Route path="/input" element={<Input />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/exp" element={<Experience />} />
          <Route path="/dashboard" element={<Student_dashboard />} />
          <Route path="/libhome" element={<Home />} />
          <Route path="/input2" element={<Input2 />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/exp" element={<Experience />} />
          <Route path="/dashboard" element={<Student_dashboard />} />
          <Route path="/libhome" element={<Home />} />
          <Route path="/inex" element={<ContentList />} />
          <Route path="/tpo" element={<Recruiter_Dashboard />} />
        </Routes>
    </BrowserRouter>
    </div >

  );
}

export default App;
