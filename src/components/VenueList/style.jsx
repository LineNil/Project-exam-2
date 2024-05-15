import styled from "styled-components"
import { Link } from "react-router-dom";

export const VenuesDiv = styled.div`
margin: 100px 10px 0px 10px;  
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  border-bottom: 1px solid black;
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
background-color: rgb(246, 242, 233);
color: black;
font-size: 13px;
padding: 8px 18px;
border: 1px solid rgb(237, 171, 13);
border-radius: 7px;
cursor: pointer;
transition: background-color 0.3s ease;
text-decoration: none;

&:hover,
&:active {
  background-color: rgba(237, 171, 13, 0.38);
}

@media screen and (max-width: 768px) {
  font-size: 11px;
  padding: 5px 13px;
}
`;

export const LinkViewVenue = styled(Link)`
margin-top: 20px
`;



export const VenueName = styled.h2`
font-weight: bold;
font-size: 20px;
text-align: center;
`;


export const Location = styled.p`
margin-right: 5px;
font-weight: lighter;
`;

export const LocationInfo = styled.p`
font-style: italic;
`;



export const NOK = styled.p`
margin-right: 5px;
font-weight: lighter;
margin-top:0px;

`;

export const NOKInfo = styled.p`
font-style: italic;
margin-top:0px;

`;



export const Rating = styled.p`
font-weight: lighter;
margin-right: 5px;

`;

export const RatingNumber = styled.p`
color: rgb(237, 171, 13);
`;


export const VenueCardInfo = styled.div`
display: flex;
flex-derection: row;
`;

export const VenueCardInfoRating = styled.div`
justify-content: center;
display:flex;
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