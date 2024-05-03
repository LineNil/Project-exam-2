// LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "./apiService"; 
import HeaderLoggedOut from "../Layout/LoggedOut";
import { LogInRegisterBody, LogInDiv, LabelDiv, LoginH2, InputInfo, Input, DontHaveAccount, RegisterFree } from "./style";


function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        localStorage.setItem("accessToken", responseData.data.accessToken);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedInUserName", responseData.data.name);
        console.log("Logged In User Name:", responseData.data.name);
        const profile = await fetchProfile(responseData.data.name);
        console.log(profile);
        if (profile && profile.venueManager) {
          console.log("Navigating to manager page...");
          navigate("/manager");
        } else {
          console.log("Navigating to user account page...");
          navigate("/user-account");
        }
      } else {
        console.error("Login failed:", responseData.error);
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <HeaderLoggedOut />
      <LogInRegisterBody>
      <LogInDiv>
      <LoginH2>Log in!</LoginH2>
      <DontHaveAccount>Don't have an account?</DontHaveAccount>
      <RegisterFree>Register for free today!</RegisterFree>
      <form onSubmit={handleSubmit}>
        <LabelDiv>


        <label>
          <InputInfo>
          Email:
          </InputInfo>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

        </label>
        </LabelDiv>



<LabelDiv>
<label>
       <InputInfo>
       Password:
        </InputInfo>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
</LabelDiv>
    
        <button type="submit">Log In</button>
      </form>
        </LogInDiv> 

      </LogInRegisterBody>
      
    </div>
  );
}

export default LoginForm;
