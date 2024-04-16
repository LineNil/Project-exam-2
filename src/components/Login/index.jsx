import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiKey from "../Api/ApiKey";

function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function fetchProfile(name) {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        "https://v2.api.noroff.dev/holidaze/profiles/" + name,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "X-Noroff-API-Key": ApiKey,
          },
        }
      );
      const responseData = await response.json();
      localStorage.setItem("profile", JSON.stringify(responseData));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function readProfileFromStorage() {
    const profile = localStorage.getItem("profile");
    if (profile) {
      console.log("Profile:", JSON.parse(profile));
    }
    return JSON.parse(profile);
  }

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
        localStorage.setItem("isLoggedIn", true); // Lagre innloggingsstatus
        fetchProfile(responseData.data.name);
        const profile = readProfileFromStorage();
        console.log(profile);
        if (profile && profile.venueManager) {
          navigate("/manager");
        } else {
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
