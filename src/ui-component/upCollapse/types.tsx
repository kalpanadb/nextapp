import { IconButtonProps } from '@mui/material';

export interface ExpandMoreProps extends IconButtonProps {
    expanded: boolean;
    onCollapseHandler: () => void;
}
