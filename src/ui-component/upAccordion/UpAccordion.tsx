"use client"
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { AccordionStyled } from "./UpAccordion.styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UpAccordionProps } from "./types";


const UpAccordion = ({ id,title, children }: UpAccordionProps) => {

  return (
    <AccordionStyled>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={id}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </AccordionStyled>
  );
}
export default UpAccordion;