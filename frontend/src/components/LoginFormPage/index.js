import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemo = (e) => {
    e.preventDefault();
    setCredential('Demo-lition');
    setPassword('password');
  }

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div>
          Welcome back!
        </div>
        <div>
          Let's get you outside.
        </div>

        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          {/* Username or Email */}
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            placeholder='Username or Email'
            autoComplete='new-credential'
          />
        </label>
        <label>
          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
            autoComplete='new-password'
          />
        </label>
        <button className='login-btn' type="submit">Log In</button>
        <button className='login-btn' type="submit" onClick={handleDemo}>Demo User</button>
      </form>
    </div>
  );
}

export default LoginFormPage;
