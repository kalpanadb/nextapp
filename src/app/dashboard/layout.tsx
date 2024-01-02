'use client';


import DashboardLayout from '@/layout/layout';
import { notFound } from 'next/navigation';

export default function Layout({ children }: any) {
    return <DashboardLayout>{children}</DashboardLayout>;
};