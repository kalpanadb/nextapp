// UpBreadcrumbs.tsx
import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { BreadcrumbButton } from './UpBreadcrumbs.styled';
import { UpBreadcrumbsProps } from './types';
import { Breadcrumbs } from '@mui/material';



export default function UpBreadcrumbs({ breadcrumbs }: UpBreadcrumbsProps) {
  return (
    <div role="presentation">
      <BreadcrumbButton aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <Breadcrumbs key={index}>
            {breadcrumb.href ? (
              <Link underline="hover" color="inherit" href={breadcrumb.href}>
                {breadcrumb.label}
              </Link>
            ) : (
              <Typography color="text.primary">{breadcrumb.label}</Typography>
            )}
          </Breadcrumbs>
        ))}
      </BreadcrumbButton>
    </div>
  );
}
