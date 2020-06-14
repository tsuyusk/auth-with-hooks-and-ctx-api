import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from "../contexts/auth";

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  if (loading) {
    return <h1>Loading...</h1>
  }
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;