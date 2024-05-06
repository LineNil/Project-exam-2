import styled from "styled-components";

export const SearchForm = styled.form`
display: flex; 
margin-bottom: 20px;
height: 25px;
margin-left: 15px;
justify-content: center;
margin-top: 15px;
gap: 10px;
margin-top: -100px;
  position: relative;
  z-index: 1;
margin-bottom: 100px;
`;

export const SearchButton = styled.button`
background-color: rgb(246, 242, 233);
  color: black;
  font-size: 13px;
  padding: 20px 20px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;


  &:hover,
  &:active{
    background-color: rgb(237, 171, 13);
  }


  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 16px 18px;
  }
`;

export const StyledInput = styled.input`
padding: 20px 170px;
  border: 2px solid white;
  border-radius: 7px;
  font-size: 14px;
  background-color: #ffffff85;
  color: black;
  text-align: left;
  padding-left: 10px;

  @media screen and (max-width: 768px){
    font-size: 12px;
    padding: 15px 30px;
  }
`;

