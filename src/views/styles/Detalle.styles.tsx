// @ts-nocheck
import { flexbox, SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import theme from "../../theme";

interface IStyles {
  [k: string]: SxProps<Theme>;
}

const DetalleCss: IStyles = {
  
    bgsection:{
        ".MuiBox-root":{
          bgcolor:theme.palette.neutral.grey3,
          borderRadius: "8px",
          pb:6,
        }
    },
    card:{
        bgcolor:theme.palette.neutral.grey3,
        borderRadius: "8px",      
    },
    card2:{
      "&.MuiGrid-root":{
        gap:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
      }
    }

};
export {DetalleCss}