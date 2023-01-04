import React from 'react'
import AppBarView from '../Appbar'
import Navbar from '../Navbar'
import './style.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { IconButton, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

function History() {
  return (
    <>
      <AppBarView />
      <div className='history'>
        <div className='history-item'>
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
                100.00
              </Typography>
              <Typography variant='caption'>
                02/01/2023 12:00pm
              </Typography>
            </div>
          </div>
          <div className='status'>
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
          </div>
        </div>
        <div className='history-item'>
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
                100.00
              </Typography>
              <Typography variant='caption'>
                02/01/2023 12:00pm
              </Typography>
            </div>
          </div>
          <div className='status'>
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
          </div>
        </div>
        <div className='history-item'>
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
                100.00
              </Typography>
              <Typography variant='caption'>
                02/01/2023 12:00pm
              </Typography>
            </div>
          </div>
          <div className='status'>
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
          </div>
        </div>
        <div className='history-item'>
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
                100.00
              </Typography>
              <Typography variant='caption'>
                02/01/2023 12:00pm
              </Typography>
            </div>
          </div>
          <div className='status'>
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
          </div>
        </div>
        <div className='history-item'>
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
                100.00
              </Typography>
              <Typography variant='caption'>
                02/01/2023 12:00pm
              </Typography>
            </div>
          </div>
          <div className='status'>
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
          </div>
        </div>
      </div>
      <Navbar value='history' />
    </>
  )
}

export default History