import React from "react";
import { Link } from "react-router-dom";
import { ButtonDiv, ButtonStyle, NavDiv, LogoDiv, Holidaze, HolidazeP } from "../style";



function HeaderLoggedIn() {
  return (
    <NavDiv>
      <LogoDiv>
        <Link to="/">
          <Holidaze>Holidaze</Holidaze>
          <HolidazeP>Unlock your dream holiday</HolidazeP>
        </Link>
      </LogoDiv>

      <ButtonDiv>
        <Link to="/login">
          <ButtonStyle>Log in</ButtonStyle>
        </Link>
        <Link to="/register">
          <ButtonStyle>Register</ButtonStyle>
        </Link>
      </ButtonDiv>
    </NavDiv>
  );
}

export default HeaderLoggedIn;