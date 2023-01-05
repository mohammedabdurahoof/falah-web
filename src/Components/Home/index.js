import { IconButton, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AppBarView from '../Appbar'
import Navbar from '../Navbar'
import './style.css'
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import AddCardIcon from '@mui/icons-material/AddCard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate } from 'react-router-dom'


function Home() {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 66) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  return (
    <>
      <AppBarView />
      <div className='progress-bar'>
        {/* <Typography variant='h5'>
      Hi!
    </Typography>
    <Typography variant='h6'>
      Mohammed Abdu Rahoof
    </Typography> */}
        <CircularProgressbarWithChildren
          value={percentage}
          // text={`${percentage}%`}
          circleRatio={0.75}
          strokeWidth={6}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            textSize: "10px",
            textColor: "#000",
            pathColor: "#009688",
            trailColor: "#00968829"
          })}
        >
          {/* <img
            style={{ width: 40, marginTop: -5 }}
            src="https://i.imgur.com/b9NyUGm.png"
            alt="doge"
          /> */}
          <div style={{ fontSize: 20, marginTop: -5 }}>
            <strong>{percentage}%</strong>
          </div>
          <div><strong>Payment rate</strong></div>
        </CircularProgressbarWithChildren>
      </div>
      <div className='card blue'>
        <div className='cash-main'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1, backgroundColor: '#000', color: '#fff' }}
          >
            <CreditCardIcon />
          </IconButton>
          <div className='cash'>
            <Typography variant='h6' color={'#fff'}>
              Deposit
            </Typography>
            <Typography variant='body2' color={'#fff'}>
              4 month
            </Typography>
          </div>
        </div>
        <div className='cash'>
          <Typography variant='h6' color={'#00ff65'}>
            ₹ 100.00
          </Typography>
        </div>
      </div>
      <div className='card amber'>
        <div className='cash-main'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1, backgroundColor: '#000', color: '#fff' }}
          >
            <AddCardIcon />
          </IconButton>
          <div className='cash'>
            <Typography variant='h6' color={'#fff'}>
              Debit
            </Typography>
            <Typography variant='body2' color={'#fff'}>
              4 month
            </Typography>
          </div>
        </div>
        <div className='cash'>
          <Typography variant='h6' color={'#c30000'}>
            ₹ 100.00
          </Typography>
        </div>
      </div>
      <div className='history-link' onClick={() => navigate('/history')}>
        <Typography variant='subtitle1' color={'#009688'} align={'center'}>
          <u>See History</u>
        </Typography>
      </div>
      <Navbar value='home' />
    </>
  )
}

export default Home