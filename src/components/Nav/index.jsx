import React from "react";
import { ButtonStyle,ButtonDiv } from "./style";
import { Link } from "react-router-dom";

function Nav(){
  return(
    <ButtonDiv>
      <Link to="/login">
      <ButtonStyle>Log in</ButtonStyle>
      </Link>
      <Link to="/register">
      <ButtonStyle>Register</ButtonStyle>
      </Link>

    </ButtonDiv>
  );
}

export default Nav;