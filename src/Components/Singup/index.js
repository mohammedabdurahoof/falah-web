import { Button, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase-config';
import { addDoc, collection } from 'firebase/firestore';


function Singup() {
    const [adno, setAdno] = useState(0)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [batch, setBatch] = useState(0)
    const [date, setDate] = useState(0)
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const userCollection = collection(db, 'user')

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

            const user = await createUserWithEmailAndPassword(auth, email, password).then(async (user) => await addDoc(userCollection, { adno, name, location, batch, date, phone, email, type: 'user', uid: user.user.uid }))
            console.log(user);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <img src={logo} width={100} alt='logo' />
            <TextField required id="outlined-basic" label="Ad No" onChange={(e) => setAdno(e.target.value)} variant="outlined" fullWidth type='Number' />
            <TextField required id="outlined-basic" label="Name" onChange={(e) => setName(e.target.value)} variant="outlined" fullWidth />
            <TextField required id="outlined-basic" label="Location" onChange={(e) => setLocation(e.target.value)} variant="outlined" fullWidth />
            <TextField required id="outlined-basic" label="Batch" onChange={(e) => setBatch(e.target.value)} variant="outlined" fullWidth type='Number' />
            <TextField required id="outlined-basic" label="Year" onChange={(e) => setDate(e.target.value)} variant="outlined" fullWidth type='date' helperText="Year of complite PG / dropout" />
            <TextField required id="outlined-basic" label="Phone" onChange={(e) => setPhone(e.target.value)} variant="outlined" fullWidth type='tel' />
            <TextField required id="outlined-basic" label="Email" onChange={(e) => setEmail(e.target.value)} variant="outlined" fullWidth type='email' />
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* <TextField
                required
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
                fullWidth

            /> */}

            <Button variant="contained" type='submit' fullWidth className='submit-button'>Register</Button>
            <Typography variant="subtitle2" >
                Do you have an account? <u onClick={() => navigate('/login')} style={{ color: '#009688', cursor: 'pointer' }} >Sign In</u>
            </Typography>
        </form>
    )
}

export default Singup