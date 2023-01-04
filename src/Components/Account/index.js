import { Avatar, IconButton, Typography } from '@mui/material'
import React from 'react'
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

function Account() {
  return (
    <>
      <AppBarView />
      <div className='top-color'>
        <Typography variant='h4'>
          527
        </Typography>
        <Typography variant='body1'>
          Mohammed Abdu Rahoof
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
          Mohammed Abdu Rahoof
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
          Nilambur
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
          26 (2025)
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
          +918943485194
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
          mohammedabdurahoof527@gmail.com
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
      </div>
      <Navbar value='account' />
    </>
  )
}

export default Account