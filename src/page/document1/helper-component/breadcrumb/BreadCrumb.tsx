"use client"
import React from 'react';
import UpBreadcrumbs from '@/ui-component/upBreadcrumb/UpBreadcrumbs';

const Breadcrumb = () => {
  const handleBreadcrumbClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('Breadcrumb clicked!');
  };

  const breadcrumbs = [
    { label: 'App', href: '/' },
    { label: 'Folder' },
    { label: 'File' },
  ];

  return (
  <UpBreadcrumbs breadcrumbs={breadcrumbs} onClick={handleBreadcrumbClick}/>
  ); 
};

export default Breadcrumb;
