// EcoSwap-GreenMarket/src/components/AuthenticationExample.js

import React, { useState } from 'react';
import firebase from '../firebaseConfig';

const AuthenticationExample = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
          <button onClick={handleSignIn}>Sign In with Google</button>
        </div>
      )}
    </div>
  );
};

export default AuthenticationExample;
