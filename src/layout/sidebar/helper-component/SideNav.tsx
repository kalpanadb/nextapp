"use client"
import React, { ReactNode } from 'react'
import { SideWrapper } from './SideNav.styled';
import UpLink from '@/ui-component/upLink/UpLink';


export type LayoutProps = {
    children: ReactNode;
};

const SideNav = () => {
    return (
        <>
            <SideWrapper>
                <UpLink href="/dashboard/customer">Customer Details</UpLink>
            </SideWrapper>
        </>
    )
};
export default SideNav;