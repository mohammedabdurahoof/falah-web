import React, { useEffect, useState } from 'react'
import AppBarView from '../Appbar'
import Navbar from '../Navbar'
import './style.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button, IconButton, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { auth, db } from '../../firebase-config';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';

function History() {
  const [data, setData] = useState([])
  const [admin, setAdmin] = useState(false)




  const getData = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const cUser = await getDocs(query(collection(db, "user"), where("uid", "==", user.uid)));
        // var history;
        cUser.forEach(async (docss) => {
          // doc.data() is never undefined for query doc snapshots
          if (docss.get('type') === 'admin') {
            var adminHistory = await getDocs(collection(db, "payment"));
            var adminHistoryArr = []
            adminHistory.forEach(async(doc) => {
              // doc.data() is never undefined for query doc snapshots
              var userName = await getDocs(query(collection(db, "user"), where("uid", "==", doc.get('uid'))))
              userName.forEach(element => {
                var data = doc.data()
                data['name'] = element.get('name')
                data['id'] = doc.id
                adminHistoryArr.push(data)
                setData(adminHistoryArr);
              });
            })
            setAdmin(true)
          } else {
            var history = await getDocs(query(collection(db, "payment"), where("uid", "==", user.uid)));
            var historyArr = []
            history.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              var data = doc.data()
              data['id'] = doc.id
              historyArr.push(data)
            })
            setData(historyArr);
            setAdmin(false)
          }
        })


      }
    }
    )
  }

  useEffect(() => {
    getData()

  }, [])


  const confrim = async (id) => {
    await updateDoc(doc(db, "payment", id), {
      status: 'confrimed',
    }).then(() => getData());

  }




  return (
    <>
      <AppBarView />
      {console.log(data)}
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
                <div>
                  {
                    admin && <Typography variant='caption'>
                      {item.name}
                    </Typography>
                  }
                </div>
                <Typography variant='caption'>
                  {new Date(item.date.seconds * 1000).toISOString().split('T')[0] + '   ' + new Date(item.date.seconds * 1000).toLocaleTimeString()}
                </Typography>
              </div>
            </div>
            {item.status === 'pending' ?
              admin ? <Button variant="contained" color='error' onClick={() => confrim(item.id)} >Confirm</Button> : <div className='status'>
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