import Theme from "@/theme/component/colors";
import { TableHead } from "@mui/material";
import styled from "styled-components";

export const StyledSearch = styled('div')`
margin-left: 20%;
`
export const StyledHead = styled(TableHead)(()=>({
    background: Theme.palette.primary.main, 
}))

