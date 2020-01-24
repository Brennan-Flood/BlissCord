import React from 'react';
import { Link } from 'react-router-dom';



const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="splash-background">
    <nav className="login-signup">
      <div className="splash-title">
        <h1 className='intro'> Start Chatting Today with BlissCord </h1> 
        <img className="splash-icon" src="https://study-fi-public.s3.amazonaws.com/discord-icon.png" />
      </div>
      <h2 className='subIntro'>Text-based live messaging app inspired by 'Discord'. Add friends, send them messages, start group chats, create servers and channels, enjoy.</h2>
      <div className="session-buttons">
      <Link to="/login"><h1 className="login-button">Login</h1></Link>
      <Link to="/signup"><h1 className="signup-button">Sign up</h1></Link>
      </div>
      
    </nav>
      <div className="splash-links">
        <h1>Created by Brennan Flood</h1>
        <a href="https://github.com/Brennan-Flood/BlissCord"><i class="fab fa-github-square"></i></a>
        <a href="https://brennan-flood.github.io/"><i class="far fa-id-card"></i></a>
        <a href="https://www.linkedin.com/in/brennan-flood/"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
  // const personalGreeting = () => (
  //   <hgroup className="header-group">
  //     <h2 className="header-name">Hi, {currentUser.username}!</h2>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //   </hgroup>
  // );

  return sessionLinks();
};


export default Splash;
