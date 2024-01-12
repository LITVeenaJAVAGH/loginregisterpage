import React, { useState } from 'react';
import { registerUser} from '../../api';
 
const Registration = ({ onRegister }) => {
    const [fullname, setFullName] = useState('');
    const [lastname, setLastName] = useState(' ');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
 
    const handleFullNameChange = (event) => {
      setFullName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
      };
 
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
 
    const handleRegister = async (event) => {
      event.preventDefault();
     
      try {
        // Call API function to register
        const user = await registerUser({ fullname,lastname, email,mobile, password });
        // Assuming the API returns the registered user object
        onRegister(user);
      } catch (error) {
        console.error('Registration failed:', error.message);
        // Handle registration failure, show error message, etc.
      }
    };
 
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>
            FullName:
            <input
              type="text"
              value={fullname}
              onChange={handleFullNameChange}
              placeholder="Enter your name..."
              required
            />
          </label>
          <br/>
          <label>
            LastName:
            <input
              type="text"
              value={lastname}
              onChange={handleLastNameChange}
              placeholder="Enter your name..."
              required
            />
          </label>
          <br />
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
            Mobile:
            <input
              type="text"
              value={mobile}
              onChange={handleMobileChange}
              placeholder="Enter your number..."
              required
            />
          </label>
          <br/>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
 
  export default Registration;