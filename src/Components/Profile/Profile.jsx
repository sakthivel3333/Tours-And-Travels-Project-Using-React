import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const profileData = {
    profilePicture: 'https://via.placeholder.com/150',
    name: 'Vijay',
    age: 30,
    gender: 'Male',
    email: 'john.doe@example.com',
    mobile: '+1 234 567 890',
    address: '1234 Street Name, City, Country'
  };

  const [showEdit, setShowEdit] = useState(false);
  const [profilePicture, setProfilePicture] = useState(profileData.profilePicture);
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleEditClick = () => {
    if (newProfilePicture) {
     
      setProfilePicture(URL.createObjectURL(newProfilePicture));
      setNewProfilePicture(null); 
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePicture(file);
    }
  };

  const handleMouseEnter = () => {
    setShowEdit(true);
  };

  const handleMouseLeave = () => {
    setShowEdit(false);
  };

  return (
    <div className="profileContainer">
      <div className="profileHeader">
        <div className="profilePictureContainer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={profilePicture}
            alt="Profile"
            className="profilePicture"
          />
          {showEdit && (
            <div className="editOverlay">
              <label htmlFor="fileInput" className="editButton">
                Edit
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          )}
        </div>
        <h1 className="profileName">{profileData.name}</h1>
      </div>
      <div className="profileDetails">
        <div className="profileDetail">
          <span className="profileDetailLabel">Age:</span>
          <span className="profileDetailValue">{profileData.age}</span>
        </div>
        <div className="profileDetail">
          <span className="profileDetailLabel">Gender:</span>
          <span className="profileDetailValue">{profileData.gender}</span>
        </div>
        <div className="profileDetail">
          <span className="profileDetailLabel">Email:</span>
          <span className="profileDetailValue">{profileData.email}</span>
        </div>
        <div className="profileDetail">
          <span className="profileDetailLabel">Mobile:</span>
          <span className="profileDetailValue">{profileData.mobile}</span>
        </div>
        <div className="profileDetail">
          <span className="profileDetailLabel">Address:</span>
          <span className="profileDetailValue">{profileData.address}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
