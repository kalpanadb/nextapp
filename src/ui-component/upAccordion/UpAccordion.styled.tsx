import Theme from "@/theme/component/colors";
import { Accordion } from "@mui/material";
import styled from "styled-components";

export const AccordionStyled = styled(Accordion)`
    width: '100%';
    border-bottom: 3px solid ${Theme.palette.primary.secondry};
    :hover{
        background-color: ${Theme.palette.primary.color};  
    }
    `