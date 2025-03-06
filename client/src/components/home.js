// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./home.css";

// function Home() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Splash />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/login" element={<LogIn />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// const Splash = () => (
//   <div className="splash-container">
//     <h1>Check!</h1>
//     <p>Make your to-do list easily</p>
//     <div className="splash-image" />
//     <div className="button-container">
//       <Link to="/signup">
//         <button className="primary-button">Sign Up</button>
//       </Link>
//       <Link to="/login">
//         <button className="secondary-button">Login</button>
//       </Link>
//     </div>
//   </div>
// );

// const SignUp = () => (
//   <div className="auth-container">
//     <h2>Let’s create your account shall we?</h2>
//     <button className="google-button">Sign Up with Google</button>
//     <p>
//       Already have an account? <Link to="/login">Login</Link>
//     </p>
//   </div>
// );

// const LogIn = () => (
//   <div className="auth-container">
//     <h2>Welcome back!</h2>
//     <button className="google-button">Login with Google</button>
//     <p>
//       Don’t have an account? <Link to="/signup">Sign Up</Link>
//     </p>
//   </div>
// );

// export default Home;

import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('splash');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="homepage-container">
      <div className="tabs-container">
        {/* Splash Screen / First Card */}
        <div className={`card ${activeTab === 'splash' ? 'active' : ''}`}>
          <div className="card-content">
            <h2>Check !</h2>
            <p>Make your to-do list easily</p>
            
            <div className="illustration">
              <img src="C:\Users\DEVANSHI\Desktop\To-Do List\To-Do-List\client\src\assets\bg.jpg" alt="Desk items with notebook" className="desk-image" />
            </div>
            
            <button className="primary-button">Sign Up</button>
            <button className="secondary-button">Login</button>
          </div>
          
          <div className="tab-indicator splash-indicator"></div>
        </div>

        {/* Sign Up Card */}
        <div className={`card ${activeTab === 'signup' ? 'active' : ''}`}>
          <div className="card-content yellow-background">
            <h2>Let's create your account shall we?</h2>
            
            <button className="google-button">
              <img src="/google-icon.svg" alt="Google" className="google-icon" />
              Sign Up with Google
            </button>
            
            <div className="login-prompt">
              <span>Already have an account? </span>
              <a href="#login" onClick={() => handleTabChange('login')}>Login</a>
            </div>
          </div>
          
          <div className="tab-indicator"></div>
        </div>

        {/* Login Card */}
        <div className={`card ${activeTab === 'login' ? 'active' : ''}`}>
          <div className="card-content yellow-background">
            <h2>Welcome back!</h2>
            
            <button className="google-button">
              <img src="/google-icon.svg" alt="Google" className="google-icon" />
              Login with Google
            </button>
            
            <div className="login-prompt">
              <span>Don't have an account already? </span>
              <a href="#signup" onClick={() => handleTabChange('signup')}>Sign Up</a>
            </div>
          </div>
          
          <div className="tab-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;