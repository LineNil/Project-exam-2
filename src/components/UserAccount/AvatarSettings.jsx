import React, { useState } from "react";
import ApiKey from "../Api/ApiKey";

const AvatarSettings = ({ userAvatar, setUserAvatar }) => {
  const [newAvatarUrl, setNewAvatarUrl] = useState("");

  const handleAvatarChange = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const loggedInUserName = localStorage.getItem("loggedInUserName");

      if (!accessToken || !loggedInUserName) {
        console.error("Access token or logged in user name not found in localStorage");
        return;
      }

      const response = await fetch(`https://v2.api.noroff.dev/holidaze/profiles/${loggedInUserName}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "X-Noroff-API-Key": ApiKey,
        },
        body: JSON.stringify({
          avatar: {
            url: newAvatarUrl,
            alt: "User Avatar",
          },
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Updated user profile with new avatar:", responseData.data);
        setUserAvatar(newAvatarUrl);
        localStorage.setItem("userAvatar", newAvatarUrl);
      } else {
        console.error("Failed to update user avatar:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h3>Change Avatar</h3>
      <input type="text" value={newAvatarUrl} onChange={(e) => setNewAvatarUrl(e.target.value)} />
      <button onClick={handleAvatarChange}>Update Avatar</button>
    </div>
  );
};

export default AvatarSettings;
