"use client"
import Header from '@/layout/header/UpHeader';
import { PageWrapper } from '@/layout/header/Upheader.styled';
import SideNav from '@/layout/sidebar/helper-component/SideNav';
import { Layout, PageBox, SideNavWrapper } from '@/layout/sidebar/helper-component/SideNav.styled';
import { ReactNode} from 'react';


export type LayoutProps = {
    children: ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {
    const isSidebar = true;

    const renderSidebar = () => {
        return (
            <>
                <SideNavWrapper>
                    <SideNav />
                </SideNavWrapper>
            </>
        );
    }

    return (
        <Layout>
            {renderSidebar()}
            <PageWrapper fullWidth={isSidebar}>
                <Header />
                {children}
            </PageWrapper>
        </Layout>
    );
};

export default DashboardLayout;
