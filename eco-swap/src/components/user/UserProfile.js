import React from 'react';

function UserProfile() {
  const userProfileData = {
    username: 'JohnDoe123',
    email: 'johndoe@example.com',
    bio: 'I love swapping eco-friendly items!',
    location: 'New York, USA',
    joinedDate: 'September 15, 2023',
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="profile-picture">
          <img
            src="user-profile-image.jpg"
            alt="User Profile"
            className="profile-image"
          />
        </div>
        <div className="user-info">
          <h3>{userProfileData.username}</h3>
          <p>Email: {userProfileData.email}</p>
          <p>Bio: {userProfileData.bio}</p>
          <p>Location: {userProfileData.location}</p>
          <p>Joined: {userProfileData.joinedDate}</p>
        </div>
      </div>
      {/* Add more user profile content and styling here */}
    </div>
  );
}

export default UserProfile;
