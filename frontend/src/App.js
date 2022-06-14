import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import About from "./components/Navigation/About";
import Technology from "./components/Navigation/Technology";
import Hipcash from "./components/Navigation/Hipcash";
import ElevatorPitch from "./components/Navigation/ElevatorPitch";
import Contact from "./components/Navigation/Contact";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>
          <Route path="/hipcash">
            <Hipcash />
          </Route>
          <Route path="/elevator">
            <ElevatorPitch />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
