import React from "react";
import { Link } from "react-router-dom";
import { ButtonDiv, ButtonStyle, NavDiv, LogoDiv, Holidaze, HolidazeP } from "../style";



function HeaderLoggedInManager() {

  const handleLogout = () => {

    localStorage.clear();

    window.location.href = "/login";
  };

  return (
    <NavDiv>
      <LogoDiv>
        <Link to="/venue-list-loggedin-manager">
          <Holidaze>Holidaze</Holidaze>
          <HolidazeP>Unlock your dream holiday</HolidazeP>
        </Link>
      </LogoDiv>

      <ButtonDiv>
        <Link to="/venue-list-loggedin-manager">
          <ButtonStyle>Home</ButtonStyle>
        </Link>
        <Link to="/manager">
          <ButtonStyle>Profile</ButtonStyle>
        </Link>
        <ButtonStyle onClick={handleLogout}>Log Out</ButtonStyle>
      </ButtonDiv>
    </NavDiv>
  );
}

export default HeaderLoggedInManager;
