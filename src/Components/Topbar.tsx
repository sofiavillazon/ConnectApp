// @ts-nocheck
import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Avatar, Chip, CssBaseline, Grid, IconButton, Toolbar, TextField, MenuItem, } from '@mui/material';
import { IconCircleCross, ModalSimple, IconChevronDown, IconDropdownList, FlagEcuador } from "@kushki/connect-ui";
import theme from "../theme";
import { ItemTopbarCss } from "./styles/ItemTopbarCss.style";

import logosm from "../../src/assets/images/kushki.svg";

const Topbar: React.FC = () => {
  const [age, setAge] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            sx={ItemTopbarCss.Topbar}
            >
            <Grid item alignItems="left" alignContent="left" display="inline-flex" sx={ItemTopbarCss.TopbarLeft}>
              <Box className="logo">
                <img src={logosm} alt="logo" />
              </Box>
              <Box className="select">
                <Box className="avatar"></Box>
                <TextField
                value={age}
                defaultValue={2}
                onChange={handleChange}
                label="Company"
                select
                sx={{ width: "280px" }}
                
              >
                <MenuItem value={1}>Kid Care Clinik - Sur</MenuItem>
                <MenuItem value={2}>Kid Care Clinik - Centro</MenuItem>
                <MenuItem value={3}>Kid Care Clinik - Norte</MenuItem>
              </TextField>
              </Box>
              
            </Grid>

            <Grid item alignItems="left" alignContent="right" display="inline-flex" sx={ItemTopbarCss.TopbarRight}>
              <Chip className="tagInfo" label="ADMIN" color="success" />

              <FlagEcuador className="flag" fontSize="large"> </FlagEcuador>

              <IconDropdownList
                buttonType="secondary"
                icon={<IconChevronDown fontSize="large" />}
                items={[
                  {
                    id: '1',
                    onSelect: () => { },
                    text: 'Notificaciones'
                  },
                  {
                    id: '2',
                    onSelect: function noRefCheck() { },
                    text: 'Ver Perfil'
                  },
                  {
                    id: '3',
                    onSelect: function noRefCheck() { },
                    text: 'Cerrar Sesión '
                  }
                ]}
              />

            </Grid>

          </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Topbar;
