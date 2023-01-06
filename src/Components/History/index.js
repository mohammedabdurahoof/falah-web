import React, { useEffect, useState } from 'react'
import AppBarView from '../Appbar'
import Navbar from '../Navbar'
import './style.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { IconButton, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { auth, db } from '../../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';

function History() {
  const [data, setData] = useState([])
  const [admin, setAdmin] = useState(false)


  const getUser = async () => {
    auth.onAuthStateChanged(async (re) => {
      if (re) {
        const user = await getDocs(query(collection(db, "user"), where("uid", "==", re.uid)));
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.get('type'));
          if (doc.get('type') == 'admin') {
            setAdmin(true)
          } else {
            setAdmin(false)
          }
        })
      }
    }
    )
  }

  const getData = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const cUser = await getDocs(query(collection(db, "user"), where("uid", "==", user.uid)));
        // var history;
        cUser.forEach(async (doc) => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.get('type') == 'admin') {
            var history = await getDocs(collection(db, "payment"));
            var historyArr = []
            history.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              const data = doc.data()
              data['id'] = doc.id
              historyArr.push(data)
            })
            setData(historyArr);
          } else {
            var history = await getDocs(query(collection(db, "payment"), where("uid", "==", user.uid)));
            var historyArr = []
            history.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              const data = doc.data()
              data['id'] = doc.id
              historyArr.push(data)
            })
            setData(historyArr);
          }
        })


      }
    }
    )
  }

  useEffect(() => {
    getData()

  }, [])




  return (
    <>
      <AppBarView />
      <div className='history'>
        {data.map((item, index) =>
          <div className='history-item' key={index}>
            <div className='cash-main'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1, backgroundColor: '#ffc107', color: '#fff' }}
              >
                <CurrencyRupeeIcon />
              </IconButton>
              <div className='cash'>
                <Typography variant='h6' color={'#14A44D'}>
                  {item.amount}.00
                </Typography>
                <Typography variant='caption'>
                  {new Date(item.date.seconds * 1000).toISOString().split('T')[0] + '   ' + new Date(item.date.seconds * 1000).toLocaleTimeString()}
                </Typography>
              </div>
            </div>
            {item.status == 'pending' ? <div className='status'>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ color: '#DC4C64' }}
              >
                <SettingsBackupRestoreIcon fontSize='small' />
              </IconButton>
              <Typography variant='body1' color={'#DC4C64'}>
                Pending
              </Typography>
            </div> : <div className='status'>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ color: '#3B71CA' }}
              >
                <FiberManualRecordIcon fontSize='small' />
              </IconButton>
              <Typography variant='body1' color={'#3B71CA'}>
                Confirmed
              </Typography>
            </div>}

          </div>
        )}
      </div>
      <Navbar value='history' />
    </>
  )
}

export default History