// @ts-nocheck
import { flexbox, SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import theme from "../../theme";

interface IStyles {
  [k: string]: SxProps<Theme>;
}

const TabsForm: IStyles = {
    tabsForm: {
        maxWidth: "100%",
        ".MuiTab-root": {
           fontFamily: "IBM Plex Sans",
           minWidth: "calc(100% / 3)",
           alignItems: "center",
           padding: "16px 16px 12px 16px",
           typography: theme.typography.body2,
           color: theme.palette.primary.light+ "!important",
           borderBottom: "3px solid " + theme.palette.neutral.grey4,
           transition: "all 0.3s ease",
           background: "none",
            "&:not(.Mui-selected)":{         
                background: "none",
                color: theme.palette.text.grey + "!important",
                ".MuiTypography-subtitle2":{
                    fontWeight: 400,
                },
                "&:hover":{        
                borderColor: theme.palette.primary.main,
                }
            },
            "&.Mui-disabled":{          
                background: "none",             
                color: theme.palette.text.lightGrey,
                ".MuiTypography-subtitle2":{
                    fontWeight: 400,
                },
            },
            [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
                minWidth: "200px",
            },
        },
        ".MuiTabs-indicator":{            
             backgroundColor: theme.palette.primary.light2 + "!important",
             height: "3px",
         },
         ".tab-panel-mui":{
            backgroundColor: "#fff!important",
            padding: "10px 30px",
            boxShadow: "20px 0px 80px rgba(106, 167, 197, 0.1), 7.7037px 0px 25.4815px rgba(106, 167, 197, 0.0607407), 1.62963px 0px 6.51852px rgba(106, 167, 197, 0.0392593)",
            borderRadius: "0px 0px 16px 16px",
        },
    },
    tabSubtitle: {
        display:"flex",
        svg: {
            marginRight: "8px",
        }
    },
    tabPanel: {
        maxWidth: "100%",
    },
    paper: {
        padding: "48px 64px",
        borderRadius: "16px",
        backgroundColor: theme.palette.background.default,
        [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
            padding: "24px",
        },
    },
    dividerSolid:{
        border: "none",
        borderBottom: "1px solid " + theme.palette.neutral.grey4,
        my: 2,
    },
    dividerSolidGrey3:{
        my: 4,
        border: "none",
        borderBottom: "1px solid " + theme.palette.neutral.grey3,
    }
 
};

export { TabsForm };