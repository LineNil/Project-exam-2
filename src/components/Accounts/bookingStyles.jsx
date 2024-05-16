import styled from "styled-components";



export const Heading = styled.h2`
text-align: center;
font-family: MonteCarlo;
font-size: 35px;
margin-top: 10px;

@media screen and (max-width: 768px) {
border-top: 1px solid #65563e;
margin-top: 30px;
padding-top: 30px;
}
`;

export const Container = styled.div`
margin: 0px 50px
`;

export const VenueItem = styled.li`
  margin-bottom: 20px;
  list-style: none;
`;

export const VenueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const VenueDetails = styled.div`
  grid-column: 1;
  list-style: none;
  padding-right:35px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
  padding-right:0px;
  }
`;

export const VenueName = styled.p`
text-align: center;
font-size: 30px;
font-family: Playfair Display;
margin-bottom: 0px;
`;

export const Address = styled.p`
font-size: 13px;
text-align: center;
margin-bottom: 30px;
margin-top: 0px;
`;

export const Img = styled.img`
width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 3px;

  @media screen and (min-width: 768px) {
    padding-right: 0px;
  }
`;

export const ManageContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 10px;

@media screen and (max-width: 768px) {
  display: block;
  text-align: center;
  }
`;

export const ManageButtonDelete = styled.button`
color: black;
background-color: #f1e6d4;;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;

  &:hover,
  &:active {
    color: #923939;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 5px;
      }

`;

export const ManageButton = styled.button`
 color: black;
background-color: #f1e6d4;;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  &:hover,
  &:active {

    color: #45a049;

  }

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 5px;

      }


`;


// bookings on profile

export const BookingDetails = styled.div`
  grid-column: 2;
  border-left: 2px solid #ccc;
  padding-left:20px;
  padding-left:35px;
  padding-right: 35px;
  text-align: center;
  margin-top: 30px;
`;

export const NoData = styled.p`
font-size: 11px;
text-align: center;
`;

export const Bookings = styled.p`
text-align: center;
font-size: 21px;
font-family: Playfair Display;
`;

export const BookingContainer = styled.div`
border-bottom: 1px solid #65563e;
`;

export const CustomerName = styled.p`
font-size: 13px;
font-weight: bold;
`;

export const CustomerEmail = styled.p`
font-size: 13px;

`;

export const BookingDate = styled.p`
font-size: 13px;
font-weight: bold;
`;

export const StyledDate = styled.p`
font-size: 13px;
`;



//success booking

export const SuccessContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
`;

export const SuccessContent = styled.div`
  margin-top: 50px;
`;

export const SuccessHeading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Message = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;


export const ButtonContainer = styled.div`
display:flex;
  flex-direction: column;
  width: 25%;
  margin: 0px auto;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

`;


export const Button = styled.button`
background-color: rgb(242, 208, 127);
  color: black;
  font-size: 11px;
  padding: 10px 27px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Playfair Display;
  margin: 12px;

  &:hover,
  &:active {
    background-color: rgb(227, 186, 86);
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 5px 13px;
  }

`;


// customer bookings

export const CustomerBookingContainer = styled.div`
border-bottom: 2px solid #ccc;
`;

export const ShowAllButton = styled.button`
background-color: rgba(242, 208, 127, 0.23);
color: black;
  font-size: 12px;
  padding: 7px 25px;
  border: 1px solid rgb(237, 171, 13);
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Playfair Display;
  margin-top: 25px;

  &:hover,
  &:active {
    background-color: rgb(227, 186, 86);
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 5px 13px;
  }
`;