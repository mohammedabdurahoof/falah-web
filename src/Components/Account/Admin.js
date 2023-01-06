import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config';
import { columns } from './data';

export default function Admin() {
    const [rows, setRows] = useState([])
    useEffect   (() => {
      getData()
    }, [])
     const getData = async () => {
        const userArr  =[]
      
        const querySnapshot = await getDocs(collection(db, "user"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          userArr.push({id:doc.get('uid'), adno: doc.get('adno'), name: doc.get('name'), batch: doc.get('batch'), phone: doc.get('phone'), location: doc.get('location') })
          // console.log(doc.id, " => ", doc.data());
        });
        setRows(userArr);
      }

    return (
      <div style={{ height: 640, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    );
  }