import React from 'react'
import "./topBar.css"
import { Search } from "@mui/icons-material"
import Button from '@mui/material/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const TopBar = () => {
    return (
        <div className='topBarContainer'>
            <div className="logo">
                <p>Google Photos</p>
            </div>
            <div className="searchBar">
                <Search className='searchIcon' />
                <input type="text" className="inputText" placeholder='Search "Karnataka"' />
            </div>
            <div className="topRight">
                <div className='topBarButton'>
                <Button variant='contained' className='importButton'>+ Import </Button>
                </div>
                <div className='topBarHelp'>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </div>

                <div className='topBarSettings'>
                    <SettingsIcon></SettingsIcon>
                </div>

                <div className='topBarDrag'>
                    <DragIndicatorIcon></DragIndicatorIcon>
                </div>

                <img src="/assets/profile.jpg" alt="" className="profilePicture" />
            </div>
        </div>
    )
}

export default TopBar
