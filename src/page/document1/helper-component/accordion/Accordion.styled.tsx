import Theme from "@/theme/component/colors";
import UpAccordion from "@/ui-component/upAccordion/UpAccordion";
import styled from "styled-components";

export const AccordionType = styled(UpAccordion)`
width: '100%';
border-bottom: 5px solid ${Theme.palette.primary.color};
color:${Theme.palette.text.main};
:hover{
    background-color: ${Theme.palette.primary.secondry};  
}
`
