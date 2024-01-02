"use client";
import { PropsWithChildren } from "react";
import { StyledButton } from "./UpButton.styled";
import { UpButtonProps } from "./types";

const UpButton=({children,...props}:PropsWithChildren<UpButtonProps>)=>{
    return (
 
        <StyledButton {...props}>{children}</StyledButton>
    );
}
export default UpButton;