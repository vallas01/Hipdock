import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';


import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  const audio = new Audio('./ships_bell.wav');
  useEffect(()=>{
    audio.play()
  })

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className="navBtn" to="/login">Trips</NavLink>
        <NavLink className="navBtn" to="/login">Saves</NavLink>

        <div className="dropdown">
            <button id="logout" class="dropbtn">
              <img className='logout' src='./favicon.png' alt="logo"></img>
            </button>
            <div class="dropdown-content">
              <a href="/">Account</a>
              <a href="/about">About</a>
              <a onClick={logout} href='/'>Log out</a>
            </div>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="navBtn" to="/login">Near Me</NavLink>

        <div className="dropdown">
              <button class="aboutBtn">
                About
              </button>
              <div class="dropdown-content">
                <a href="/about">About me</a>
                {/* TODO Add a page listing your values */}
                {/* <a href="/">My values</a> */}
                <a href="/technology">Technologies</a>
                <a href="/">About this app</a>
                <a href="/">Contact info</a>
              </div>
        </div>

        <NavLink className="navBtn" to="/hipcash">Earn Hipcash</NavLink>
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
          <img className='logoNav' src='./hipdock.png' alt="logo"></img>
        </NavLink>
      </div>
      <div className='navRight-container'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
