import { Button } from '@mui/material';
import React from 'react'
import "./Login.css";
import { auth } from './firebase';
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { getAuth, getRedirectResult,signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function Login() {

    const dispatch = useDispatch();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          dispatch(
              login({
                  displayName:user.displayName,
                  email:user.email,
                  photoUrl:user.photoURL,
              })
          )
          
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" />
                <Button variant="contained" color="primary" onClick={signin}>Login</Button>
            </div>
        </div>
    )
}

export default Login
