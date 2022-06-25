import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';


import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);


  const logout = async (e) => {
    e.preventDefault();
    audio.play();
    history.push(`/`);
    await dispatch(sessionActions.logout());

  };

  const audio = new Audio('./ships_bell.wav');
  const ring = (e) => {
    audio.play();
  }



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className="navBtn" to="/booking">Book a Dock</NavLink>
        <NavLink className="navBtn" to="/host">Start Hosting</NavLink>

        <div className="dropdown">
            <button id="logout" className="dropbtn">
              <img className='logout' src='./favicon.png' alt="logo"></img>
            </button>
            <div className="dropdown-content">
              <a href="/account">My Account</a>
              <a href="/about">About</a>
              <a onClick={logout} href='/'>Log out</a>
            </div>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="navBtn" to="/near">Near Me</NavLink>

        <div className="dropdown">
              <button className="aboutBtn">
                About
              </button>
              <div className="dropdown-content">
                <a href="/elevator">About Hipdock</a>
                <a href="/about">About me</a>
                {/* TODO Add a page listing your values */}
                {/* <a href="/">My values</a> */}
                <a href="/technology">Technologies</a>
                <a href="/contact">Contact info</a>
              </div>
        </div>

        <NavLink className="navBtn" to="/hipcash">Earn Hipcash</NavLink>
        <NavLink className="loginBtn" to="/login">Log in</NavLink>
        <NavLink className="signupBtn" to="/signup">Sign up</NavLink>
        <NavLink className="hostBtn" to="/login">Start Hosting</NavLink>
      </>
    );
  }

  return (
    <div className='nav-container'>
      <div className='navLeft-container'>
        <NavLink exact to="/">
          <img onClick={ring} className='logoNav' src='./hipdock.png' alt="logo"></img>
        </NavLink>
      </div>
      <div className='navRight-container'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
