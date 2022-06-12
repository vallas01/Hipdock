import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="loginBtn" to="/login">Log in</NavLink>
        <NavLink className="signupBtn" to="/signup">Sign up</NavLink>
      </>
    );
  }

  return (
    <div className='nav-container'>
      <div className='navLeft-container'>
        <NavLink exact to="/">
          <img className='logoNav' src='./hipsail_logo.png' alt="logo"></img>
        </NavLink>
      </div>
      <div className='navRight-container'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
