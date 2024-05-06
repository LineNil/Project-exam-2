import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftColumn = styled.div`
  flex: 1;
  padding: 15px 75px;
  

`;

export const RightColumn = styled.div`
flex: 1;
  margin: 15px 75px;
  text-align: center;
  border: 1px black solid;

`;

export const VenueImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PriceContainer = styled.div`
display: flex;
justify-content: space-evenly;


`;

export const VenueInfo = styled.div`
display: flex;
justify-content: space-evenly;

`;

export const Option = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 4px;
  font-family: Playfair Display;
  ${(props) => props.isSelected && '  border-bottom: 3px solid #eebb3f;'}
`;

export const VenueDescription = styled.p`
font-family: Playfair Display;
margin-top: 45px;
  line-height: 1.5;
`;

export const VenueLocation = styled.div`
font-family: Playfair Display;
margin-top: 45px;
font-size: 20px;
line-height: 0.5;
text-align: center;
`;

export const IconParagraph = styled.p`
display: flex;
align-items: center;
font-size: 22px;
`;

export const IconParagraphWifi = styled.p`
display: flex;
align-items: center;
font-size: 18px;

`;

export const FacilitiesText = styled.span`
padding-left: 15px;
font-size:13px;
font-family: Playfair Display;
`;

export const FacilitiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* To facilities per row */
  grid-template-rows: auto; /* Automatic row sizing */
  margin-top: 45px;
  padding-left: 15%;
`;

export const VenueName = styled.p`
font-family: MonteCarlo;
font-size: 45px;
  margin: 25px 0px 0px 0px;
`;


export const Rating = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const StarIcon = styled(FontAwesomeIcon)`
  color: #f0c419; /* Farge på stjernen */
  margin-right: 5px; /* Avstand mellom stjerne og tekst */
`;




export const PriceInfo = styled.p`
font-family: Playfair Display;
`;
export const Price = styled.p`
font-family: Playfair Display;
`;


export const BookNow = styled.p`
font-family: Playfair Display;
`;
export const BookingDate = styled.p`
font-family: Playfair Display;
`;

export const Guests = styled.p`
font-family: Playfair Display;
`;

export const MaxGuests = styled.p`
font-family: Playfair Display;
`;



export const BookingButton = styled.button`
font-family: Playfair Display;
`;