//smart component
import React from "react";
import LoginForm from "@features/authentication/components/LoginForm/LoginForm";
import { useAuth } from "@features/authentication/hooks/useAuth";
const Login = () => {
  const { login } = useAuth();
  return <LoginForm onLogin={login} />;
};

export default Login;
