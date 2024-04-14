import HeaderImg from "../../components/HeaderImage/HeaderImg2.jpg"
import styled from "styled-components"

export const HeaderImageContainer = styled.div`
  position: relative; 
  background-image: url("${HeaderImg}");
  background-size: cover;
  background-position: center;
  height: 300px; 
  display: flex;
  align-items: center;
  text-align: center;
`;

export const HeaderText = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
`;

export const SubHeaderText = styled.p`
  font-size: 18px;
  color: black;
  left: 8%;
  position: absolute;

`;