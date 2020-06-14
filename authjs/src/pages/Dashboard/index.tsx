import React from 'react';

import { useAuth } from "../../contexts/auth";

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  function handleSignOut() {
    signOut();
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{user?.name}</h2>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Dashboard;