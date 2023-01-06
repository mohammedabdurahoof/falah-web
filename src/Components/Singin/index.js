import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'

function Singin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                navigate('/home')
            }
        });
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user);
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <img src={logo} width={100} alt='logo' />
            <TextField required id="outlined-basic" label="Email" variant="outlined" type={'email'} onChange={(e) => setEmail(e.target.value)} fullWidth />
            <TextField
                required
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
            />
            <Button variant="contained" fullWidth className='submit-button' type='submit'>Log In</Button>
            <Typography variant="subtitle2" >
                Don’t you have an account? <u onClick={() => navigate('/register')} style={{ color: '#009688', cursor: 'pointer' }} >Sign up</u>
            </Typography>
        </form>
    )
}

export default Singin