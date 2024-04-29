import HeaderImg from "../../components/HeaderImage/HeaderImg.jpg";
import styled from "styled-components";

export const HeaderImageContainer = styled.div`
  position: relative;
  background-image: url("${HeaderImg}");
  background-size: cover;
  background-position: 11% 35%;
  height: 400px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 40px;
  margin: 0px 10px;

  @media screen and (max-width: 768px) {
    background-position: 11% 35%;
    height: 300px;
  }
`;

export const HeaderImagebgColor = styled.div`
  background-color: rgb(246, 242, 233);
`;

export const HeaderText = styled.p`
  font-size: 38px;
  margin-bottom: 10px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    top: -25px;
    position: relative;
  }
`;

export const SubHeaderText = styled.p`
  font-size: 18px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 11px;
    position: relative;
    top: -25px;
  }
`;

export const HeaderTextDiv = styled.div`
  margin: 0px auto;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
