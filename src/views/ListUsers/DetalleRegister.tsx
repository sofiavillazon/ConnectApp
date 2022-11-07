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
} from "@mui/material";
import theme from "../../theme";
import { styled, ThemeProvider } from "@mui/material/styles";
import { Accordion, Alert, CardList, FlagEcuador, FlagMexico, FlagPeru, IconAlertTriangle, IconBank, IconChartSmall, IconChevronLeft, IconCircleCheck, IconCopy, IconEdit, IconSearch, IconUnLock, IconUser, ModalContent, ModalContentButtonTypeEnum, ModalContentTypeEnum, ModalHeader, SelectSearchBy, TableInfo, TableSimple } from "@kushki/connect-ui";
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
var text2 = (JSON.stringify(texto, null, 2));

export default function DetalleRegister() {
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
          <Grid className="bodyContent" >


            <Stack direction={"column"} gap={5} alignItems={"flex-start"} >
              <NavLink to={"/user/0"} style={{ textDecoration: 'none' }}>
                <Button className={"buttonLink"} color="primary" startIcon={<IconChevronLeft />}>
                  Regresar
                </Button>
              </NavLink>
              <Grid sx={ContraCss.modalHeader}>
                <ModalHeader
                  buttonSecondary={{
                    onClick: modalOpen,
                    text: 'Ver historial'
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
              <Grid container xs={12} bgcolor='white' gap={2} direction={"column"} sx={DetalleCss.bgsection} >
                <CardList
                  items={[
                    {
                      label: 'Número de contracargos',
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
                  title="Detalle "
                />
                <Grid container direction="row" xs={12} sx={DetalleCss.card} p={3}>
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
                        {'"nombresyapellidos": "Jack Smith",'} <br />
                        {' "documentodeid": "23456789",'}<br />
                        {'"id": "f5123dea-6cfd-46c8-8a19-0d25f0faefc0",'} <br />
                        {' "email": "jackSmith@kushki.com", '} <br />
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
