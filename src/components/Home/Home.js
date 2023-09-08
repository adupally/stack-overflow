import React from 'react'

import '../../App.css'

import LeftSidebar from '../LeftSidebar/LeftSidebar';
import HomeMainbar from '../HomeMainbar/HomeMainbar';
import RightSidebar from '../HomeMainbar/RightSidebar/RightSidebar';

import {AppProvider} from '../HomeMainbar/Context';
import TopNavBar from '../HomeMainbar/TopNavBar';
import BottomNavBar from '../BottomNavBar/BottomNavBar';



const Home = () => {
  return (
    
    <AppProvider>
  <div className="home-container">
         <div className='leftsidebar'>
          <LeftSidebar /> 
        </div> 
        <div className='mainbar'>
          <div className='topnavbar'>
          <TopNavBar />
          </div>
          <div className='body-data'>
          <HomeMainbar /> 
          <RightSidebar />
          </div>
          
        </div>
          
  </div>
  <div className='bottomm-nav-bar'>
  <BottomNavBar />
  </div>
</AppProvider>

  )
}

export default Home