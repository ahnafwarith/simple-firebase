import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();

  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(
        error => { setUser({}) }
      )
  }

  const googleAuthorization = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        setUser(user)
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
    <div className='App'>
      {
        user.displayName ? <button onClick={googleSignOut}>Sign-OUT</button>
          :
          <button onClick={googleAuthorization}>Sign-IN</button>
      }
      <h1>Name: {user.displayName}</h1>
      <img src={user.photoURL} alt="" />
    </div>
  )
}

export default App;
