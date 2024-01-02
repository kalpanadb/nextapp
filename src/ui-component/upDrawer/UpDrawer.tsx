"use client"

import { IconButton, Typography } from "@mui/material";
import { DrawerContainer, DrawerTitle } from "./UpDrawer.styled";
import { UpDrawerProps } from "./types";
import CloseIcon from '@mui/icons-material/Close';


const UpDrawer = (props: UpDrawerProps) => {

  const { title, children, open, onClick} = props;
  return (
      <DrawerContainer open={open}>
        <DrawerTitle>
          <Typography>{title}</Typography>
          <IconButton onClick={onClick}>
            <CloseIcon />
          </IconButton>
        </DrawerTitle>
        {children}
      </DrawerContainer>
  );
}
export default UpDrawer;