import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import { registerUser } from "../http-common";

export default function SignUp({ handleLogin }) {
  const regexFirstName = /^[A-Za-z]+(?:\s[a-zA-Z]+)*\s*$/;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexPhone = /^[6-9]\d{9}$/;

  const navigate = useNavigate();

  const [firstname, setFirstName] = useState('');
  const [firstnameError, setFirstNameError] = useState('');
  const [lastname, setLastName] = useState('');
  const [lastnameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFirstNameChange = (event) => {
    const value = event.target.value.trim();
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setFirstName(capitalizedValue);
    if (!regexFirstName.test(capitalizedValue)){
      setFirstNameError('Please enter a valid first name');
    } else {
      setFirstNameError('');
    }
};


  const handleLastNameChange = (event) => {
    const value = event.target.value.trim();
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setLastName(capitalizedValue);
    if (!/^[A-Za-z]+(?: [A-Za-z]+)?$/.test(capitalizedValue)) {
      setLastNameError('Please enter a valid last name');
    } else {
      setLastNameError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!regexEmail.test(event.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
    if (!regexPhone.test(event.target.value)) {
      setMobileError('Please enter a valid 10-digit mobile number');
    } else {
      setMobileError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (!regexPassword.test(event.target.value)) {
      setPasswordError('Please enter a valid password (at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character)');
    } else {
      setPasswordError('');
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!firstname || !lastname || !email || !mobile || !password) {
      alert("Please fill in all fields");
      return;
    }
    if (firstnameError || lastnameError || emailError || mobileError || passwordError) {
      alert("Please fix the errors before submitting");
      return;
    }
    try {
      const user = await registerUser({ firstname, lastname, email, mobile, password });
      console.log(user);

      setFirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setPassword('');

      handleLogin();
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className="Login_page">
      <form className="sign_up_form">
        <h1 className="register">Sign Up</h1>
        <input
          className="inpt"
          type="text"
          value={firstname}
          onChange={handleFirstNameChange}
          placeholder="Enter your first name..."
          required
        />
        {firstnameError && <p className="error-msg">{firstnameError}</p>}

        <input
          className="inpt"
          type="text"
          value={lastname}
          onChange={handleLastNameChange}
          placeholder="Enter your last name..."
          required
        />
        {lastnameError && <p className="error-msg">{lastnameError}</p>}

        <input
          className="inpt"
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email..."
          required
        />
        {emailError && <p className="error-msg">{emailError}</p>}

        <input
          className="inpt"
          type="text"
          value={mobile}
          onChange={handleMobileChange}
          placeholder="Enter your number..."
          required
        />
        {mobileError && <p className="error-msg">{mobileError}</p>}

        <input
          className="inpt"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password..."
          required
        />
        {passwordError && <p className="error-msg">{passwordError}</p>}

        <div className="signup_form_button">
          <button className="btn" onClick={handleRegister}>SignUp</button>
          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}
