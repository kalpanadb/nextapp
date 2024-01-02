import Theme from "@/theme/component/colors";
import { Button as MUIButton } from '@mui/material';
import styled from "styled-components";


export const StyledButton = styled(MUIButton)`
            width:90px;
            justify-content:center,
            background-color: ${Theme.palette.primary.main};
            color:black;
            padding:5px;
            &:hover{
                backgroud-color:${Theme.palette.primary.secondry}
}
`