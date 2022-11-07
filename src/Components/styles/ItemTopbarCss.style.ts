// @ts-nocheck
import { flexbox, SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import theme from "../../theme";


interface IStyles {
    [k: string]: SxProps<Theme>;
}

const ItemTopbarCss: IStyles = {
    Topbar: {
        width: "100%",
        height: "94px",
        background: "linear-gradient(90deg, #E8F1F6 0%, #FBFDFE 3.22%)",
        borderBottom: "1px solid #EBF2FF",
        top: "0px",
        position: "fixed",
        zIndex: "2",
    },
    TopbarLeft: {
        verticalAlign: "middle",
        padding: "0px 0px",
        ".logo": {
            backgroundColor: theme.palette.primary.light,
            height: "94px",
            width: "98px",
            img: {
                padding: "25px 25px",
                width: "44px",
            }
        },
        ".select": {
            padding: "25px 50px",
            display: "inline-flex",
            ".css-sccr7j-MuiFormControl-root-MuiTextField-root": {
                marginTop: "12px"
            },
            ".css-8uooi-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff!important",
            },
            ".css-1rliq6x-MuiFormLabel-root-MuiInputLabel-root.MuiInputLabel-shrink": {
                fontWeight: 700,
                color: "#293036!important",
            },

        },
        ".avatar": {
            width: "44px",
            height: "44px",
            backgroundColor: "#BFDFFA",
            borderRadius: "8px",
            marginRight: "8px"
        }
    },
    TopbarRight: {
        verticalAlign: "middle",
        padding: "24px 40px",
        ".flag": {
            margin: "0px 24px"
        },
        ".tagInfo": {
            margin: "8px 0px"
        },
        [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
                display:"none"
        },
    },
    

};

export { ItemTopbarCss };