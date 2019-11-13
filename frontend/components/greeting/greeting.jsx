import React from 'react';
import { Link } from 'react-router-dom';



const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <h1 className='intro'>It's time to ditch Skype and TeamSpeak.</h1>
      <h2 className='subIntro'>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</h2>
      <div className="session-buttons">
      <Link to="/login"><h1 className="login-button">Login</h1></Link>
      <Link to="/signup"><h1 className="signup-button">Sign up</h1></Link>
      </div>
    </nav>
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
