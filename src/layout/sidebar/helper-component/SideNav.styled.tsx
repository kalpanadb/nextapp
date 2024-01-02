import Theme from "@/theme/component/colors";
import { Box } from "@mui/material";
import styled from "styled-components";

export const Layout = styled(Box)`
    position: relative;
`;
export const SideNavWrapper = styled(Box)(() => ({
    position: 'fixed',
    top: '0',
    width: '18%',
    height: "100%",
    textAlign:'center',
    background: Theme.palette.primary.main,
    borderRadius: '20px',
    flexWrap: 'wrap',
}));

export const SideWrapper = styled(Box)`
    a {
        width: 100%;
        margin-top:20%
    }
`;
export const PageBox = styled('div')`
    display: flex;
    flex-direction: column;
    // gap: 20px;
    margin-bottom: 3%;
`;
export const SubHeader = styled('div')`
    display: flex;
    justify-content: end;
`;
