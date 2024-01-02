import { Drawer, styled } from "@mui/material";
import Theme from "@/theme/component/colors";

export const DrawerContainer = styled(Drawer)(({ theme }) => ({
    width: 500,
    background: 'white',
    '& .MuiDrawer-paper': {
        width: 500,
        background: 'white',
    },
}));

export const DrawerTitle = styled("div")(({ theme }) => ({
    background: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2), 
}));