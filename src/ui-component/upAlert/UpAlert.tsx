import {  AlertTitle } from "@mui/material";
import { UpAlertProps } from "./types";
import { AlertStyled } from "./UpAlert.styled";

const UpAlert = ({title,children,variant,severity}:UpAlertProps) => {
    return (
            <AlertStyled variant={variant} severity={severity} >
                <AlertTitle>{title}</AlertTitle>
                {children}
            </AlertStyled>
    );
}
export default UpAlert;