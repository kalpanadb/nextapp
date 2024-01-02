import Theme from "@/theme/component/colors";
import styled from "styled-components";
import { HelperText } from "../upInput/UpInput.styled";

export const CheckBoxContainer = styled('label')`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const CheckBoxInput =styled('input')`
color: {Theme.palette.primary.color}; 
`
export const ErrorCheckbox = styled(HelperText)`
    margin: 0;
    padding: 0;
`;