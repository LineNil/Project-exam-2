import React from "react";


function LogIn(){
  return(
    <div>
    <h2>Log in</h2>
    <form>
      <label>
        Email:
        <input
          type="email"
          name="email"
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  </div>
);
}

export default LogIn