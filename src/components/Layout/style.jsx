import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Layout/LogoImg.jpg";


export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const ImageLogoLoggedOut = styled.div`
background-image: url("${Logo}");
display: flex;
height: 90px;
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
  align-items: flex-start;
  margin-right: 2%;

  @media screen and (max-width: 768px) {
    gap: 9px;

  }
`;

export const ButtonStyle = styled.button`
background-color: rgb(246, 242, 233);
  color: black;
  font-size: 13px;
  padding: 10px 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  border-left: 1px solid #0000007d;;

  &:hover,
  &:active {
    background-color: rgb(255, 252, 246);  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 5px 13px;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right, rgb(246, 242, 233), rgba(246, 242, 233, 0.3));  padding: 10px;
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
`;


