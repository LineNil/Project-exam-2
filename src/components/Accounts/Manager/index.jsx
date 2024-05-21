import React, { useEffect, useState } from "react";
import HeaderLoggedInManager from "../../Layout/Manager";
import ApiKey from "../../Api/ApiKey";
import AvatarSettings from "../AvatarSettings";
import Footer from "../../Layout/Footer";
import MyVenues from "./venues";
import ManagerBookings from "./Booking/bookings";
import { 
  LinksDiv, 
  Container, 
  ProfileContainer, 
  AvatarImage, 
  StyledButton, 
  Switch, 
  LeftContainer, 
  RightContainer, 
  UserName, 
  AvatarSettingsWrapper 
} from "../style";


function ManagerAccount() {
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [showVenues, setShowVenues] = useState(true);

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
     <HeaderLoggedInManager />
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
              <StyledButton to="/venue-list-manager">View Venues</StyledButton>
              <StyledButton to="/create-venue">Create new venue</StyledButton>
              <Switch onClick={() => setShowVenues(true)}>My Venues</Switch>
              <Switch onClick={() => setShowVenues(false)}>My Bookings</Switch>
            </LinksDiv>
          </ProfileContainer>
        </LeftContainer>
        <RightContainer>
         {showVenues ? (
          <div>
            <MyVenues />
          </div>
          ) : (
          <div>
            <ManagerBookings />
          </div>
          )}
        </RightContainer>
      </Container>
      <Footer/>
    </div>
  );
}

export default ManagerAccount;

