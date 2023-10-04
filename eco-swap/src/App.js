import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import LandingPage from './LandingPage'; // Used LandingPage import
import login from './login'; // Used Login import
import RegistrationForm from './components/auth/RegistrationForm'; // Used RegistrationForm import
import Dashboard from './components/Dashboard'; // Used Dashboard import
import Home from './components/Home'; // Used Home import
import Search from './components/Search'; // Used Search import
import ItemList from './components/items/ItemList'; // Used ItemList import
import BuyingItems from './components/items/BuyingItems'; // Used BuyingItems import
import ItemDetail from './components/items/ItemDetail'; // Used ItemDetail import
import ItemSubmissionForm from './components/Forms/ItemSubmissionForm'; // Used ItemSubmissionForm import
import Logout from './components/Logout'; // Used Logout import

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const handlelogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/Invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        clearInputs();
        setUser(null);
      })
      .catch((error) => {
        console.error('Logout error:', error.code, error.message);
      });
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [authListener]); // Include authListener in the dependency array

  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handlelogin={handlelogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Your route definitions */}
        <Route path="/login" element={<login />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/buying" element={<BuyingItems />} />
        <Route path="/item" element={<ItemDetail />} />
        <Route path="/submit" element={<ItemSubmissionForm />} />
        <Route path="/logout" element={<Logout />} />
        {/* ... */}
      </Routes>
    </Router>
  );
}

export default App;
