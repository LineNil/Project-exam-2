import styled from "styled-components";


export const Heading = styled.h2`
text-align: center;
font-family: MonteCarlo;
font-size: 35px;
margin-top: 10px;
`;

export const VenueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const VenueDetails = styled.div`
  grid-column: 1;
  list-style: none;
  padding-right:35px;
  margin-top: 30px;


`;



export const VenueItem = styled.li`
  margin-bottom: 20px;
  list-style: none;
`;

export const ManageButton = styled.button`
background-color: #4caf50;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #45a049;
  }
`;


export const ManageButtonDelete = styled.button`
background-color: #af4c4c;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #9a4747;
  }
`;
export const VenueName = styled.p`
text-align: center;
font-size: 21px;
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
`;

export const ManageContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 10px;
`;

//Bookings

export const BookingDetails = styled.div`
  grid-column: 2;
  border-left: 2px solid #ccc;
  padding-left:20px;
  padding-left:35px;
  padding-right: 35px;
  text-align: center;
  margin-top: 30px;
`;

export const Bookings = styled.p`
text-align: center;
font-size: 21px;
font-family: Playfair Display;
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

export const Date = styled.p`
font-size: 13px;
`;

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