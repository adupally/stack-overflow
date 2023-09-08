import React from 'react'
import './LeftSidebar.css'
import {NavLink} from "react-router-dom"
import tags from "../../assests/tag-svgrepo-com.svg";
import user from "../../assests/user-regular.svg";
import stack from "../../assests/stack-exchange.svg"
import inbox from "../../assests/inbox-solid.svg"
import bookmark from "../../assests/bookmark-regular.svg"
import briefcase from "../../assests/briefcase-solid.svg"
import horn from "../../assests/bullhorn-solid.svg"
import word from "../../assests/file-lines-regular.svg"
import question from "../../assests/question-solid.svg"


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
        <div classsName="side-nav-div">
          <div className='stackoverflow-image'>
        <img src="https://www.ranklogos.com/wp-content/uploads/2015/06/Stack-Overflow-Logo.png" alt="logo" width="230" />
        </div>
      <div className='link-text'>
        <NavLink to='/Questions' className="side-nav-links" activeClass="active">
            <img src={question} alt='question'  className='figures-1'/>
            <p className="name">Questions</p>
            </NavLink>
            <NavLink to='/jobs' className="side-nav-links" activeClass="active">
            <img src={briefcase} alt='word'  className='figures-1'/>
            <p className="name">JOBS</p>
            </NavLink>
            <NavLink to='/documentation'   className="side-nav-links" activeClass="active" >
                <img src={word} alt='word'  className='figures-1'/>
                <p className="name">DOCUMENTATION</p>
                <div class="number-text">NEW</div>
            </NavLink>
            <NavLink to='/tags' className="side-nav-links" activeClass="active" >
                <img  src={tags} alt='tags' className='figures-1'/>
                <p className="name">TAGS</p>
            </NavLink>
            <NavLink to='/users' className="side-nav-links" activeClass="active">
            <img src={user} alt='user'  className='figures-1'/>
            <p className="name">USERS</p>
            </NavLink>
            <NavLink to='/badges' className="side-nav-links" activeClass="active">
            <img src={bookmark} alt='bookmark'  className='figures-1'/>
             <p className="name">BADGES</p>
            </NavLink>
            <NavLink to='/ask Questions' className="side-nav-links" activeClass="active">
            <img src={horn} alt='horn'  className='figures-1'/>
             <p className="name">ASK QUESTION</p>
            </NavLink>
            <NavLink to='/stack exchange' className="side-nav-links" activeClass="active">
            <img src={stack} alt='stack'  className='figures-1'/>
            <p className="name">STACK EXCHANGE</p>
            </NavLink>
            <NavLink to='/inbox' className="side-nav-links" activeClass="active">
            <img src={inbox} alt='inbox'  className='figures-1'/>
            <p className="name">INBOX</p>
            <div class="number-1">52</div>
            </NavLink>
          </div>
        
        </div>
        </nav>

    </div>
  )
}

export default LeftSidebar