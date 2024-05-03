import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Layout/LogoImg.jpg";



export const LogoLink = styled(Link)`
  text-decoration: none;
`;


export const ImageLogoLoggedOut = styled.div`
background-image: url("${Logo}");
display: flex;
height: 75px;
width: 140px;
background-repeat: no-repeat;
background-size: contain;
`;

export const ImageLogo = styled.div`
  background-image: url("${Logo}");
  display: flex;
  height: 100px;
  width: 140px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-right: 2%;
`;

export const ButtonStyle = styled.button`
background-color: rgb(242, 208, 127);
  color: black;
  font-size: 11px;
  padding: 10px 27px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Playfair Display;

  &:hover,
  &:active {
    background-color: rgb(227, 186, 86);
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 5px 13px;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgb(246, 242, 233), rgba(246, 242, 233, 0));  
  padding: 10px;
`;

export const NavDivProfile = styled.div`
display: flex;
justify-content: space-between;
background-color: #f4e2b8;
padding: 10px;
`;

export const LogoDiv = styled.div`
  margin-left: 2%;
  margin-top: 0px;
  flex: 1;
`;


