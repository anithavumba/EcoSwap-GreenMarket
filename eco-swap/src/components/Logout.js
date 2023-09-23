import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Logout = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // This useEffect will run when the component is mounted and immediately redirect to the login page.
  useEffect(() => {
    // Implement your logout logic here (clear authentication state, tokens, cookies, etc.).

    // Redirect to the login page
    navigate('/login'); // Use navigate for redirection
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Logout;
