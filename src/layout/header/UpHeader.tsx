"use client"
import UpButton from "@/ui-component/upButton/UpButton";
import { useRouter } from "next/router";
import { AppWrapper } from "./Upheader.styled";
import { Toolbar } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import UpLink from "@/ui-component/upLink/UpLink";

const Header = () => {
   
    return (
        <AppWrapper>
        <Toolbar className="p-0">
            <UpButton>
                <UpLink href="/dashboard">
                <ArrowBackIosNewIcon /></UpLink>
            </UpButton>
            
        </Toolbar>
        </AppWrapper>
    );
};

export default Header;
