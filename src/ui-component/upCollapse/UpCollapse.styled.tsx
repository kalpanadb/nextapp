import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


export const CollapseTitle = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    cursor: 'pointer',
    margin:'10px',
   
}));

export const Icon = styled(IconButton)(() => ({
    paddingRight: '20px'
}));
