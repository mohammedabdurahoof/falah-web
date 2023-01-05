import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, Input, InputAdornment, InputLabel, Link, TextField, Typography } from '@mui/material'
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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../firebase-config'



function Home() {
  const [percentage, setPercentage] = useState(0);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate();
  const paymentCollection = collection(db, 'payment')

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 66) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePay = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await addDoc(paymentCollection, { uid:user.uid,amount,date:new Date(), confirmDate: 'null',status:'pending' }).then(()=>handleClose())
      }
    }
    )
    
  }


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

      <div className='card pay'>
        <div className='cash-main'>
          <Typography variant='body1' color={'#000'}>
            Mark your paid cash
          </Typography>
        </div>
        <div className='cash'>
          <Button variant="contained" fullWidth className='submit-button' onClick={handleClickOpen}>Pay</Button>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>PAY</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              type='number'
              id="standard-adornment-amount"
              onChange={(e)=>setAmount(e.target.value)}
              startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePay}>Pay</Button>
        </DialogActions>
      </Dialog>


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
              Paid
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