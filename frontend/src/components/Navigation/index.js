import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton';

import * as sessionActions from '../../store/session';


import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      // <ProfileButton user={sessionUser} />
      <>
        {/* <button onClick={logout}>
                <img className='logout' src='./favicon.png' alt="logo"></img>
        </button> */}
        <div class="navbar">
          <div className="dropdown">
              <button class="dropbtn">
              <img className='logout' src='./favicon.png' alt="logo"></img>
              </button>
              <div class="dropdown-content">
                <a onClick={logout} href='/'>Log out</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
              </div>
          </div>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="navBtn" to="/login">Near Me</NavLink>
        <NavLink className="navBtn" to="/login">About</NavLink>
        <NavLink className="navBtn" to="/login">Earn Hipcash</NavLink>
        <NavLink className="loginBtn" to="/login">Log in</NavLink>
        <NavLink className="signupBtn" to="/signup">Sign up</NavLink>
        <button className="hostBtn" type="Submit">Start Hosting</button>
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
