import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Endret importen til å bruke useNavigate

function Register() {
  const navigate = useNavigate(); // Endret deklarasjonen for å bruke useNavigate i stedet for useHistory

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "", // For å lagre rollen som bruker velger
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validering av e-post
    if (!formData.email.endsWith("@stud.noroff.no")) {
      alert("Please enter a valid @stud.noroff.no email");
      return;
    }
    // Lagre dataene i localStorage
    localStorage.setItem("registrationData", JSON.stringify(formData));
    // Tilbakestill skjemaet
    setFormData({
      username: "",
      email: "",
      password: "",
      role: "",
    });
    // Omdiriger brukeren basert på rollen
    if (formData.role === "user") {
      navigate("/user-account"); // Endret bruk av navigate til å omdirigere til "/user-account"
    } else if (formData.role === "manager") {
      navigate("/manager"); 
      // Legg til logikk for omdirigering til Manager-siden
      console.log("Redirecting to Manager page");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
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
          <select name="role" value={formData.role} onChange={handleChange} required>
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
