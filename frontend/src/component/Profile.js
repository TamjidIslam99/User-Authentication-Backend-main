import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Profile.css'; // Import the CSS file for additional styling

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleDeleteProfile = () => {
    fetch('http://127.0.0.1:8000/api/delete-profile/', {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${userData.token}`, // Assuming you use token-based authentication
      },
    })
    .then(response => {
      if (response.ok) {
        alert('Profile deleted successfully');
        // Clear user data
        localStorage.removeItem('user');
        setUserData(null);
        // Redirect to registration page
        navigate('/');
      } else {
        alert('Failed to delete profile');
      }
    })
    .catch(error => console.error('Error deleting profile:', error));
  };

  useEffect(() => {
    // Retrieve user's data from localStorage
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  console.log(userData)
  

  return (
    <div className="profile-page">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/billing">Billing System</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/billing">Course Info</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Log out</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="profile-container">
        <h1 className="text-center">Profile Info</h1>
        {userData && (
          <div className="card">
            <div className="card-body text-center">
              {userData.profile_photo && (
                <div className="mb-3">
                  <img src={`http://127.0.0.1:8000${userData.profile_photo}`} alt="Profile" className="img-fluid rounded-circle" style={{ width: '250px', height: '250px' }} />
                </div>
              )}
              <p><strong>Username:</strong> {userData.username}</p>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Address:</strong> {userData.address}</p>
              <p><strong>Dept:</strong> {userData.dept}</p>
              <p><strong>Designation:</strong> {userData.designation}</p>
              <p><strong>Phone:</strong> {userData.phone}</p>
              <p><strong>Bank Account No:</strong> {userData.bankaccno}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <button className="btn btn-danger mt-3" onClick={handleDeleteProfile}>Delete Profile</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
