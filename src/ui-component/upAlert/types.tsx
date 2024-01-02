import React from 'react';
export interface UpAlertProps {
    title?: 'Success' | 'Warning' | 'Error' | 'Info';
    severity?: 'success' | 'warning' | 'error' | 'info';
    variant?: 'standard' | 'filled' | 'outlined';
    children: string | React.ReactNode;
}
