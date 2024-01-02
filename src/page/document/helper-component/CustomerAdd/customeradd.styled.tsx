import Theme from "@/theme/component/colors";
import UpButton from "@/ui-component/upButton/UpButton";
import styled from "styled-components";

export const StyledFrom=styled("form")`
display: grid;
justify-content: center;
`
export const SubmitButton=styled(UpButton)`
 width:100%;
`
export const AddButtonWraper=styled(UpButton)`
background-color: ${Theme.palette.primary.main};
color: white;
`