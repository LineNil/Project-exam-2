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
  background-color: #f6f2e9;
  color: #333;
  font-size: 13px;
  padding: 20px 20px;
  border: 1px solid #edab0d;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;

  &:hover,
  &:active{
    background-color: #edab0d;
    color: #fff;
    border-color: #d4940b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);  
  }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(237, 171, 13, 0.5);
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