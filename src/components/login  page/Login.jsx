import React, { useState } from 'react';
import { loginUser} from '../../api'; // Assuming you have API functions for login and registration
 
// Login Component
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
  const handleLogin = async (event) => {
    event.preventDefault();
   
    try {
      // Call API function to log in
      alert("tryin")
      const user = await loginUser({ email, password });
      alert("after post tryin"+user)
      console.log("get data"+ user)
      // Assuming the API returns the user object upon successful login
    //   onLogin(user);
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure, show error message, etc.
    }
  };
 
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email..."
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password..."
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
 
export default Login;
 