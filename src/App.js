import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Major from './pages/Major'
import Interest from './pages/Interest'
import './App.css';

import firebase from 'firebase'
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "**",
  authDomain: "myfirstportfolio-7fa7a.firebaseapp.com",
  projectId: "myfirstportfolio-7fa7a",
  storageBucket: "myfirstportfolio-7fa7a.appspot.com",
  messagingSenderId: "367357031523",
  appId: "**",
  measurementId: "G-CWMEBZBMBB"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
  firebase.app();
}

function App() {
  return (
    <Router>
      <div>

        <div className="Header">
          <Link to="/" id="Header-item">Home</Link>
          <Link to="/profile" id="Header-item">Profile</Link>
          <Link to="/major" id="Header-item">Major</Link>
          <Link to="/interest" id="Header-item">Interest</Link>
        </div>

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/major">
            <Major />
          </Route>
          <Route path="/interest">
            <Interest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
