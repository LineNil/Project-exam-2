import React, { useEffect, useState } from "react";
import HeaderLoggedIn from "../../Layout/User";
import ApiKey from "../../Api/ApiKey";
import AvatarSettings from "../AvatarSettings";
import { Link } from "react-router-dom";

function UserAccount() {
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
      <HeaderLoggedIn />
      <h2>Welcome, {userName}!</h2>
      <p>You are registered as a {userRole}.</p>
      <p>You are on the user page</p>
      {userAvatar && <img src={userAvatar} alt="User Avatar" />}
      <AvatarSettings setUserAvatar={setUserAvatar} />
      <Link to="/user-bookings">
        <button>My Bookings</button>
      </Link>
      <Link to="/venue-list-loggedin">
        <button>View Venues</button>
      </Link>
    </div>
  );
}

export default UserAccount;

