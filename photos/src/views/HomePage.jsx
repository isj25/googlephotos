import React from 'react'
import "./homepage.css"
import TopBar from '../components/topBar/TopBar'
import LeftBar from '../components/leftBar/LeftBar'
import Images from '../components/ImageSection/Images'
const HomePage = () => {
  return (
    <div>
        <TopBar className="topBar"/>
        <div className="sectionBreak"></div>
        <div className='contentSection'>
          <LeftBar/>
          <Images/>
        </div>
    </div>
  )
}

export default HomePage