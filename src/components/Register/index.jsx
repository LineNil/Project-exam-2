import React, { useState } from "react";
import { useHistory } from "react-router-dom";



function Register() {

  const history = useHistory();

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
    history.push("/user");
  } else if (formData.role === "manager") {
    history.push("/manager");
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
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <select name="role" value={formData.role} onChange={handleChange}>
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