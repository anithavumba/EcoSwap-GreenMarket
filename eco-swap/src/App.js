import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

// Import your components
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
	// eslint-disable-next-line
	const auth = getAuth(firebaseApp);

	function App() {
	  useEffect(() => {
	    console.log('Firebase initialized successfully');
	  }, []);

	  return (
	    <Router>
	      <Routes>
		{/* Landing Page */}
		<Route path="/" element={<LandingPage />} />

		{/* Login and Registration Routes */}
		<Route path="/login" element={<LoginForm />} />
		<Route path="/register" element={<RegistrationForm />} />

		{/* Dashboard Route */}
		<Route path="/dashboard" element={<Dashboard />} />

		{/* Search Route */}
        <Route path="/search" element={<Search />} />

        {/* Listing Items Route */}
        <Route path="/list-items" element={<ItemList />} />

        {/* Buying Items Route */}
        <Route path="/buy-items" element={<BuyingItems />} />

        {/* Item Details Route */}
        <Route path="/items/:itemId" element={<ItemDetail />} />

        {/* Item Submission Route */}
        <Route path="/submit-item" element={<ItemSubmissionForm />} />

        {/* Logout Route */}
        <Route path="/logout" element={<Logout />} />

        {/* If none of the above routes match, redirect to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
