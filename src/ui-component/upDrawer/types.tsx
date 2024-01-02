import React from 'react';

export interface UpDrawerProps {
    title: string;
    open: boolean;
    onClick: () => void;
    position?: 'left' | 'right' | 'top' | 'bottom';
    children: string | React.ReactNode;
    className?: string;
}
