import * as React from "react";

import { useState } from "react";
import { NavLink, useParams } from 'react-router-dom';
import {
  Grid,
  Typography,
  Box,
  IconButton,
  Paper,
  Chip,
  Badge,
  Stack,
  Button,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  MenuItem,
  Autocomplete,
  Link
} from "@mui/material";
import theme from "../../theme";
import { styled, ThemeProvider } from "@mui/material/styles";
import { Accordion, Alert, CardList, FlagEcuador, FlagMexico, FlagPeru, IconAlertTriangle, IconBank, IconChartSmall, IconChevronLeft, IconCircleCheck, IconCopy, IconDownload, IconEdit, IconSearch, IconUnLock, IconUser, ModalContent, ModalContentButtonTypeEnum, ModalContentTypeEnum, ModalHeader, SelectSearchBy, TableInfo, TableSimple } from "@kushki/connect-ui";
import Topbar from "Components/Topbar";
import { DetalleCss } from "../styles/Detalle.styles";
import { ContraCss } from "../styles/Contracargos.styles";
import ItemSidebar from "Components/ItemSidebar";

var texto = {
  metadata: {
    smartlinkID: 'ZAQP8-3Kd',
    nombresyapellidos: "Manuel Ochoa",
    documentodeid: "23456789",
    id: "f5123dea-6cfd-46c8-8a19-0d25f0faefc0",
    email: "dayannis.estrada@kushkipagos.com"
  }
};
var text2 = (JSON.stringify(`${texto}`));

export default function DetalleInicializadas() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const ModalClose = () => {
    setIsModalOpen(false);
  };
  const optionsSelector = [
    { label: "Opción 1", value: "1" },
    { label: "Opción 2", value: "2" },
    { label: "Opción 3", value: "3" },
    { label: "Opción 4", value: "4" },
    { label: "Opción 5", value: "5" }
  ];

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Topbar />
        <ItemSidebar />
        <Grid container sx={ContraCss.body}>
          <Grid item className="bodyContent">
            <Stack direction={"column"} gap={5} alignItems={"flex-start"}  >
              <NavLink to={"/user/1"} style={{ textDecoration: 'none' }}>
                <Button className={"buttonLink"} color="primary" startIcon={<IconChevronLeft />}>
                  Regresar
                </Button>
              </NavLink>
              <Grid >
                <ModalHeader
                  buttonSecondary={{
                    onClick: modalOpen,
                    text: 'Ver Historial'
                  }}
                  secondaryText="Walmart"
                  subtitle={{
                    country: 'Ecuador',
                    type: 'country',

                  }}
                  tags={[
                    {
                      color: 'success',
                      text: 'Aprobada'
                    }
                  ]}
                  title="Jack Smith" isLoading={false} />
              </Grid>
              <Grid container xs={12} sx={DetalleCss.bgsection} >
                <Grid xs={12} md={6} spacing={2}>
                  <Grid xs={12} pr={1}>
                    <CardList
                      items={[
                        {
                          label: 'Número de contracargo',
                          secondaryText: '',
                          text: '3641224970752755'
                        },
                        {
                          label: 'Fecha de inicio',
                          secondaryText: '',
                          text: '30-09-2022 10:41'
                        },
                        {
                          label: 'Fecha de respuesta',
                          secondaryText: '',
                          text: '30-09-2022 10:41'
                        },
                        {
                          label: 'Recepción de documentos',
                          secondaryText: '',
                          text: '30-09-2022 10:41'
                        }
                      ]}
                      orientation="horizontal"
                      title="Detalle"
                    />
                  </Grid>
                  <Grid xs={12} mr={1} mt={2} sx={DetalleCss.card}>
                    <Stack direction={"column"} gap={3} p={3}>
                      <Typography color="text.dark" variant="h6" >
                        Detalle de la transacción
                      </Typography>
                      <Stack direction={"column"} gap={1}>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                          <Typography color="text.grey" variant="caption">
                            juanperez@walmart.com
                          </Typography>
                          <Chip label="APROBADA" color="success" />
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                          <Typography color="text.grey" variant="caption">
                            juanperez@walmart.com
                          </Typography>
                          <Chip label="APROBADA" color="success" />
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                          <Typography color="text.grey" variant="caption">
                            juanperez@walmart.com
                          </Typography>
                          <Chip label="APROBADA" color="success" />
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                          <Typography color="text.grey" variant="caption">
                            juanperez@walmart.com
                          </Typography>
                          <Chip label="APROBADA" color="success" />
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                          <Typography color="text.grey" variant="caption">
                            juanperez@walmart.com
                          </Typography>
                          <Chip label="APROBADA" color="success" />
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                          <Typography color="text.grey" variant="caption">
                            juanperez@walmart.com
                          </Typography>
                          <Chip label="APROBADA" color="success" />
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} mt={1}>
                          <Link >Ver más</Link>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid xs={12} md={6}>
                  <Grid xs={12} ml={1} sx={DetalleCss.card}>
                    <Stack direction={"column"} gap={1} p={3}>
                      <Typography color="text.dark" variant="h6" >
                        Detalle de la transacción
                      </Typography>
                      <Typography color="text.dark" variant="caption" mb={3}>
                        Ticket number: 840664430198060622
                      </Typography>
                      <Divider />
                    </Stack>
                    <CardList
                      items={[
                        {
                          label: 'Medio de pago',
                          secondaryText: '',
                          text: 'Tarjeta'
                        },
                        {
                          label: 'Tarjeta',
                          secondaryText: '',
                          text: '**** 4848'
                        },
                        {
                          label: 'No. de aprobación',
                          secondaryText: '',
                          text: '3245127588979'
                        },
                        {
                          label: 'Subtotal',
                          secondaryText: '',
                          text: '120.00 USD'
                        },
                        {
                          label: 'Impuestos',
                          secondaryText: '',
                          text: '1.12 USD'
                        },
                        {
                          label: 'Total',
                          secondaryText: '',
                          text: '121.12 USD'
                        }
                      ]}
                      orientation="horizontal"
                      title=""
                    />
                  </Grid>
                  <Grid xs={12} ml={1} mt={2} sx={DetalleCss.card}>
                    <Stack direction={"row"} gap={1} p={3} alignItems="center">
                      <Typography color="text.dark" variant="h6" >
                        Detalle de la transacción
                      </Typography>
                      <IconButton size="small" color="inherit"><IconEdit /></IconButton>
                    </Stack>
                    <CardList
                      items={[
                        {
                          label: 'Tipo',
                          secondaryText: '',
                          text: '-'
                        },
                        {
                          label: 'Fraude',
                          secondaryText: '',
                          text: '-'
                        },
                        {
                          label: 'Motivo',
                          secondaryText: '',
                          text: '-'
                        },
                        {
                          label: 'Disputa del tarjetahabiente',
                          secondaryText: '',
                          text: '-'
                        },
                      ]}
                      orientation="horizontal"
                      title=""
                    />
                  </Grid>
                </Grid>
                <Grid container direction="row" xs={12} sx={DetalleCss.card} p={3} mt={2}>
                  <Grid item xs={12}>
                    <Typography color="text.dark" variant="h6" mb={3} >
                      Documentación de respaldo
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} sx={DetalleCss.card2}>
                    <Typography color="text.grey" variant="caption">
                      Cartel de establecimiento
                    </Typography>
                    <Button size="small" endIcon={<IconDownload />} variant="contained" color="secondary">
                      2022_05_03_EV_wdxnhvE1JkywYMk
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6} sx={DetalleCss.card2}>
                    <Typography color="text.grey" variant="caption">
                      Documentos
                    </Typography>
                    <Button size="small" endIcon={<IconDownload />} variant="contained" color="secondary">
                      2022_05_03_EV_wdxnhvE1JkywYMk
                    </Button>
                  </Grid>

                </Grid>
                <Grid container direction="row" xs={12} sx={DetalleCss.card} p={3} mt={2}>
                  <Grid item xs={12}>
                    <Typography color="text.dark" variant="h6" mb={3} >
                      Metadata
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography color="text.grey" variant="overline" mb={3} sx={{ lineHeight: "200%" }} >
                        {"{"}<br />
                        {'"metadata"{'}<br />

                        {'"smartlinkId":"ZAQP8-3Kd",'} <br />
                        {'"nombresyapellidos": "Manuel Ochoa",'} <br />
                        {' "documentodeid": "23456789",'}<br />
                        {'"id": "f5123dea-6cfd-46c8-8a19-0d25f0faefc0",'} <br />
                        {' "email": "dayannis.estrada@kushkipagos.com", '} <br />
                        {"}"}
                      </Typography>
                      <IconButton size="small" color="inherit"><IconCopy /></IconButton>
                    </Stack>
                  </Grid>

                </Grid>
              </Grid>

            </Stack>
          </Grid>
        </Grid>
        <ModalContent
          buttonSecondaryText="Cancelar"
          buttonText="Guardar"
          onClose={ModalClose}
          titleText="Tipo y motivo del contracargo"
          buttonAction={() => { }}
          isOpen={isModalOpen}
          type={ModalContentTypeEnum.DEFAULT}
          buttonType={ModalContentButtonTypeEnum.PRIMARY}
          descriptionText={""}          >
          <Stack direction={"column"} gap={2}>
            <Typography color="text.dark" variant="body2">
              Tipo:
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel control={<Radio />} label="Fraude" value={true} />
              <FormControlLabel control={<Radio />} label="Administrativo" value={false} />
            </RadioGroup>
            <Typography color="text.dark" variant="body2">
              Motivo:
            </Typography>
            <Autocomplete
              disablePortal
              options={optionsSelector}
              noOptionsText={"No hay opciones"}
              renderInput={(params) => (
                <TextField {...params} label="Disputa del tarjetahabiente" />
              )}
            />

          </Stack>
        </ModalContent>

      </ThemeProvider >
    </React.Fragment >
  );
}
