//presentational component
import React, { useState } from "react";
import FormInput from "@components/form/FormInput";
import Button from "@components/ui/Button";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormInput
          label="Username"
          value={username}
          onInputChange={setUsername}
          type="text"
          id="username"
          placeholder="Enter your username"
          autoComplete="username"
        />
      </div>
      <div>
        <FormInput
          label="password"
          value={password}
          onInputChange={setPassword}
          type="password"
          id="password"
          placeholder="Enter your password"
          autoComplete="current-password"
        />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
