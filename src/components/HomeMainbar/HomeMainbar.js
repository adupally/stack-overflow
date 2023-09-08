import React from 'react'
import './HomeMainbar.css'
import Questions from './Questions'

import stackimage from "../../assests/stack-design-1.jpg"
import { useGlobalContext } from '../HomeMainbar/Context';





const HomeMainbar = () => {
  
  let {weekPost,monthPost,interestingPost, featurePost,hotPost } = useGlobalContext();

  const monthButtonClick = () => {
    const newmonthdate = "1694044800"; 
    monthPost(newmonthdate);
  };
  const weekButtonClick = () => {
    const newweekdate = "1693612800"; 
    weekPost(newweekdate);
  };
  const hotButtonClick = () => {
    const newhottitle = "Hot"; 
    hotPost(newhottitle);
  };
  const featuresButtonClick = () => {
    const newfeaturetitle = "feature"; 
    featurePost(newfeaturetitle);
  };
  const inrestingButtonClick = () => {
    const newinterestingtitle = "interest"; 
    interestingPost(newinterestingtitle);
  };
  
  return (
    
    <div className='main-bar'>
                    <div class="text-container">
                      <span class="base-text">Questions</span>
                    </div>
                    <div class="button-container">
                        <button onClick={inrestingButtonClick} class="button">Interesting</button>
                        <button onClick={featuresButtonClick} class="button">
                          featured
                            
                        </button>
                        <div class="number">242</div>
                        <button onClick={hotButtonClick} class="button">hot</button>
                        <button onClick={weekButtonClick} class="button">week</button>
                        <button onClick={monthButtonClick} class="button">month</button>
                    </div>
                    <div class="line-2"></div>

                 
            <Questions /> 

            <div className='bottom-questions'>
                    <div className='colored-line'>
                    <img src={stackimage} alt="stackimage"  className="stack-desinicon" />
                    <div className='line'></div>
                    </div>
                  <h1 className='looking-text'>Looking for more?</h1>
                  <p className='browse-text'>Browse the <span class="blue-text">complete list of questions</span><span class="grey-text">, </span><span class="grey-text">or</span> <span class="blue-text">popular tags</span><span class="grey-text">. </span>Help us answer</p>
                  <p className='unanswered'>unanswered questions</p>

                  
                  
            </div>
    </div>
  )
}

export default HomeMainbar