import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  // This useEffect will run when the component is mounted and immediately redirect to the login page.
  useEffect(() => {
    // Implement your logout logic here (clear authentication state, tokens, cookies, etc.).

    // Redirect to the login page
    history.push('/login'); // Replace with the actual path to your login page
  }, [history]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Logout;
