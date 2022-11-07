import * as React from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    Stack,
    Paper,
    TextField,
    MenuItem,
} from "@mui/material";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Accordion, IconEdit, IconMore, IconTrash, IconPlus, Alert, IconDownload, SplitButton, Title, FlagColombia, FlagEcuador, FlagMexico, FlagPeru } from "@kushki/connect-ui";
import { color, height } from "@mui/system";
import ItemSidebar from "Components/ItemSidebar";
import Topbar from "Components/Topbar";
import { ContraCss } from "views/styles/Contracargos.styles";

export default function NewUser() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Topbar />
                <ItemSidebar />
                <Grid container sx={ContraCss.body}>

                    <Grid item className="bodyContent">
                        <Stack direction={"column"} gap={3} >
                            <Stack direction={"column"} gap={0}>
                                <Stack direction={"row"} alignItems="center" justifyContent={"space-between"}>
                                    <Box
                                        sx={{
                                            boxSizing: 'border-box',
                                            width: '100%'
                                        }}
                                    >
                                        <Title
                                            items={[
                                                {
                                                    id: '1',
                                                    text: 'Home',
                                                    url: 'home'
                                                },
                                                {
                                                    id: '3',
                                                    text: 'Walmart Norte',
                                                    url: 'walmart'
                                                },
                                                {
                                                    id: '2',
                                                    text: 'New User',
                                                    url: 'nuevo'
                                                }
                                            ]}
                                            title="New User"
                                            type="titleBase"
                                        />
                                    </Box>
                                </Stack>
                            </Stack>


                        </Stack>

                        <Paper elevation={4}>

                            <Grid px={5} py={5} mt={5}>

                                <Grid container spacing={8} columns={12}>
                                    <Grid item xs={6}>
                                        <Stack direction={"column"} gap={3} >
                                            <Typography color="text.primary" variant="h5">Información personal </Typography>

                                            <TextField
                                                fullWidth
                                                label="Selecciona el país"
                                                select
                                            >
                                                <MenuItem value="">
                                                    <small>Vacío</small>
                                                </MenuItem>
                                                <MenuItem value={1}>Opción 1</MenuItem>
                                                <MenuItem value={2}>Opción 2</MenuItem>
                                                <MenuItem value={3}>Opción 3</MenuItem>
                                            </TextField>


                                            <TextField
                                                label="Nombre"
                                                variant="outlined"
                                            />
                                            <TextField
                                                label="Apellido"
                                                variant="outlined"
                                            />

                                            <TextField
                                                label="Ingresa ID"
                                                variant="outlined"
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Stack direction={"column"} gap={3} >
                                            <Typography color="text.primary" variant="h5">Sobre la empresa </Typography>

                                            <TextField
                                                fullWidth
                                                label="Selecciona el país"
                                                select
                                            >
                                                <MenuItem value="">
                                                    <small>Vacío</small>
                                                </MenuItem>
                                                <MenuItem value={1}>Opción 1</MenuItem>
                                                <MenuItem value={2}>Opción 2</MenuItem>
                                                <MenuItem value={3}>Opción 3</MenuItem>
                                            </TextField>


                                            <TextField
                                                label="Nombre"
                                                variant="outlined"
                                            />
                                            <TextField
                                                label="Apellido"
                                                variant="outlined"
                                            />

                                            <TextField
                                                label="Ingresa ID"
                                                variant="outlined"
                                            />
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Stack 
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={2}
                                    mt={6}
                                >
                                    <Button size="medium" variant="contained" color="error">Cancelar </Button>
                                    <Button color="secondary" variant="outlined" size="medium">Guardar y agregar otro</Button>
                                    <Button size="medium" variant="contained" color="primary" > Guardar</Button>
                                </Stack>            


                            </Grid>
                        </Paper>

                    </Grid>
                </Grid>
            </ThemeProvider>
        </React.Fragment>
    )
}