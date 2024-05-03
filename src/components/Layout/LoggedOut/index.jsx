import React from "react";
import { Link } from "react-router-dom";
import { ButtonDiv, ButtonStyle, LogoLink, NavDiv, LogoDiv, ImageLogoLoggedOut } from "../style";



function HeaderLoggedOut() {
  return (
    <NavDiv>
      <LogoDiv>
        <LogoLink to="/">
<ImageLogoLoggedOut/>
        </LogoLink>
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

export default HeaderLoggedOut;