import React from 'react';

export interface UpAccordionProps {
    id: string;
    expanded: string | false;
    title: string;
    children: string | React.ReactNode;
}