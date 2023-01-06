import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style.css'
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import AddCardIcon from '@mui/icons-material/AddCard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate } from 'react-router-dom'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { auth, db } from '../../firebase-config'



function Home() {
  const [percentage, setPercentage] = useState(0);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0)
  const [user, setUser] = useState([])
  const navigate = useNavigate();
  const paymentCollection = doc(collection(db, 'payment'))

  useEffect(() => {
    let per = user.totalAmount / (user.noMonth * 100) * 100;
    setTimeout(() => {

      if (percentage < per) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage, user]);

  useEffect(() => {
    getUser()
  }, [])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayCash = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (amount > 0) {
          await setDoc(paymentCollection, { uid: user.uid, amount, date: new Date(), confirmDate: 'null', status: 'pending' }).then((re) => { handleClose(); console.log(re); getUser() })
        }
      }
    }
    )

  }

  function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  const getUser = async () => {
    auth.onAuthStateChanged(async (re) => {
      if (re) {
        const user = await getDocs(query(collection(db, "user"), where("uid", "==", re.uid)));
        user.forEach(async (doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data = doc.data()
          data['id'] = doc.id
          var date = new Date(`${data.date}`)
          console.log(date);
          data['noMonth'] = monthDiff(date, new Date())
          console.log(data.year);
          const history = await getDocs(query(collection(db, "payment"), where("uid", "==", re.uid)));
          var totalAmount = 0
          history.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            totalAmount += parseFloat(doc.get('amount'))
          })
          data['totalAmount'] = totalAmount
          setUser(data);
        })
      }
    }
    )
  }




  return (
    <>
      <div className='top-area'>

        <div className='no-month'>
          <Typography variant='h6' color={'#3b71ca'}>
            {user.noMonth}
          </Typography>
          <Typography variant='h6' color={'#3b71ca'}>
            Month
          </Typography>
        </div>
        <div className='total-amount'>
          <Typography variant='h6' color={'#ffc107'}>
            {user.noMonth && user.noMonth * 100}
          </Typography>
          <Typography variant='h6' color={'#ffc107'}>
            Amount
          </Typography>
        </div>
      </div>
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
              onChange={(e) => setAmount(e.target.value)}
              startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePayCash}>Pay</Button>
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
              {Math.floor(parseFloat(user.totalAmount) / 100)} month
            </Typography>
          </div>
        </div>
        <div className='cash'>
          <Typography variant='h6' color={'#00ff65'}>
            ₹ {user.totalAmount}.00
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
              {Math.floor((parseFloat(user.noMonth) * 100 - parseFloat(user.totalAmount)) / 100)} month
            </Typography>
          </div>
        </div>
        <div className='cash'>
          <Typography variant='h6' color={'#c30000'}>
            ₹ {parseFloat(user.noMonth) * 100 - parseFloat(user.totalAmount)}.00
          </Typography>
        </div>
      </div>
      <div className='history-link' onClick={() => navigate('/history')}>
        <Typography variant='subtitle1' color={'#009688'} align={'center'}>
          <u>See History</u>
        </Typography>
      </div>
    </>
  )
}

export default Home