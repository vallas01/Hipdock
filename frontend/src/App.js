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
import NearMe from "./components/NearMe";
import Splash from "./components/Navigation/Splash";
import Host from "./components/Host";
import Account from "./components/Account";
import UpdateDock from "./components/Account/UpdateDock";
import Booking from "./components/Booking";
import MakeBooking from "./components/Booking/MakeBooking";

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

          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/technology">
            <Technology />
          </Route>
          <Route exact path="/hipcash">
            <Hipcash />
          </Route>
          <Route exact path="/elevator">
            <ElevatorPitch />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/host">
            <Host />
          </Route>
          <Route exact path="/near">
            <NearMe />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/docks/:dockId">
            <UpdateDock />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route exact path="/booking/:dockId">
            <MakeBooking />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
