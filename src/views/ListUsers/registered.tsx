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
import { Accordion, IconEdit, IconMore, IconTrash, IconPlus, Alert, FilterBar, TableSimple, IconDownload } from "@kushki/connect-ui";
import { color, height } from "@mui/system";
import { TableBodyCellEnum } from "@kushki/connect-ui/dist/Components/Organism/Table/TableSimple/constants";
import { useNavigate } from "react-router-dom";

export default function PorIniciar() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/detalle-registered`;
        navigate(path);
    }
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Stack direction={"column"} gap={3}>
                    <FilterBar
                        filterDetailBar={{
                            filters: [],
                            onChangeFilters: () => { }
                        }}
                        filterSideBar={{
                            categoryItems: [
                                {
                                    isMinimize: true,
                                    items: [
                                        {
                                            label: 'Colombia',
                                            selected: false,
                                            value: 'col'
                                        },
                                        {
                                            label: 'México',
                                            selected: false,
                                            value: 'mex'
                                        },
                                        {
                                            label: 'Chile',
                                            selected: false,
                                            value: 'chil'
                                        },
                                        {
                                            label: 'Perú',
                                            selected: false,
                                            value: 'per'
                                        },
                                        {
                                            label: 'Ecuador',
                                            selected: false,
                                            value: 'ecu'
                                        }
                                    ],
                                    onExpand: function noRefCheck() { },
                                    onItemsSelect: function noRefCheck() { },
                                    placeHolder: 'Country',
                                    selectType: 'multiple',
                                    type: 'byChips'
                                },
                                {
                                    isMinimize: true,
                                    items: [
                                        {
                                            label: 'Active',
                                            selected: false,
                                            value: '1'
                                        },{
                                            label: 'Weiting for aproval',
                                            selected: false,
                                            value: '2'
                                        },{
                                            label: 'Pending form',
                                            selected: false,
                                            value: '3'
                                        },
                                    ],
                                    onExpand: function noRefCheck() { },
                                    onItemsSelect: function noRefCheck() { },
                                    placeHolder: 'State',
                                    selectType: 'multiple',
                                    type: 'byChips'
                                },
                                {
                                    isMinimize: true,
                                    items: [
                                        {
                                            label: 'Activo',
                                            selected: false,
                                            value: 'MEXICO'
                                        },
                                        {
                                            label: 'Pendiente',
                                            selected: false,
                                            value: 'COLOMBIA'
                                        },
                                        {
                                            label: 'Inactivo',
                                            selected: false,
                                            value: 'ECUADOR'
                                        },
                                    ],
                                    onExpand: function noRefCheck() { },
                                    onItemsSelect: function noRefCheck() { },
                                    placeHolder: 'Estado de comercio',
                                    selectType: 'multiple',
                                    type: 'byChips'
                                },
                                {
                                    isMinimize: true,
                                    items: [
                                        {
                                            label: 'Grupo empresarial',
                                            selected: false,
                                            value: 'grupo'
                                        },
                                        {
                                            label: 'Empresa',
                                            selected: false,
                                            value: 'empresa'
                                        }
                                    ],
                                    onExpand: function noRefCheck() { },
                                    onItemsSelect: function noRefCheck() { },
                                    placeHolder: 'Client',
                                    selectType: 'multiple',
                                    type: 'byChips'
                                },

                            ],
                            filtersCount: 0,
                            isMinimized: false,
                            isOpen: true,
                            onClick: function noRefCheck() { },
                            title: 'Filtrar por'
                        }}
                        rangeDatePicker={{
                            dateFormat: 'dd/MMM/yyyy',
                            disabledFutureDate: false,
                            disabledOldDate: false,
                            isFilled: false,
                            isOpen: false,
                            onDateSelect: function noRefCheck() { },
                            placeholder: 'Search by date'
                        }}
                        textFieldSearchBy={{
                            items: [
                                {
                                    id: '578458956231',
                                    secondaryText: '256458956231',
                                    text: 'Varun Bose'
                                },{
                                    id: '256584586231',
                                    secondaryText: '256458956231',
                                    text: 'Alex Lee'
                                },{
                                    id: '125458956231',
                                    secondaryText: '256458956231',
                                    text: 'Jack Smith'
                                },{
                                    id: '855285956231',
                                    secondaryText: '256458956231',
                                    text: 'Leonardo Prince'
                                },{
                                    id: '8542956231',
                                    secondaryText: '256458956231',
                                    text: 'Miriam Andrade'
                                },{
                                    id: '1452956231',
                                    secondaryText: '256458956231',
                                    text: 'Alice Swan'
                                },
                            ],
                            onItemSelected: function noRefCheck() { },
                            placeholder: 'Search ID o Name',
                            type: "default",
                            onChange: () => { }
                        }}
                      
                    />
                
                    <TableSimple
                        header={{
                            cells: [
                                {
                                    align: 'left',
                                    spacing: 0,
                                    text: 'Country',
                                    type: 'default',
                                    width: 20,
                                },
                                {
                                    align: 'left',
                                    spacing: 0,
                                    text: 'Name',
                                    type: 'default',
                                    width: 200,
                                },
                                {
                                    align: 'left',
                                    spacing: 0,
                                    text: 'Personal information',
                                    type: 'default',
                                    width: 300,
                                },
                                {
                                    align: 'left',
                                    spacing: 0,
                                    text: 'Date of Bith',
                                    type: 'default',
                                    width: 850,
                                },
                                {
                                    align: 'right',
                                    spacing: 0,
                                    text: ' ',
                                    type: 'default',
                                    
                                },
                                {
                                    align: 'right',
                                    spacing: 0,
                                    text: ' ',
                                    type: 'default',
                                    width: 20,
                                },
                                
                            ],
                            headerProps: {
                                isDisable: false
                            }
                        }}
                        rows={[
                            {
                                cells: [
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'center',
                                            spacing: 1
                                          },
                                          country: 'Chile',
                                          type: 'oneline',
                                        },
                                        type: TableBodyCellEnum.FLAG,
                                    },
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'left',
                                            spacing: 1
                                          },
                                          line1: 'Jack Smith',
                                          line2: 'Male, 32yr',
                                          type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TITLE
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: 'ID: 45845152',
                                            line2: 'Phone: +51 2548415',
                                            type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TEXT,

                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: '30/May/22',
                                            type: 'oneLine'
                                        },
                                        type: TableBodyCellEnum.TEXT
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            color: 'success',
                                            text: 'Active',
                                          
                                        },
                                        type: TableBodyCellEnum.TAG
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            isDisabled: false,
                                            optionListItems: [
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Descargar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Editar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Eliminar',
                                                    type: 'type2'
                                                }
                                            ]
                                        },
                                        type: TableBodyCellEnum.OPTIONS
                                    }
                                ],
                                id: '1',
                                rowProps: {
                                    color: 'default',
                                    onClick: routeChange
                                }
                            },
                            {
                                cells: [
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'center',
                                            spacing: 1
                                          },
                                          country: 'Nicaragua',
                                          type: 'oneline',
                                        },
                                        type: TableBodyCellEnum.FLAG,
                                    },
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'left',
                                            spacing: 1
                                          },
                                          line1: 'Leonardo prince',
                                          line2: 'Male, 32yr',
                                          type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TITLE
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: 'ID: 45845152',
                                            line2: 'Phone: +51 2548415',
                                            type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TEXT,

                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: '30/May/22',
                                            type: 'oneLine'
                                        },
                                        type: TableBodyCellEnum.TEXT
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            color: 'success',
                                            text: 'Active',
                                          
                                        },
                                        type: TableBodyCellEnum.TAG
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            isDisabled: false,
                                            optionListItems: [
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Descargar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Editar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Eliminar',
                                                    type: 'type2'
                                                }
                                            ]
                                        },
                                        type: TableBodyCellEnum.OPTIONS
                                    }
                                ],
                                id: '1',
                                rowProps: {
                                    color: 'default',
                                    onClick: routeChange
                                }
                            },
                            {
                                cells: [
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'center',
                                            spacing: 1
                                          },
                                          country: 'Ecuador',
                                          type: 'oneline',
                                        },
                                        type: TableBodyCellEnum.FLAG,
                                    },
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'left',
                                            spacing: 1
                                          },
                                          line1: 'Miriam andrade',
                                          line2: 'Male, 32yr',
                                          type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TITLE
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: 'ID: 45845152',
                                            line2: 'Phone: +51 2548415',
                                            type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TEXT,

                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: '30/May/22',
                                            type: 'oneLine'
                                        },
                                        type: TableBodyCellEnum.TEXT
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            color: 'success',
                                            text: 'Active',
                                          
                                        },
                                        type: TableBodyCellEnum.TAG
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            isDisabled: false,
                                            optionListItems: [
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Descargar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Editar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Eliminar',
                                                    type: 'type2'
                                                }
                                            ]
                                        },
                                        type: TableBodyCellEnum.OPTIONS
                                    }
                                ],
                                id: '1',
                                rowProps: {
                                    color: 'default',
                                    onClick: routeChange
                                }
                            },
                            {
                                cells: [
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'center',
                                            spacing: 1
                                          },
                                          country: 'El Salvador',
                                          type: 'oneline',
                                        },
                                        type: TableBodyCellEnum.FLAG,
                                    },
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'left',
                                            spacing: 1
                                          },
                                          line1: 'Alice Swan',
                                          line2: 'Male, 32yr',
                                          type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TITLE
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: 'ID: 45845152',
                                            line2: 'Phone: +51 2548415',
                                            type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TEXT,

                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: '30/May/22',
                                            type: 'oneLine'
                                        },
                                        type: TableBodyCellEnum.TEXT
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            color: 'success',
                                            text: 'Active',
                                          
                                        },
                                        type: TableBodyCellEnum.TAG
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            isDisabled: false,
                                            optionListItems: [
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Descargar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Editar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Eliminar',
                                                    type: 'type2'
                                                }
                                            ]
                                        },
                                        type: TableBodyCellEnum.OPTIONS
                                    }
                                ],
                                id: '1',
                                rowProps: {
                                    color: 'default',
                                    onClick: routeChange
                                }
                            },
                            {
                                cells: [
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'center',
                                            spacing: 1
                                          },
                                          country: 'Colombia',
                                          type: 'oneline',
                                        },
                                        type: TableBodyCellEnum.FLAG,
                                    },
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'left',
                                            spacing: 1
                                          },
                                          line1: 'Alex Lee',
                                          line2: 'Male, 32yr',
                                          type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TITLE
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: 'ID: 45845152',
                                            line2: 'Phone: +51 2548415',
                                            type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TEXT,

                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: '30/May/22',
                                            type: 'oneLine'
                                        },
                                        type: TableBodyCellEnum.TEXT
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            color: 'success',
                                            text: 'Active',
                                          
                                        },
                                        type: TableBodyCellEnum.TAG
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            isDisabled: false,
                                            optionListItems: [
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Descargar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Editar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Eliminar',
                                                    type: 'type2'
                                                }
                                            ]
                                        },
                                        type: TableBodyCellEnum.OPTIONS
                                    }
                                ],
                                id: '1',
                                rowProps: {
                                    color: 'default',
                                    onClick: routeChange
                                }
                            },
                            {
                                cells: [
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'center',
                                            spacing: 1
                                          },
                                          country: 'Mexico',
                                          type: 'oneline',
                                        },
                                        type: TableBodyCellEnum.FLAG,
                                    },
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'left',
                                            spacing: 1
                                          },
                                          line1: 'MAthew',
                                          line2: 'Male, 32yr',
                                          type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TITLE
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: 'ID: 45845152',
                                            line2: 'Phone: +51 2548415',
                                            type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TEXT,

                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: '30/May/22',
                                            type: 'oneLine'
                                        },
                                        type: TableBodyCellEnum.TEXT
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            color: 'success',
                                            text: 'Active',
                                          
                                        },
                                        type: TableBodyCellEnum.TAG
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            isDisabled: false,
                                            optionListItems: [
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Descargar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Editar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Eliminar',
                                                    type: 'type2'
                                                }
                                            ]
                                        },
                                        type: TableBodyCellEnum.OPTIONS
                                    }
                                ],
                                id: '1',
                                rowProps: {
                                    color: 'default',
                                    onClick: routeChange
                                }
                            },
                            {
                                cells: [
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'center',
                                            spacing: 1
                                          },
                                          country: 'Peru',
                                          type: 'oneline',
                                        },
                                        type: TableBodyCellEnum.FLAG,
                                    },
                                    {
                                        props: {
                                          cellProps: {
                                            align: 'left',
                                            spacing: 1
                                          },
                                          line1: 'Varum Bose',
                                          line2: 'Male, 32yr',
                                          type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TITLE
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: 'ID: 45845152',
                                            line2: 'Phone: +51 2548415',
                                            type: 'twoLines'
                                        },
                                        type: TableBodyCellEnum.TEXT,

                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            line1: '30/May/22',
                                            type: 'oneLine'
                                        },
                                        type: TableBodyCellEnum.TEXT
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            color: 'success',
                                            text: 'Active',
                                          
                                        },
                                        type: TableBodyCellEnum.TAG
                                    },
                                    {
                                        props: {
                                            cellProps: {
                                                align: 'left',
                                                spacing: 1
                                            },
                                            isDisabled: false,
                                            optionListItems: [
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Descargar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Editar',
                                                    type: 'type1'
                                                },
                                                {
                                                    Icon: function () { return <></>; },
                                                    disable: false,
                                                    handleOptionClick: function noRefCheck() { },
                                                    onClick: function noRefCheck() { },
                                                    optionText: 'Eliminar',
                                                    type: 'type2'
                                                }
                                            ]
                                        },
                                        type: TableBodyCellEnum.OPTIONS
                                    }
                                ],
                                id: '1',
                                rowProps: {
                                    color: 'default',
                                    onClick: routeChange
                                }
                            },
                            
                        ]} showPagination={true}
                        footerPagination={{
                            isDisable: false,
                            paginationText: "Transacciones por página",
                            textFieldSelector: [10, 25, 50, 100, 250],
                            totalItems: 6,
                            itemsPerPage: 10,
                            selectedPage: 1,
                            onItemsPerPageChange: function noRefCheck() { },
                            onPageClick: function noRefCheck() { },
                        }} />
                </Stack>
            </ThemeProvider>
        </React.Fragment>
    )
}