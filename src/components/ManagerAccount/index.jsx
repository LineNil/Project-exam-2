import React, { useEffect, useState } from "react";
import HeaderLoggedInManager from "../Layout/Manager";
import ApiKey from "../Api/ApiKey";
import AvatarSettings from "../UserAccount/AvatarSettings";
import { Link } from "react-router-dom";


function ManagerAccount() {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      console.log("Local Storage:", localStorage);

      const accessToken = localStorage.getItem("accessToken");
      const loggedInUserName = localStorage.getItem("loggedInUserName");

      console.log("Logged In User Name:", loggedInUserName);

      if (!accessToken || !loggedInUserName) {
        console.error("Access token or logged in user name not found in localStorage");
        return;
      }

      try {
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/profiles/${loggedInUserName}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "X-Noroff-API-Key": ApiKey,
          },
        });
        const responseData = await response.json();
        console.log(responseData.data);
        const userName = responseData.data.name;
        setUserName(userName);
        setUserRole(responseData.data.venueManager ? "Manager" : "User");
        setUserAvatar(responseData.data.avatar.url); 
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchProfile();
  }, []);

  return (
    <div>
      <HeaderLoggedInManager />
      <h2>Welcome, {userName}!</h2>
      <p>You are registered as a {userRole}.</p>
      <p>You are on the manager page</p>
      {userAvatar && <img src={userAvatar} alt="User Avatar" />}
      <AvatarSettings setUserAvatar={setUserAvatar} />
      <Link to="/my-venues">
        <button>My Venues</button>
      </Link>
      <Link to="/venue-list-loggedin-manager">
        <button>View Venues</button>
      </Link>      
      <Link to="/create-venue">
        <button>Create new venue</button>
      </Link>
    </div>
  );
}

export default ManagerAccount;

