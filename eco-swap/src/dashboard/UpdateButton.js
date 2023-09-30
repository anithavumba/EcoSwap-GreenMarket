import React from 'react';
import { useAuth } from '../../context/AuthContext';

function UpdateButton() {
  const { user } = useAuth();

  const handleProfileUpdate = async () => {

   const userData = {
      username: 'newUsername',
      email: 'newEmail@example.com',
      fullName: 'New Full Name',
      address: 'place',
    try {
      const userData = {

      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleProfileUpdate}>Update Profile</button>;
}

export default UpdateButton;
