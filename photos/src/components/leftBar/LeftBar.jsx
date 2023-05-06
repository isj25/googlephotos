import React, { useState } from 'react'
import "./leftBar.css"
import { sideDivFirst, sideDivSecond,storageDetails } from "../../Data/sideDivItems.js";
import SideDiv from '../sideDivs/SideDiv';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LeftBar = () => {

    const [progress, setProgress] = useState(50);
    return (
        <div className='leftBarContainer'>
            {
                sideDivFirst.map((item, key) => {
                    return <SideDiv item={item} key={key}></SideDiv>
                })
            }
            <p className='sectionHeading'>LIBRARY</p>
            {
                sideDivSecond.map((item, key) => {
                    return <SideDiv item={item} key={key}></SideDiv>
                })
            }
            <div className="sectionBreak"></div>

            <div className="storageSection">
                <div className="storageDetails">
                    {
                        storageDetails.map((item, key) => {
                            return <SideDiv item={item} key={key}></SideDiv>
                        })
                    }
                </div>
                <Box sx={{ width: '100%' }} className="storageBox">
                    <LinearProgress variant="determinate" value={progress} className='progressBar'/>
                    <p className='storage'>36.8 GB of 100 GB used</p>
                </Box>
                <div className='storageButton'>
                    <Button variant="outlined" className='getMoreStorage'>Get More Storage</Button>
                </div>
            </div>
        
        </div>
    )
}

export default LeftBar