"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navbar, RightButtonwrapper } from './Header.styled';
import UpLink from '@/ui-component/upLink/UpLink';



export default function SearchAppBar() {
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <Navbar>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: "black" } }}
            >
              Navbar
            </Typography>
            <RightButtonwrapper>
              <UpLink href='signin'>SignIn</UpLink>
            </RightButtonwrapper><br /><br />
            <RightButtonwrapper>
              <UpLink href='signup'>SignUp</UpLink>
            </RightButtonwrapper>
          </Toolbar>
        </Navbar>
      </Box>

    </>
  );
}