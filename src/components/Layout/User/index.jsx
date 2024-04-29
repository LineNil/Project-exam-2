import React from "react";
import { Link } from "react-router-dom";
import { ButtonDiv, ButtonStyle, NavDiv, LogoDiv, LogoLink, ImageLogo } from "../style";



function HeaderLoggedIn() {
  const handleLogout = () => {

    localStorage.removeItem("accessToken");

    window.location.href = "/login";
  };

  return (
    <NavDiv>
      <LogoDiv>
        <LogoLink to="/venue-list-loggedin">
          <ImageLogo/>
        </LogoLink>
      </LogoDiv>

      <ButtonDiv>
        <Link to="/venue-list-loggedin">
          <ButtonStyle>Home User layout</ButtonStyle>
        </Link>
        <Link to="/user-account">
          <ButtonStyle>Profile</ButtonStyle>
        </Link>
        <ButtonStyle onClick={handleLogout}>Log Out</ButtonStyle>
      </ButtonDiv>
    </NavDiv>
  );
}

export default HeaderLoggedIn;
