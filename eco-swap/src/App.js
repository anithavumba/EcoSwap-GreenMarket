import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import LandingPage from './LandingPage';
import Login from './Login'; // Updated Login import
import SignUp from './SignUp'; // Added Signup import
import Dashboard from './Dashboard';
import Logout from './Logout'; // Added Logout import

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Use LandingPage component for the landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* Use Login component for the login page */}
          <Route path="/login" element={<Login />} />

          {/* Use Signup component for the sign-up page */}
          <Route path="/signup" element={<SignUp />} />
          {/* Add the following route for the dashboard */}
          <Route path="/Dashboard" element={<Dashboard />} />

          {/* Use Logout component for the logout page */}
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>

      {/* Display user information if logged in */}
      {user && (
        <div>
          <h2>Welcome, {user.displayName || user.email}</h2>
          {/* Add any user-specific content here */}
        </div>
      )}
    </div>
  );
}

export default App;
