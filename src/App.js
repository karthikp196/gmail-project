import React, { useState, useEffect  } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import Login from './Login';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from "./features/userSlice";

function App() {

  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
              displayName:user.displayName,
              email:user.email,
              photoUrl:user.photoURL,
          })
        )
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app_body">
            <Sidebar />

            <Switch>

              <Route path="/mail">
                <Mail />
              </Route>

              <Route path="/">
                <EmailList />
              </Route>

            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />} 
      </div>
      )}
    </Router>
  );
}

export default App;
