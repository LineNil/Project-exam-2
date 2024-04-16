import React from "react";
import NavLoggedIn from "../Layout/LoggedIn";
function UserAccount() {
  return (
    <div>
      <NavLoggedIn/>
      <h2>Welcome, User!</h2>
      {/* Legg til innhold spesifikt for brukere her */}
    </div>
  );
}

export default UserAccount;
