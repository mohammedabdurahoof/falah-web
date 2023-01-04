import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import './style.css'

export default function Navbar(props) {
    const [value, setValue] = React.useState(props.value);
    const navigate = useNavigate();

    const handleChange = (e,newValue) => {
        setValue(newValue);
        navigate(`/${newValue}`)
    };

    return (
        <div className='nav-bar'>
            <BottomNavigation sx={{ width: 1000 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label="History"
                    value="history"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Account"
                    value="account"
                    icon={<PersonIcon />}
                />
                {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
            </BottomNavigation>
        </div>
    );
}
