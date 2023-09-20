import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import RegistrationForm from './components/auth/RegistrationForm';
import Home from './components/Home';
import ItemDetail from './components/items/ItemDetail';
import ItemList from './components/items/ItemList';
import ItemSubmissionForm from './components/Forms/ItemSubmissionForm';

function App() {
  useEffect(() => {
    console.log('Firebase initialized successfully');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/home" element={<Home />} /> {/* Example route to the Home component */}
        <Route path="/items" element={<ItemList />} /> {/* Example route to the ItemList component */}
        <Route path="/items/:itemId" element={<ItemDetail />} /> {/* Example route to the ItemDetail component */}
        <Route path="/submit-item" element={<ItemSubmissionForm />} /> {/* Example route to the ItemSubmissionForm component */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
