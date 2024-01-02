import { ButtonProps as MUIButtonProps } from '@mui/material';

export type UpButtonProps = Pick<
    MUIButtonProps,
    | 'size'
    | 'variant'
    | 'disabled'
    | 'fullWidth'
    | 'type'
    | 'onBlur'
    | 'onClick'
    | 'onChange'
    | 'onFocus'
    | 'aria-label'
    | 'className'
> & {
    color?: any;
    iconOnly?: boolean;
    href?:string;
}
