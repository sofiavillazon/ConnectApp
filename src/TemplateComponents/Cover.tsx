import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import * as styles from "@mui/material/styles";
import {
  Typography,
  Box,
  Link,
  Paper,
  Grid,
  styled,
  CardContent,
  Card
} from "@mui/material";
import TemplateList from "./TemplateList"
import backgroundCover from "../assets/images/backgroundCover.svg"
import logoCui from "../assets/images/logoCui.svg"
import logoUi from "../assets/images/logoUi.svg"
import theme from "../theme"

const CoverFrame = styled(Paper)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${backgroundCover})`,
  display: 'flex',
  alignItems: 'center',
  minHeight: 350,
  padding: "40px 65px",
  h2: {
    fontWeight: 300,
  },
  ".MuiCardContent-root": {
    padding: "16px!important",
  },
  ".descripcionMod": {
    background: theme.palette.background.default,
    minHeight: 110,
    padding: 10,
  },
  ".pt0": {
    paddingTop: "0px!important",
  },
  ".teamUiMembers": {
    justifyContent: "flex-start",
    marginBottom: 30
  },
  ".MuiPaper-root.MuiCard-root": {
    borderRadius: 16,
  },
  [theme.breakpoints.down("md")]: {
    padding: 35,
    marginTop: 35,
    ".MuiCardContent-root": {
      padding: "25px!important",
      ".MuiGrid-root": {
        paddingLeft: 18,
      }
    },
    ".coverColumnReverse": {
      display: "flex",
      flexDirection: "column-reverse",
      paddingTop: "30px!important",
      ".teamUiMembers": {
        paddingTop: "30px!important",
      },
    }
  }
})

)

function CoverContent() {

  return (
    <ThemeProvider theme={theme}>
      <CoverFrame
        elevation={0}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} />}
        <Grid container spacing={4}>
          <Grid item md={12} xs={12} className="pt0" p={0} mt={5}>
            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <img alt="Logo UI" src={logoCui} width="203" />
              <img alt="Logo UI" src={logoUi} width="63" />
            </Grid>


            <Box my={6}>
              <Typography component="h1" variant="h1" color="primary.light" mb={2}>
                Connect App
              </Typography>
              <Typography variant="h2" color="primary.light">
                Creación y edición de usuario
              </Typography>
            </Box>
        
          </Grid>
          <Grid item className="pt0 coverColumnReverse" p={0} >

            <Card>
              <CardContent sx={{ p: 0 }}>
                <Grid container spacing={1}>
                  <Grid item>
                    <Typography color="text.grey" variant="h6" >
                      Librería Kushki Connect:
                    </Typography>
                  </Grid>
                  <Grid item pr={4}>
                    <Link variant={"caption"} color="primary.light2" target="_blank" href="https://www.figma.com/proto/2uUG0DrFq63zAPjXJcqriE/%F0%9F%92%A5-Componentes---Kushki-Connect-UI?page-id=0%3A1&node-id=28%3A7229&viewport=179%2C298%2C0.04&scaling=scale-down&starting-point-node-id=28%3A7229" underline="none">
                      Link
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography color="text.grey" variant="h6" >
                      Diagrama Atómico:
                    </Typography>
                  </Grid>
                  <Grid item pr={4}>
                    <Link variant={"caption"} color="primary.light2" target="_blank" href="" underline="none">
                      Link
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography color="text.grey" variant="h6" >
                      Figma:
                    </Typography>
                  </Grid>
                  <Grid item pr={4}>
                    <Link variant={"caption"} color="primary.light2" target="_blank" href="https://www.figma.com/file/ZdHwSFapYpBNi2qdRzZkVX/Diferidos-CA?node-id=300%3A319965" underline="none">
                      Link
                    </Link>
                  </Grid>
                  <Grid sx={{ display: "none" }}>
                    <Grid item>
                      <Typography color="text.grey" variant="h6" >
                        Diagrama Arquitectura SPA:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Link variant={"caption"} color="primary.light2" href="#" underline="none">
                        Link
                      </Link>
                    </Grid>
                  </Grid>

                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CoverFrame>
      <TemplateList />
    </ThemeProvider>
  );
}

export default function Cover() {
  return <CoverContent />;
}
