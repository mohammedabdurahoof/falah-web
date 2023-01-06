import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase-config'
import AppBarView from '../Appbar'
import Navbar from '../Navbar'
import Admin from './Admin'
import User from './user'

function Account() {
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        getUser()

    }, [])

    const getUser = async () => {
        auth.onAuthStateChanged(async (re) => {
            if (re) {
                const user = await getDocs(query(collection(db, "user"), where("uid", "===", re.uid)));
                user.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.get('type'));
                    if (doc.get('type') === 'admin') {
                        setAdmin(true)
                    } else {
                        setAdmin(false)
                    }
                })
            }
        }
        )
    }
    return (
        <>
            <AppBarView />
            {
                admin ? <Admin /> : <User />
            }
            <Navbar value='account' />
        </>
    )
}

export default Account