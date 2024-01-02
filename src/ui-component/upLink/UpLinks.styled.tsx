/**
 * @author [Vijayaprathap Kumar] (vpkumar@genpixels.com)
 * UpLink.styled.tsx
 * @description Styled Components for UpLink are defined here
 */

import { styled } from '@mui/material';
import NextLink from 'next/link';

/** Prop Types doe Styled components */
type StyledProps = {
    disabled?: boolean;
    $underlineOnHover?: boolean;
};

/**
 * Wrapper StyledMUILink / StyledNextLink for NsLink.tsx
 * @params ( theme: { palette }) / Provide the color's to container from @nuskin/foundation-theme
 * @params ( disabled: boolean) / Element will be disable only when disabled is true
 */

export const linkDefaultStyles = `
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    text-decoration: none;
    transition: transform 120ms linear;
    color: inherit;
    &:focus {
        outline: none;
        text-decoration: underline;
    }
`;

const getLinkStyles = ({ disabled, $underlineOnHover = true }: StyledProps) => {
    if (disabled) {
        return `
            cursor: default;
            pointer-events: all;
            opacity: 0.6;
        `;
    } else if ($underlineOnHover) {
        return `&:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
            text-decoration-color: currentcolor;
        }`;
    }
    return '';
};
const options = {
    shouldForwardProp: (propKey: string) => propKey !== '$underlineOnHover'
};

export const StyledNextLink = styled(NextLink, options)<StyledProps>`
    ${linkDefaultStyles};
    ${getLinkStyles}
`;
