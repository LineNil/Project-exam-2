import React from "react";
import { Link } from "react-router-dom";
import { ButtonDiv, ButtonStyle, NavDivProfile, LogoDiv, LogoLink, ImageLogo } from "../style";



function HeaderLoggedInManagerProfile() {

  const handleLogout = () => {

    localStorage.clear();

    window.location.href = "/login";
  };

  return (
    <NavDivProfile>
      <LogoDiv>
        <LogoLink to="/venue-list-manager">
          <ImageLogo/>
        </LogoLink>
      </LogoDiv>

      <ButtonDiv>
        <Link to="/venue-list-manager">
          <ButtonStyle>Home Manager Layout</ButtonStyle>
        </Link>
        <Link to="/manager">
          <ButtonStyle>Profile</ButtonStyle>
        </Link>
        <ButtonStyle onClick={handleLogout}>Log Out</ButtonStyle>
      </ButtonDiv>
    </NavDivProfile>
  );
}

export default HeaderLoggedInManagerProfile;
