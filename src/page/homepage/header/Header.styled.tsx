import Theme from "@/theme/component/colors";
import UpButton from "@/ui-component/upButton/UpButton";
import { AppBar, Button } from "@mui/material";
import styled from "styled-components";

export const RightButtonwrapper = styled(Button)(() => ({
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,
    fontStyle: 'Poppins',
    background: Theme.palette.primary.main,
    color: "black",
}));
export const Navbar = styled(AppBar)(() => ({
     background: Theme.palette.primary.main, 
    marginBottom: "10px",
    position: "static",

}));


export const BackToSignin = styled(UpButton)(() => ({
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 400,
    background: Theme.palette.secondry.dark,
    '&:hover': {
        background: Theme.palette.body.light,
        color: Theme.palette.text.main,
    }
}));
