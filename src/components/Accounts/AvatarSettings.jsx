import React, { useState } from "react";
import ApiKey from "../Api/ApiKey";
import { UpdateAvatarButton, NewAvatarForm, AvatarSettingsWrapper, CancelAvatar, SaveAvatar, InputAvatar, ErrorMessage } from "../Accounts/style";

const AvatarSettings = ({ userAvatar, setUserAvatar }) => {
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [avatarUpdated, setAvatarUpdated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null); // State to track error

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
        setAvatarUpdated(true);
        setNewAvatarUrl("");
        setIsOpen(false); // Close the window after updating avatar
      } else {
        console.error("Failed to update user avatar:", response.status);
        setError("Failed to update user avatar. Please try again."); // Set error message if update fails
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again."); // Set error message if an error occurs
    }
  };

  return (
    <div>
      <UpdateAvatarButton onClick={() => setIsOpen(true)}>Update Avatar</UpdateAvatarButton>
      {isOpen && (
        <AvatarSettingsWrapper>
          <NewAvatarForm>
            <InputAvatar
              type="text"
              value={newAvatarUrl}
              onChange={(e) => setNewAvatarUrl(e.target.value)}
            />
            <SaveAvatar onClick={handleAvatarChange}>Save</SaveAvatar>
            <CancelAvatar onClick={() => setIsOpen(false)}>Cancel</CancelAvatar>
          </NewAvatarForm>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </AvatarSettingsWrapper>
      )}
    </div>
  );
};

export default AvatarSettings;
