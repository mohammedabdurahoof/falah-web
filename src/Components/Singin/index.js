import { Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.png'

function Singin() {
    return (
        <form>
            <img src={logo} width={100} alt='logo'/>
            <TextField required id="outlined-basic" label="Email" variant="outlined" fullWidth />
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
            />
            <Button variant="contained" fullWidth className='submit-button'>Log In</Button>
            <Typography variant="subtitle2" >
                Don’t you have an account? <Link href="#">Sign up</Link>
            </Typography>
        </form>
    )
}

export default Singin