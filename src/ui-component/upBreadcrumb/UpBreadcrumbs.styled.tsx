import styled from "styled-components";
import {Breadcrumbs} from "@mui/material"
import Theme from "@/theme/component/colors";

export const BreadcrumbButton = styled(Breadcrumbs)`
    :hover{
        background-color: ${Theme.palette.secondry.light};  
    }

`