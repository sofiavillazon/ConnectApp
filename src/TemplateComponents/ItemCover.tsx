import * as React from "react";

import theme from "../theme";
import { styled, ThemeProvider } from "@mui/material/styles"
import { NavLink } from "react-router-dom"
import logoFigma from "../assets/images/logoFigma.svg"
import logoBitbucket from "../assets/images/bitbucket.svg"



import {
  Box, Button, Card, Chip, Grid, Stack, Typography, Link
} from "@mui/material";
import { width } from "@mui/system";
import { IconChevronRight } from "@kushki/connect-ui";


type ItemCoverProps = {
  title: string,
  description: string,
  urlFigma: string,
  stateName: "finished" | "inProgress" | "new",
  route: string,
  column: number,
  bitbucket?: string
}

const ContainerItemCover = styled(Card)(({ theme }) => ({
  margin: theme.spacing(0, 0),

}));


export const ItemCover = ({ title, description, urlFigma, stateName, route, column,bitbucket }: ItemCoverProps) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>

     
        <Grid item sm={12} md={column} lg={6}>
          <ContainerItemCover elevation={1}  >
            <Grid sx={{ p: 3 }} >
              <Grid container spacing={1} >
                <Grid item sm={8} md={8} >
                  <Link sx={{ mr: 2 }} target="_blank" href={urlFigma}>
                    <img alt="Figma Link" src={logoFigma} />
                  </Link>
                  <Link sx={{ mr: 2 }} target="_blank" href={bitbucket}>
                    <img alt="Bitbucket" src={logoBitbucket}/>
                  </Link>
                  <Typography color="text.primary" variant={"h5"}>
                    {title} 
                  </Typography>
                  <Typography color="text.grey" variant="subtitle1">
                    {description}
                  </Typography>

                  
                </Grid>
                <Grid item sm={12} md={12} lg={4} textAlign="right" >
                  <Grid container spacing={3} direction="column" justifyContent="center" alignItems="flex-end">
                    <Grid item alignItems="right" alignContent="right">
                      
                      {(stateName == "finished" &&(
                        <Chip label={stateName} color="success" />)
                      )}
                      {(stateName == "inProgress" &&(
                        <Chip label={stateName} color="secondary" />)
                      )}
                      {(stateName == "new" &&(
                        <Chip label={stateName} color="warning" />)
                      )}
                    </Grid>

                    <Grid item alignItems="right" alignContent="right">
                      <NavLink to={route}>
                        <Button variant="contained" color="primary" size="small" endIcon={<IconChevronRight fontSize="small" />}>
                          Ver maquetación
                        </Button>
                      </NavLink>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>

            </Grid>
          </ContainerItemCover>
        </Grid>
      
    </ThemeProvider>
  </React.Fragment>

)

