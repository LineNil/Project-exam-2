import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLoggedOut from "../Layout/LoggedOut";



function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FormData before submission:", formData);

    if (!formData.email.endsWith("@stud.noroff.no")) {
      alert("Please enter a valid @stud.noroff.no email");
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
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
    <HeaderLoggedOut/>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
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
        <label>
          Role:
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="manager">Manager</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
