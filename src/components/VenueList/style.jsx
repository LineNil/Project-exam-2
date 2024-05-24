import styled from "styled-components"
import { Link } from "react-router-dom";

export const VenuesDiv = styled.div`
margin: 100px 10px 0px 10px;  
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding-bottom: 40px;
  overflow: hidden;
`;

export const VenueItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px 20px 50px 20px;  
  border-radius: 8px;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);


`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 3px;
`;

export const Info = styled.div`
  flex: 1;
  margin: 0px 22px;
`;

export const ViewVenue = styled.button`
  background-color: #f6f2e9;
  color: #333;
  font-size: 13px;
  padding: 10px 20px;
  border: 1px solid #edab0d;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;

  &:hover,
  &:active {
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
    padding: 7px 15px;
  }
`;


export const LinkViewVenue = styled(Link)`
  margin-top: 20px
`;

export const VenueName = styled.h2`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const Location = styled.p`
  margin-right: 5px;
  font-weight: lighter;
  margin-bottom: 0;
  margin-right: 10px;
  font-size: 15px;
`;

export const LocationInfo = styled.p`
  font-style: italic;
  font-size: 14px;
  margin-bottom: 0
  `;

export const NOK = styled.p`
margin-right: 5px;
font-weight: lighter;
margin-bottom: 0;
margin-right: 10px;
font-size: 15px;

`;

export const NOKInfo = styled.p`
font-style: italic;
font-size: 14px;
margin-bottom: 0
`;

export const Rating = styled.p`
  font-weight: lighter;
  margin-right: 5px;
  font-size: 15px;
  margin-bottom: 0;
`;

export const RatingNumber = styled.p`
  color: rgb(237, 171, 13);
  margin-bottom: 0;

`;

export const VenueCardInfo = styled.div`
  display: flex;
  flex-derection: row;
  align-items: flex-end;
`;

export const VenueCardInfoRating = styled.div`
  justify-content: center;
  display:flex;
  align-items: flex-end;

`;

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

  ::placeholder {
    color: black;
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

  ::placeholder {
    color: black;
  }



  @media screen and (max-width: 768px){
    font-size: 12px;
    padding: 15px 30px;
  }
`;

export const Results = styled.h2`
  text-align: center;
`;

export const ResultsH2Div = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / -1;
`;

export const NoResults = styled.p`
  text-align: center;
  font-size: 20px;
`;

export const ScrollToTop = styled.button `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #e9b945;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}
`;