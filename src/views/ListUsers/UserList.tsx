import * as React from "react";

import { useState } from "react";
import { useParams } from 'react-router-dom';
import {
  Grid,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Tab,
  Tabs,
  Stack,
  Divider,
} from "@mui/material";
import theme from "../../theme";
import Topbar from "../../Components/Topbar";
import ItemSidebar from "../../Components/ItemSidebar";
import { styled, ThemeProvider } from "@mui/material/styles";
import { FlagPanama, IconDownload, IconEdit, IconPlus, MessageBlock, SelectCheck, SelectNewItem, SplitButton, Title } from "@kushki/connect-ui";
import { TabsForm } from "../styles/TabsForm.styles"
import { ContainerFormCss } from "../styles/ContainerForm.styles"
import DiferidosMexico from "../Login/Login";
import { ContraCss } from "../styles/Contracargos.styles";
import Inicializadas from "./WaitList";
import PorIniciar from "./registered";
import noItem from "../../assets/images/NoItemsCart.svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className={'tab-panel-mui'}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Contracargos() {
  const { index } = useParams();
  const [value, setValue] = React.useState(index);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue.toString());
  };

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
                      iconButton={<IconPlus />}
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
                          text: 'Users',
                          url: 'user'
                        }
                      ]}
                      onButtonClick={() => { }}
                      onButtonClickSecondary={function noRefCheck() { }}
                      splitButton={<SplitButton icon={<IconDownload />} items={[{ id: '1', text: 'Descargar con .csv' }, { id: '2', text: 'Descargar con .xls' }, { id: '3', text: 'Descargar con .txt' }]} onItemSelected={function noRefCheck() { }} size="small" text="Descargar" type="default" variant="primary" />}
                      textButton="New User"
                      title="List of Users"
                      type="withButtonIconSplitButton"
                    />
                  </Box>
                </Stack>
              </Stack>

              <Stack sx={TabsForm.tabsForm}>
                <Tabs value={Number(value)} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Registered" {...a11yProps(0)} />
                  <Tab label="Wait List" {...a11yProps(1)} />
                  <Tab label="Deleted" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={Number(value)} index={0}>
                  <PorIniciar />
                </TabPanel>
                <TabPanel value={Number(value)} index={1}>
                  <Inicializadas />
                </TabPanel>
                <TabPanel value={Number(value)} index={2}>
                  <MessageBlock
                    body="You still have no users deleted"
                    image={<img alt="Logo UI" src={noItem} width="40%" />}
                    onButtonClick={() => { }}
                    title="Ups!"
                    typeMessage={1}
                  />
                </TabPanel>
              </Stack>

            </Stack>

          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}
