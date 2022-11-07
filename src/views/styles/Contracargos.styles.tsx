// @ts-nocheck
import { flexbox, margin, SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import theme from "../../theme";

interface IStyles {
    [k: string]: SxProps<Theme>;
}

const ContraCss: IStyles = {
    body:{
        bgcolor: theme.palette.background.paper,
        ".bodyContent":{
            width:"calc(100% - 98px)",
            marginTop: "98px",
            marginLeft: "98px",
            padding: "50px 70px",
            [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
                width:"calc(100%)",
                marginLeft: "0px",
                padding: "20px 20px"
            },
        },
        
    },

    modalHeader: {
        width: "100%",
        ".MuiBox-root:first-child": {
            width: "100%",
        },
        ".MuiButton-root": {
            width: "max-content"
        }
    },
    contenedor: {
        padding: "48px 40px",
        bgcolor: theme.palette.common.white,
    }
};
export { ContraCss };