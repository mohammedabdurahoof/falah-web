import { Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.png'


function Singup() {

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <img src={logo} width={100} alt='logo'/>
            <TextField required id="outlined-basic" label="Ad No" variant="outlined" fullWidth  type='Number'/>
            <TextField required id="outlined-basic" label="Name" variant="outlined" fullWidth />
            <TextField required id="outlined-basic" label="Location" variant="outlined" fullWidth />
            <TextField required id="outlined-basic" label="Batch" variant="outlined" fullWidth type='Number' />
            <TextField required id="outlined-basic" label="Year" variant="outlined" fullWidth type='Number' helperText="Year of complite PG / dropout" />
            <TextField required id="outlined-basic" label="Phone" variant="outlined" fullWidth type='tel' />
            <TextField required id="outlined-basic" label="Email" variant="outlined" fullWidth type='email' />
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                fullWidth
            />
            <TextField
                required
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
                fullWidth

            />

            <Button variant="contained" type='submit' fullWidth className='submit-button'>Register</Button>
            <Typography variant="subtitle2" >
                Do you have an account? <Link href="#">Sign In</Link>
            </Typography>
        </form>
    )
}

export default Singup