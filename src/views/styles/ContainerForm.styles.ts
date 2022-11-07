// @ts-nocheck
import { flexbox, SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import theme from "../../theme";

interface IStyles {
  [k: string]: SxProps<Theme>;
}

const ContainerFormCss: IStyles = {
    headerTitle: {
        display: "flex",
        alignItems: "center",
        mb:1 
    },
    flagTitle: {
        position: "relative", top: "2.5px", mr: "11px",
    },
    buttonChoiceGrid: {
        borderRight: "1px solid " + theme.palette.neutral.grey5,
        [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
            marginTop: "40px",
            border:"none",
        },
    },
    formGrid: {
        paddingLeft: "40px",
        [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
            marginTop: "0",
            padding: "0",
        },
    },
    formGridNoChoice: {
        [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
            marginTop: "32px",
            padding: "0",
        },
    },
   
 
};

export { ContainerFormCss };