import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "./apiService"; 
import HeaderLoggedOut from "../Layout/LoggedOut";
import { LogInRegisterBody, LogInDiv, LabelDiv, LoginH2, InputInfo, Input, DontHaveAccount, RegisterFree, ButtonStyle, Form, ErrorMessage } from "./style";
import Footer from "../Layout/Footer/index";


function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); 
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
        setError("Login failed. Please check your email and password.");
        console.error("Login failed:", responseData.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
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
          <RegisterFree to="/register">Register for free!</RegisterFree>
          <Form onSubmit={handleSubmit}>
            <LabelDiv>
             <InputInfo>Email:</InputInfo>
             <Input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
                required
             />
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
           </LabelDiv>
           <ButtonStyle type="submit">Log In</ButtonStyle>
           {error && <ErrorMessage>{error}</ErrorMessage>} 
          </Form>
        </LogInDiv> 
      </LogInRegisterBody>
      <Footer/>
    </div>
  );
}

export default LoginForm;
