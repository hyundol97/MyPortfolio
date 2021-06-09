import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Major from './pages/Major'
import Interest from './pages/Interest'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import firebase from 'firebase'

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyxv877bN-Gdbq1lIR6CcGXhcI4nY0tgE",
  authDomain: "myfirstportfolio-7fa7a.firebaseapp.com",
  projectId: "myfirstportfolio-7fa7a",
  storageBucket: "myfirstportfolio-7fa7a.appspot.com",
  messagingSenderId: "367357031523",
  appId: "1:367357031523:web:f59376c3bb812195253456",
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
        <div>
          <Navbar bg="dark" variant="dark" className="Nav-bar">
            <Nav className="Nav-item">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/major">Major</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/interest">Interest</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </div>

        <div className="Footer">ⓒ Hyun Seok Song</div>

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
