import React from 'react';
import likes from '../../assests/thumbs-up-regular (1).svg';
import messageregular from '../../assests/icons8-message-25.png';
import eye from '../../assests/eye-regular (1).svg';
import circledoc from "../../assests/documentincircularbutton_80214.svg"
import circlepen from "../../assests/PngItem_1878805.png"

function Questionlist({ curPost, item }) {
  return (
    <div className='display-question-container'>
      <div className='display-question-details'>
        <a href={curPost.link} target='_blank' rel='noreferrer' className='question-title-link'>
          {curPost.title}
        </a>
        <div className='display-tags-time'>
              <div className="display-tags">
                      {curPost.tags.map((tag, index) => (
                        <div className="tag-container" key={index}>
                          <p className="tags-data">{tag}</p>
                        </div>
                      ))}
              </div>
             
                  
               
              </div>
       
        <div className='author-text'>
        <div className='answer-by'>
        {curPost.is_answered ? (
          <>
            <img src={circledoc} alt="doc" className='answer-icon'/>
            <p className='answered-text'>Answered</p>
            <p>{item.isLastEditInSeconds ? item.lastEditTime : item.lastActivityTime} ago&nbsp;</p>
          </>
        ) : (
          <>
            <img src={circlepen} alt="pen"  className='answer-icon' />
            <p className='answered-text'>Modified  </p>
            <p>{item.lastActivityTime} ago &nbsp;</p>
          </>
        )}
        <p className="postedBy"> <span>{curPost.owner.display_name}&nbsp;{curPost.owner.reputation}</span></p>
        </div>
      </div>
      </div>
      <div className='display-box'>
      <div className='display-votes-ans'>
              <div className='display-vote-icon'>
                <p className='value'>{curPost.score}</p>
                <p className='value-text'>votes</p>
                <img src={likes} alt='likes' className='image-icon' />
              </div>
            </div>
            <div className='display-votes-ans'>
              <div className='display-vote-icon'>
                <p className='value'>{curPost.answer_count}</p>
                <p className='value-text'>answers</p>
                <img src={messageregular} alt='messageregular' className='image-icon'/>
              </div>
            </div>
            <div className='display-votes-ans'>
              <div className='display-vote-icon'>
                <p className='value'>{curPost.view_count}</p>
                <p className='value-text'>views</p>
                <img src={eye} alt='eye' className='image-icon' />
              </div>
            </div>
            </div>
      
      
    </div>
  );
}

export default Questionlist;
