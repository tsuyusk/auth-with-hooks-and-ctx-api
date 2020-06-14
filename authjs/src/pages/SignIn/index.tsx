import React from 'react';

import { useAuth } from "../../contexts/auth";

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  )
}

export default SignIn;