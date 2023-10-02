import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import LandingPage from './LandingPage';
import LoginForm from './components/auth/LoginForm';
import RegistrationForm from './components/auth/RegistrationForm';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
import ItemList from './components/items/ItemList';
import BuyingItems from './components/items/BuyingItems';
import ItemDetail from './components/items/ItemDetail';
import ItemSubmissionForm from './components/Forms/ItemSubmissionForm';
import Logout from './components/Logout';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authListener = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is logged in
          setUser(user);
        } else {
          // User is logged out
          setUser(null);
        }
      });
    };

    authListener();
  }, []); // No dependencies needed here

  return (
    <Router>
      <Routes>
        {/* Your route definitions */}
        {/* Example route */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* ... */}
      </Routes>
    </Router>
  );
}

export default App;
