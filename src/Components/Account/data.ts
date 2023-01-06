import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';



export const columns: GridColDef[] = [
  { field: 'adno', headerName: 'AdNo', width: 70,type: 'number' },
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'batch', headerName: 'Batch', width: 70,type: 'number' },
  { field: 'phone', headerName: 'phone', width: 130,type: 'number' },
  {
    field: 'location',
    headerName: 'Location',
    width: 90,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];




