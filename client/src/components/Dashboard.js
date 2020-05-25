import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="btn-floating btn-large teal darken-1"
        >
          <i class="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
