"use client"
import * as React from 'react';
import { AccordionType } from './Accordion.styled';




export default function BasicAccordion() {
    return (
        <div>
          <AccordionType title='one'>
                {"Number 1"}
           </AccordionType>          
        </div>
    );
}