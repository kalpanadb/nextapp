'use client';

import React, { PropsWithChildren } from 'react';
import { UpLinkProps } from './types';
import { StyledNextLink } from './UpLinks.styled';

const UpLink = (props: PropsWithChildren<UpLinkProps>) => {
    const { className, href, underlineOnHover, children, passHref, prefetch } = props;

    return (
        <StyledNextLink
            className={className}
            href={href as any}
            $underlineOnHover={underlineOnHover}
            passHref={passHref}
            prefetch={prefetch}
        >
            {children}
        </StyledNextLink>
    );
};

export default UpLink;
