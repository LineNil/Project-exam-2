import React from "react";
import { Link } from "react-router-dom";
import { ButtonDiv, ButtonStyle, NavDiv, LogoDiv, Holidaze, HolidazeP } from "../style";



function HeaderLoggedIn() {
  const handleLogout = () => {

    localStorage.removeItem("accessToken");

    window.location.href = "/login";
  };

  return (
    <NavDiv>
      <LogoDiv>
        <Link to="/venue-list-loggedin">
          <Holidaze>Holidaze</Holidaze>
          <HolidazeP>Unlock your dream holiday</HolidazeP>
        </Link>
      </LogoDiv>

      <ButtonDiv>
        <Link to="/">
          <ButtonStyle>Home</ButtonStyle>
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
