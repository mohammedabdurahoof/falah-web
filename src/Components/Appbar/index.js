import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

export default function AppBarView() {
  const navigate = useNavigate();

  React.useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        // User is signed in.
        navigate('/login')
      }
    });
  }, [])

  const logout = async () => {
    await signOut(auth).then(()=>window.location.reload())
    
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FALAH
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
