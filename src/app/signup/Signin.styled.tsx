import Theme from "@/theme/component/colors";
import UpButton from "@/ui-component/upButton/UpButton";
import { Box } from "@mui/material";
import styled from "styled-components";

export const SignButton = styled(UpButton)`
            background-color: ${Theme.palette.button.main};
            color:${Theme.palette.text.main};
           align-items: center; 
            &:hover{
                background-color: ${Theme.palette.secondry.dark};
                color:#ffffff;
            }
`;

export const StyledBox = styled(Box)`
    padding: 30px;
    border: 1px solid;
    border-radius: 8px;
    width: 30%;
    margin-left:1000px;
    margin-top: 100px;
`;
export const StyleBox = styled(Box)`
    padding: 35px;
    border: 1px solid;
    border-radius: 8px;
    width: 30%;
    margin-left:1000px;
    margin-top: 100px;
`;