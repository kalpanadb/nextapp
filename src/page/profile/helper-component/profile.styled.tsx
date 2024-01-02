import { Card, CardContent, CardMedia } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  display: flex;
  justify-content:center;
  width:70%;
  margin-top: 100px;
  margin-left: 300px;
  border-radius: 12px;
`;

export const StyledMedia = styled(CardMedia)`
  width: 500px; 
`;
export const StyledCardContent = styled('div')`
  padding:10%;
  text-decoration:none;
  width: 500px;
  
`;

