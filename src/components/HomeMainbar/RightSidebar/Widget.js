import React,{ useState } from 'react'
import'./RightSidebar.css'
import globe from "../../../assests/globe-32.ico"
import map from "../../../assests/map-marker-2-32.ico"

import stackexchange from "../../../assests/stack-exchange.png"
import superuser from "../../../assests/superuser.svg"
import message from "../../../assests/392521_bubble_chat_comment_message_talk_icon.svg"
import bookmark from  "../../../assests/bookmark.png"
import stackover from "../../../assests/1298710_stack overflow_icon.svg"
const Widget = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      saved: false,
      title: 'Front End Developer',
      company: 'WalletHub',
      location: 'Washington, DC',
      remote: 'Remote',
      skills: ['Angular js', 'cordova'],
    },
    {
      id: 2,
      saved: false,
      title: 'Senior iOS / iPhone ENGINEER',
      company: 'Perk.com INC.',
      location: 'Bengaluru, India',
      remote: 'in Office',
      skills: ['iOS', 'iPhone'],
    },
    {
      id: 3,
      saved: false,
      title: 'Software Engineer',
      company: 'SparkNET Technologies',
      location: 'No Location',
      remote: 'Remote',
      skills: ['iOS', 'ruby on rails'],
    },
  ]);
  const toggleSaved = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, saved: !job.saved } : job
      )
    );
  };
  return (
    <div className='main-widget'>
      <section className='right-border'>
        <div class="right-text">
        <span class="right-base-text">Looking out for....</span>
        </div>
        <section className='timeline-area'>
          {jobs.map((job) => (
            <div key={job.id} className='timeline-area-div'>
              <div>
                <div
                  className={`circle-button ${job.saved ? 'clicked' : ''}`}
                  onClick={() => toggleSaved(job.id)}
                >
                  {job.saved ? '✓' : ''}
                  
                </div>
                {job.saved && (
                    <div className="saved-box">
                      <span className="saved-text">SAVED</span>
                    </div>
                  )}
                <div className="job-details">
                  <h2>{job.title}</h2>
                  <h3>{job.company}</h3>
                  <div className='figures-container'>
                    <div className='figures-sideby'>
                      <img src={map} alt='map' className='figur' />
                      <h4>{job.location}</h4>
                    </div>
                    <div className='figures-sideby'>
                      <img src={globe} alt='globe' className='figur' />
                      <h4>{job.remote}</h4>
                    </div>
                  </div>
                  <div class="h5-container">
                    {job.skills.map((skill, index) => (
                      <h5 className='h5-box' key={index}>
                        {skill}
                      </h5>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className='jobs-5'>VIEW ALL JOBS</p>
        </section>
      </section>
        <div>
        <div className='hot-questions'>
                <div class="network-text"> 
                <span class="network-base-text">Network Questions</span>
                </div>
            <div className='hot-main'>
            <div className='hot-text'>
            <img src={message} alt='message'  className='figure'/>
              <p>Were there women who were against giving women the right to vote?</p>
              </div>
              <div className='hot-text'>
            <img src={stackover} alt='stackover'  className='figure'/>
              <p>Why does everybody typedef over standard C types</p>
              </div>
              <div className='hot-text'>
            <img src={bookmark} alt='bookmark'  className='figure'/>
              <p>An English word describing a pseudo-job</p>
              </div>
              <div className='hot-text'>
            <img src={stackexchange} alt='stackexchange'  className='figure-1'/>
              <p>When flying on a very tight schedule, are you obligated to run to make it to the next gate on a connection?</p>
              </div>
              <div className='hot-text'>
            <img src={superuser} alt='superuser'  className='figure'/>
              <p>Does 1 pixel have a standard size?</p>
              </div>
              </div>
              <a href="www.com" className='view-all-job'>VIEW ALL JOBS &gt; </a>
        </div>
        </div>
    </div>
  )
}

export default Widget