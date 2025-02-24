// // src/pages/HomePage.jsx
// import { useNavigate } from 'react-router-dom';
// import { logoutUser } from '../api';
// import UserList from '../components/UserList';

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="form-container">
//     <h2>Welcome to Dashboard</h2>
//     <button className="btn" onClick={handleLogout}>Logout</button>
//   </div>
//   );
// };

// export default HomePage;
// // ----------------------------------------

import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api';
import './dashboard.css'; // New CSS for styling
import { FaUser, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><FaUser /> Profile</li>
          <li><FaChartBar /> Analytics</li>
          <li onClick={handleLogout}><FaSignOutAlt /> Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        
        {/* Stats Section */}
        <div className="stats-container">
          <div className="card">
            <h3>Total Users</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Active Sessions</h3>
            <p>98</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$12,345</p>
          </div>
        </div>

        {/* Add Chart Section Here (Optional) */}
      </main>
    </div>
  );
};

export default HomePage;
