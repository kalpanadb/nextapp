import { AppBar, Box } from "@mui/material";
import styled from "styled-components";

export const BoxWrapper = styled(Box)`
    flex-grow: 1;
`;
export const AppWrapper = styled(AppBar)<{ issidebar: boolean }>`
position: fixed;
display: flex;
width: 80%;
background-color:white;
justify-content: flex-end; 
padding: 20px;
.MuiToolbar-root {
    padding: 0;
}
border-bottom: 1px solid green;
`;
export const PageWrapper = styled('div')<{ fullWidth: boolean}>`
    flex-basis: ${({ fullWidth }) => (fullWidth ? '100%' : '82%')};
    margin-left: ${({ fullWidth }) => (fullWidth ? '0%' : '20%')};
    padding: 0px 20px 20px 20px;
    margin-top: 8%;
`;
