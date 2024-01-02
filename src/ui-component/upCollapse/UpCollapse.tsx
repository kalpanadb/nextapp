'use client';

import React from 'react';
import Collapse from '@mui/material/Collapse';
import { ListItemButton, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMoreProps } from './types';

const UpCollapse = (props: ExpandMoreProps) => {
    const { expanded, children, title, onCollapseHandler } = props;
    return (
        <>
            <ListItemButton onClick={onCollapseHandler}>
                <ListItemText primary={title}/>
                <ExpandMoreIcon/>
            </ListItemButton>
            <Collapse in={expanded} timeout="auto">
                {children}
            </Collapse>
        </>
    );
};

export default UpCollapse;
