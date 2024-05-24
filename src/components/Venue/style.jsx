import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  padding: 15px 75px 75px 75px;
  box-shadow: 0px 5px 9px 3px rgba(0, 0, 0, 0.26);
  margin: 15px 35px;

  @media screen and (max-width: 768px) {
    padding: 0px;
    box-shadow: none;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  margin: 15px 35px 15px 0px;
  text-align: center;
  box-shadow: 0px 5px 9px 3px rgba(0, 0, 0, 0.26);
  padding-bottom: 75px;

  @media screen and (max-width: 768px) {
    margin: 40px 0px;
    box-shadow: none;
  }
`;

export const VenueImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 25px;
`;

export const VenueInfo = styled.div`
display: flex;
justify-content: space-evenly;
`;

export const StyledOption = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  margin-top: 20px;
  font-family: Playfair Display;
  border-bottom: ${(props) => (props.$isSelected ? '2px solid #eebb3f' : 'none')};  

  &:hover,
  &:active {
    border-bottom: 2px solid #eebb3f73
  }
`;

export const VenueDescription = styled.p`
font-family: Playfair Display;
margin-top: 45px;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
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

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const VenueName = styled.p`
font-family: MonteCarlo;
font-size: 45px;
  margin: 25px 0px 0px 0px;

  @media screen and (max-width: 768px) {
    margin: 25px 8px 0px 8px;
  }
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

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 55px;
  align-items: center;
`;

export const PriceInfo = styled.p`
  font-family: Playfair Display;
  font-size: 14px;
`;

export const Price = styled.p`
  font-family: Playfair Display;
  font-size: 14px;
  font-weight: bold;
`;

export const BookNow = styled.p`
  font-family: Playfair Display;
  font-size: 25px;
`;

export const BookingDate = styled.p`
  font-family: Playfair Display;
  font-size: 14px;
  margin-bottom: 0px;
`;

export const Guests = styled.p`
  font-family: Playfair Display;
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 30px;
`;

export const MaxGuests = styled.p`
  font-family: Playfair Display;
  font-size: 10px;
  margin-top: 0px;
`;

export const BookingButton = styled.button`
  background-color: rgb(242, 208, 127);
  color: black;
  font-size: 11px;
  padding: 10px 27px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Playfair Display;
  margin-top: 35px;

  &:hover,
  &:active {
    background-color: rgb(227, 186, 86);
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 5px 13px;
  }
`;

export const LogIn = styled(Link)`
  font-size: 12px;
  color: black;
`;

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
}
`;

export const CustomDatePicker  = styled(DatePicker) `
  font-size: 14px;
`;