import { Avatar, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AppBarView from '../Appbar'
import Navbar from '../Navbar'
import './style.css'
import avatar from '../../assets/images/avatar.jpg'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { auth, db } from '../../firebase-config'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'

function Account() {
  const [user, setUser] = useState([])

  useEffect(() => {
    getUser()

  }, [])

  const getUser = async () => {
    auth.onAuthStateChanged(async (re) => {
      if (re) {
        const user = await getDocs(query(collection(db, "user"), where("uid", "==", re.uid)));
        user.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data = doc.data()
          data['id'] = doc.id
          setUser(data);
        })
      }
    }
    )
  }

  return (
    <>
      <AppBarView />
      <div className='top-color'>
        <Typography variant='h4'>
          {user.adno}
        </Typography>
        <Typography variant='body1'>
          {user.name}
        </Typography>
        <Avatar
          className='avatar'
          // sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src={avatar}
          sx={{ width: 100, height: 100 }}
        />
      </div>
      <div className='item'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <Typography variant="body1">
          {user.name}
        </Typography>
      </div>
      <hr />
      <div className='item'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <LocationOnOutlinedIcon />
        </IconButton>
        <Typography variant="body1">
          {user.location}
        </Typography>
      </div>
      <hr />
      <div className='item'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <DateRangeOutlinedIcon />
        </IconButton>
        <Typography variant="body1">
          {user.batch} ({user.year})
        </Typography>
      </div>
      <hr />
      <div className='item'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <LocalPhoneOutlinedIcon />
        </IconButton>
        <Typography variant="body1">
          {user.phone}
        </Typography>
      </div>
      <hr />
      <div className='item'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <EmailOutlinedIcon />
        </IconButton>
        <Typography variant="body1">
          {user.email}
        </Typography>
      </div>
      <hr />
      {/* <div className='item'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <RemoveRedEyeOutlinedIcon />
        </IconButton>
        <Typography variant="body1">
          Password 	&nbsp; 	&nbsp;
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <ModeEditOutlinedIcon />
        </IconButton>
      </div> */}
      <Navbar value='account' />
    </>
  )
}

export default Account