"use client"
import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { UpModalProps } from './types';
import { ModalOverlay, ModalTable } from './UpModal.styled';



const UpModal=(props:UpModalProps)=>{
 const { isOpen, onClose, children }=props;
 if (!isOpen) return null;

  return (
      <ModalOverlay onClick={onClose}>
          <ModalTable>
            <Typography onClick={(e)=>e.stopPropagation()}>
              {children}
            </Typography>
            </ModalTable>
            </ModalOverlay>
  );
};

export default UpModal;
