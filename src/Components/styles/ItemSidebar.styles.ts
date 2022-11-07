// @ts-nocheck
import { flexbox, SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import theme from "../../theme";

interface IStyles {
  [k: string]: SxProps<Theme>;
}

const ItemSidebarCss: IStyles = {
    bgSidebar: {
        height: '100%',
        top: "98px",
        width: '98px',
        position: "fixed",
        paddingTop:"60px",
        /*Eliminar después*/
        background: "#F7FAFC",
        borderRight: "1px solid #E1E9F5",
        "a svg":{
            color: "#677684",
        },
        "a:hover svg":{
            color: "#4498EE"
        },
        [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
            display: "none",
        },
    },
    dividerMenu: {
        border: "none",
        borderBottom: "1px solid " + theme.palette.neutral.grey4,
        width: "98px",
        margin: "24px 16px",
       
    }
   
 
};

export { ItemSidebarCss };