import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";

import {
  Grid,
  Box,
  Button,
  Stack,
  Typography,
  Chip,
  Card,
  Link
} from "@mui/material";
import logoFigma from "../assets/logoFigma.svg"
import theme from "../theme";
import { NavLink } from "react-router-dom";
import { ItemCover } from "TemplateComponents/ItemCover";

const TemplateList: React.FC = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box className="templateList">

          <Typography color="text.primary" variant="h5" mb={3} mt={0}>
            Login
          </Typography>

          <Grid container spacing={2} columns={12}>
            <ItemCover
              title="Login"
              description="Login"
              urlFigma="#"
              bitbucket="#"
              stateName="finished"
              route="/login"
              column={6}
            />
          </Grid>

          <Typography color="text.primary" variant="h5" mb={3} mt={5}>
            List of Users
          </Typography>
          <Grid container spacing={2} columns={12}>
            <ItemCover
              title="Registered users"
              description="Users"
              urlFigma="#"
              bitbucket="#"
              stateName="finished"
              route="/user/0"
              column={6}
            />

            <ItemCover
              title="Wait list user"
              description="Users"
              urlFigma="#"
              bitbucket="#"
              stateName="finished"
              route="/user/1"
              column={6}
            />

            <ItemCover
              title="Deleted users"
              description="Users"
              urlFigma="#"
              bitbucket="#"
              stateName="finished"
              route="/user/0"
              column={6}
            />

            <ItemCover
              title="Detail - register user"
              description="Users"
              urlFigma="#"
              bitbucket="#"
              stateName="finished"
              route="/user/0"
              column={6}
            />

            <ItemCover
              title="Detail - Wail list user"
              description="Users"
              urlFigma="#"
              bitbucket="#"
              stateName="finished"
              route="/user/0"
              column={6}
            />
          </Grid>

          <Typography color="text.primary" variant="h5" mb={3} mt={5}>
            Create User
          </Typography>

          <Grid container spacing={2} columns={12}>
            <ItemCover
              title="NewUser"
              description="Add"
              urlFigma="#"
              bitbucket="#"
              stateName="finished"
              route="/new-user"
              column={6}
            />
          </Grid>

        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default TemplateList;
