import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
       
        localStorage.setItem("accessToken", responseData.data.accessToken);

        if (responseData.data.role === "user") {
          navigate("/user-account");
        } else if (responseData.data.role === "manager") {
          navigate("/manager");
        } 
      } else {

        console.error("Login failed:", responseData.error);

        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return(
    <div>
    <h2>Log in!</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  </div>
);
}

export default LogIn;
