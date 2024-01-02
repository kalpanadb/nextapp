import { FormHelperText, OutlinedInput } from "@mui/material";
import styled from "styled-components";

export const InputStyled = styled(OutlinedInput)(({ theme }) => ({
    border: `1px solid`,
    borderRadius: '12px',
    '& fieldset': {
        border: 'none'
    },
    input: {
        padding: '10px 14px'
    }
}));
export const HelperText=styled(FormHelperText)`
    margin:5px;
`