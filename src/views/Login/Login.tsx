import * as React from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    Stack,
} from "@mui/material";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Accordion, IconEdit, IconMore, IconTrash, IconPlus, Alert } from "@kushki/connect-ui";
import { color, height } from "@mui/system";

export default function Login() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Stack direction={"column"} gap={3}>
                    <Stack direction={"row"} alignItems={"space-between"}>
                        <Typography variant="h3" color="primary">
                            Servicios
                        </Typography>
                        <Button color="secondary" variant="outlined" size="small" startIcon={<IconPlus />} >
                            Agregar diferido
                        </Button>
                    </Stack>
                    <Stack>
                        <Alert
                            description="Al estar centralizado el branch, solo es posible modificar la información de las credenciales. Puedes continuar la creación sin hacer cambios."
                            type="informative"
                            closeButton={false}
                        />
                    </Stack>

                </Stack>
            </ThemeProvider>
        </React.Fragment>
    )
}