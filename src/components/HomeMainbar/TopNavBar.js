import React from 'react'
import search from "../../assests/magnifying-glass-solid.svg";
import bar from "../../assests/bars-solid.svg";
import globe from '../../assests/globe-solid.svg';
import angledown from "../../assests/angle-down-solid.svg"
import desktop from "../../assests/desktop-solid.svg";
import avatarImage from "../../assests/thirumalphoto.jpg"
import './HomeMainbar.css'
import { useGlobalContext } from '../HomeMainbar/Context';

const TopNavBar = () => {
    let { title, searchPost  } = useGlobalContext();
  return (
    <div>
         <div className='navbar'>
              <form onSubmit={(e) => e.preventDefault()} className="navbar-form">
                <div className="icons-container">
                      <div className="left-icons">
                        <img src={bar} alt="bar" width="16" className="icon" />
                        <input type="text" placeholder="Search" className="search-input" value={title === "Angular" ? "" : title} onChange={(e) => searchPost(e.target.value)}  />
                        <img src={search} alt="search" width="16" className="search-icon" />

                      </div>
                      <div className="right-icons">
                            <div className="group">
                              <img src={globe} alt="globe" width="16" className="icon" />
                              <p className='text'>Help</p>
                            </div>
                            <div className="group">
                              <img src={desktop} alt="desktop" width="16" className="icon" />
                              <p className='text'>Tour</p>
                            </div>
                            <div className="avatar-group">
                                <div className="avatar">
                                    <img src={avatarImage} alt="avatar" width="35" />
                                </div>
                                <img src={angledown} alt="angledown" width="16" className="icon" />
                            </div>
                      </div>
                </div>
              </form>
      </div>
    </div>
  )
}

export default TopNavBar