import React from 'react';
import './BottomNavBar.css';

const BottomNavBar = () => {
  return (
    <div className='main-bottom-bar'>
      <footer>
        <div className='top-container'>
          <div className='top-container-text'>
         <a href='www.com'>about us</a>
         <a href='www.com'>tour</a>
         <a href='www.com'>help</a>
         <a href='www.com'>blog</a>
         <a href='www.com'>chat</a>
         <a href='www.com'>data</a>
         <a href='www.com'>legal</a> 
         <a href='www.com'>privacy policy</a>
         <a href='www.com'>work here</a>
         <a href='www.com'>adversting info</a>
         <a href='www.com'>mobile</a>
         <a href='www.com'>contact us</a>
         <a href='www.com'>feedback</a>
         </div>
         <div className='social-icon-'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafeAuDNJ105FEy5KOM_KQpPrdcpny82zlVAkhDbRwhQ&s' alt='twitter' className='socialmedia-icon' />
          <img  src='https://png.pngitem.com/pimgs/s/25-256124_facebook-icon-dark-grey-png-download-f-of.png' alt='facebook' className='socialmedia-icon'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn6DsZKSLZIdkrK9Zr7vcv3jrZUTQBZQEGPPECm-jbg&s' alt='ball' className='socialmedia-icon' />

         </div>


        </div>
        <div className='container'>
          <div className='secc'>
            <h2>TECHNOLOGY</h2>
            <ul className='sci'>
              
              <p>Stack Overflow</p>
              <p>Server Fault</p>
              
              <p>Super User</p>
              
              <p>Web Applications</p>
              
              <p>Ask Ubuntu</p>
              
              <p>Webmasters</p>
              
              <p>Game Development</p>
              
              <p>Tex-LaTex</p>
            </ul>
            
          </div>
          <div className='secc '>
           <h2 className='h2-white'> thirumal    </h2>
            <ul className='sci'>
              
              <p>Programmers</p>
              
              <p>Unix & Linux</p>
              
              <p>Ask Different (Apple)</p>
              
              <p>WordPress Development</p>
              
              <p>Geographic Information Systems</p>
              
              <p>Electrical Engineering</p>
              
              <p>Andriod Enthusiasts</p>
              
              <p className='bold-name'>50 + more</p>
            </ul>
          </div>
          <div className='secc '>
            <h2>LIFE / ARTS</h2>
            <ul className='sci'>
              
              <p>Photography</p>
              
              <p>Science Fiction & Fantasy</p>
              
              <p>Graphic Design</p>
              
              <p>Movies & Tv</p>
              
              <p>Seasoned Advice (cooking)</p>
              
              <p>Home Improvement</p>
              
              <p>Personal Finance & Money</p>
              
              <p className='bold-name'>19n more</p>
            </ul>
          </div>
          <div className='secc '>
            <h2>CULTURE / RECREATION</h2>
            <ul className='sci'>
              
              <p>English Language & Usage</p>
              
              <p>Skeptics</p>
              
              <p>Mi Yodeya (Judaism)</p>
              
              <p>Travel</p>
              
              <p>Christianity</p>
              
              <p>Arqade (gaming)</p>
              
              <p>Bicycles</p>
              
              <p className='bold-name'>21 more</p>
            </ul>
          </div>
          <div className='secc '>
            <h2>SCIENCE</h2>
            
            <ul className='sci'>
              
              <p>Mathematics</p>
              
              <p>Cross Validated (stats)</p>
              
              <p>Theoretical Computer Science</p>
              
              <p>Physics</p>
              
              <p>MathOverflow</p>
              
              <p>Chemistry</p>
              
              <p>Biology</p>
              
              <p className='bold-name'>5 more</p>
            </ul>
          </div>
          <div className='secc '>
            <h2>OTHER</h2>
            
            <ul className='sci'>
              
              <p>Stack Apps</p>
              
              <p>Meta Stack Exchange</p>
              
              <p>Area 51</p>
              
              <p>Stack Overfkow Careers</p>
              
             
            </ul>
          </div>
        </div>
      </footer>
      <div className='copyrighttext'>
        <p className='left-text'> Site @ design by thirumal reddy </p>
        <p className='date'>date:2023.8.31.15:38</p>


      </div>


    </div>

  );
};

export default BottomNavBar;







