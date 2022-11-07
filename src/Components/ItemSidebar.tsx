import * as React from "react";

import { Grid, Box } from "@mui/material";

import theme from "../theme";
import { styled, ThemeProvider } from "@mui/material/styles"
import { ItemSidebarCss } from "./styles/ItemSidebar.styles"
import { IconBasket, IconBell, IconUser, IconObjective, IconWallet } from "@kushki/connect-ui";

const ItemSidebar: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box sx={ItemSidebarCss.bgSidebar}>
          <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={5}
            >
            <a href=""><IconObjective fontSize="medium"/></a>
            <a href=""><IconUser fontSize="medium"/></a>
            <a href=""><IconBasket fontSize="medium"/></a>
            <a href=""><IconWallet fontSize="medium"/></a>
            <a href=""><IconBell fontSize="medium"/></a>
          </Grid>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default ItemSidebar;
