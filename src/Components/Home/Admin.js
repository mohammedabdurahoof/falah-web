import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style.css'
import AddCardIcon from '@mui/icons-material/AddCard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { collection, doc, getCountFromServer, getDocs, query, setDoc, where } from 'firebase/firestore'
import { auth, db } from '../../firebase-config'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function Admin() {
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState(0)
    const [users, setUsers] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [adno, setAdno] = useState(0)
    const paymentCollection = doc(collection(db, 'payment'))


    useEffect(() => {
        getData()
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
                    var user = await getDocs(query(collection(db, "user"), where("adno", "==", adno)))
                    user.forEach(async(doc) => {
                        await setDoc(paymentCollection, { uid: doc.get('uid'), amount, date: new Date(), confirmDate: new Date(), status: 'confrimed' }).then((re) => { handleClose(); console.log(re); getData() })
                    })
                }
            }
        }
        )

    }

    const getData = async () => {
        var amount = 0;
        const querySnapshot = await getDocs(collection(db, "payment"));
        querySnapshot.forEach((doc) => {
            amount += parseFloat(doc.get('amount'))
        });
        setTotalAmount(amount)
        var usersCount = await getCountFromServer(collection(db, "user"))
        setUsers(usersCount.data().count);
    }


    return (
        <>
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
                            Total Paid
                        </Typography>
                    </div>
                </div>
                <div className='cash'>
                    <Typography variant='h6' color={'#00ff65'}>
                        ₹ {totalAmount}.00
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
                        <PeopleAltIcon />
                    </IconButton>
                    <div className='cash'>
                        <Typography variant='h6' color={'#fff'}>
                            Total users
                        </Typography>
                    </div>
                </div>
                <div className='cash'>
                    <Typography variant='h6' color={'#fff'}>
                        {users}
                    </Typography>
                </div>
            </div>
            <div className='card pay'>
                <div className='cash-main'>
                    <Typography variant='body1' color={'#000'}>
                        Add Payment
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
                        <TextField id="standard-basic" label="Ad No" variant="standard" type={'number'} onChange={(e) => setAdno(e.target.value)} />
                    </FormControl>
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
        </>
    )
}

export default Admin