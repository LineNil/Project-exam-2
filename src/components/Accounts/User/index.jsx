import React, { useEffect, useState } from "react";
import HeaderLoggedIn from "../../Layout/User";
import ApiKey from "../../Api/ApiKey";
import AvatarSettings from "../AvatarSettings";
import { LinksDiv, Container, ProfileContainer, AvatarImage, StyledButton, LeftContainer, RightContainer, UserName, AvatarSettingsWrapper } from "../style";
import Footer from "../../Layout/Footer";
import UserBookings from "../../Bookings/User";


function UserAccount() {
  const [userName, setUserName] = useState("");
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
      <Container>
        <LeftContainer>
          <ProfileContainer>
            {userAvatar && (
              <AvatarImage src={userAvatar} alt="User Avatar" />
            )}
<AvatarSettingsWrapper>
<AvatarSettings setUserAvatar={setUserAvatar} />
</AvatarSettingsWrapper>
<UserName>{userName}</UserName>
<LinksDiv>

<StyledButton to="/user-bookings">My bookings</StyledButton>

<StyledButton to="/venue-list-loggedin">View Venues</StyledButton>

</LinksDiv>
</ProfileContainer>

      </LeftContainer>

      <RightContainer>
       <UserBookings/>
      </RightContainer>




 
      </Container>
      <Footer/>
    </div>
  );
}

export default UserAccount;

