import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLoggedOut from "../Layout/LoggedOut";
import Footer from "../Layout/Footer";
import { 
  RegisterDiv, 
  LogInRegisterBody, 
  LoginH2, 
  DontHaveAccount, 
  RegisterFree, 
  Form, 
  LabelDiv, 
  InputInfo, 
  Input, 
  ButtonStyle,
  StyledSelect, 
  ErrorMessageRegister  
} from "../Login/style";

function Register() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "", 
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  
  if (name === "email" && !value.endsWith("@stud.noroff.no")) {
    setEmailError("Please enter a valid @stud.noroff.no email");
  } else if (name === "email") {
    setEmailError("");
  }

  if (name === "password" && value.length < 8) {
    setPasswordError("Password must be at least 8 characters long");
  } else if (name === "password") {
    setPasswordError("");
  }

   if (name === "confirmPassword" && value !== formData.password) {
    setConfirmPasswordError("Passwords do not match");
  } else if (name === "confirmPassword") {
    setConfirmPasswordError("");
  }

  if (name === "name" && value.length < 3) {
    setNameError("Name must be at least 3 characters long");
  } else if (name === "name") {
    setNameError("");
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.endsWith("@stud.noroff.no")) {
      setEmailError("Please enter a valid @stud.noroff.no email");
    } else {
      setEmailError("");
    }
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
    if (confirmPassword !== formData.password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
    if (formData.name.length < 3) {
      setNameError("Name must be at least 3 characters long");
    } else {
      setNameError("");
    }
    if (emailError || passwordError || confirmPasswordError || nameError) {
      alert("Please fix the errors before submitting the form");
      return;
    }
    if (emailError || passwordError || nameError) {
      alert("Please fix the errors before submitting the form");
      return;
    }

    const dataToSend = {
      ...formData,
      role: formData.role, 
      venueManager: formData.role === "manager", 
    };

    try {
      const response = await fetch("https://v2.api.noroff.dev/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      const responseData = await response.json();
      console.log("Response from server after registration:", responseData);

      if (response.ok) {
        if (formData.role === "user") {
          navigate("/login");
        } else if (formData.role === "manager") {
          navigate("/login");
        }
      } else {
        if (responseData.errors && responseData.errors.length > 0) {
          const errorMessage = responseData.errors[0].message;
          if (errorMessage === "Profile already exists") {
            alert("User with this email already exists. Please try again with a different email.");
          } else {
            alert("An error occurred. Please try again.");
          }
        } else {
          alert("An unknown error occurred. Please try again.");
        }
      }

    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
    <HeaderLoggedOut/>
      <LogInRegisterBody>
        <RegisterDiv>
          <LoginH2>Register</LoginH2>
          <DontHaveAccount>Already have an account?</DontHaveAccount>
          <RegisterFree to="/login">Log in!</RegisterFree>
          <Form onSubmit={handleSubmit}>
            <LabelDiv>
              <InputInfo>Username:</InputInfo>
                <Input
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 required
                />
                {nameError && <ErrorMessageRegister>{nameError}</ErrorMessageRegister>}
            </LabelDiv>
            <LabelDiv>
              <InputInfo>Email:</InputInfo>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {emailError && <ErrorMessageRegister>{emailError}</ErrorMessageRegister>}
            </LabelDiv>
            <LabelDiv>
              <InputInfo>Password:</InputInfo>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {passwordError && <ErrorMessageRegister>{passwordError}</ErrorMessageRegister>}
            </LabelDiv>
            <LabelDiv>
              <InputInfo>Confirm Password:</InputInfo>
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmPasswordError && <ErrorMessageRegister>{confirmPasswordError}</ErrorMessageRegister>}
            </LabelDiv>
            <LabelDiv>
              <InputInfo>Role:</InputInfo>
              <StyledSelect 
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="manager">Manager</option>
              </StyledSelect >
            </LabelDiv>
            <ButtonStyle type="submit">Register</ButtonStyle>
          </Form>
        </RegisterDiv>
      </LogInRegisterBody>
      <Footer/>
    </div>
  );
}

export default Register;