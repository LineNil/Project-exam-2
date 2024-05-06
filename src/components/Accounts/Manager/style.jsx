import styled from "styled-components";


export const Heading = styled.h2`
text-align: center;
font-family: MonteCarlo;
font-size: 35px;
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


`;



export const VenueItem = styled.li`
  margin-bottom: 20px;
  list-style: none;
`;

export const ManageButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;


export const ManageButtonDelete = styled.button`
background-color: #af4c4c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #9a4747;
  }
`;
export const Name = styled.p`
text-align: center;
font-size: 21px;
font-family: Playfair Display;
`;

export const VenueName = styled.p`
font-size: 13px;
font-weight: bold;
`;

export const Img = styled.img`
width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 3px;
`;

export const ManageContainer = styled.div`
display: flex;
justify-content: space-between;
`;

//Bookings

export const BookingDetails = styled.div`
  grid-column: 2;
  border-left: 2px solid #ccc;
  padding-left:20px;
  padding-left:35px;
  padding-right: 35px;
  text-align: center;

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