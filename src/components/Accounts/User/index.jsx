import React, { useEffect, useState } from "react";
import HeaderLoggedIn from "../../Layout/User";
import ApiKey from "../../Api/ApiKey";
import AvatarSettings from "../AvatarSettings";
import Footer from "../../Layout/Footer";
import UserBookings from "./bookings";
import { 
  LinksDiv, 
  Container, 
  ProfileContainer, 
  AvatarImage, 
  StyledButton, 
  LeftContainer, 
  RightContainer, 
  UserName, 
  AvatarSettingsWrapper 
} from "../style";



function UserAccount() {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    async function fetchProfile() {

      const accessToken = localStorage.getItem("accessToken");
      const loggedInUserName = localStorage.getItem("loggedInUserName");

      if (!accessToken || !loggedInUserName) {
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
        const userName = responseData.data.name;
        setUserName(userName);
        setUserAvatar(responseData.data.avatar.url); 
      } catch (error) {
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
              <StyledButton to="/venue-list-loggedin">Explore Venues</StyledButton>
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

