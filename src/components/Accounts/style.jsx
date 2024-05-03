import { Link } from "react-router-dom";
import styled from "styled-components"

export const AvatarDiv = styled.div`
height:100px;
`;


export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr; 
padding-top: 85px;
background-color: #c880251c;
`

export const LeftContainer = styled.div`
justify-items: center;
  display: grid;

  `
export const RightContainer = styled.div`
justify-items: center;
  display: grid;
`;


export const ProfileContainer = styled.div`
  margin-bottom: 10px;
`;

export const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;

`;

export const StyledButton = styled(Link)`
color: black;
  font-size: 13px;
  padding: 9px 0px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  text-decoration: none;
  width: 200px;
  text-align: center;
  background-color: #efbc4429;

&:hover,
&:active {
  background-color: rgb(237, 171, 13);
}

@media screen and (max-width: 768px) {
  font-size: 11px;
  padding: 5px 13px;
}
`;

export const UserName = styled.h2`
display: flex;
justify-content: center;
`;

export const AvatarSettingsWrapper = styled.div`
display: flex;
justify-content: center;
`;