import React from 'react'
import { useGlobalContext } from './Context';
import Questionlist from './Questionslist';


function timeonversion(items){
  const result = items.map((curPost1) =>{
  const unixLastEditTimestamp = curPost1.last_edit_date;
  const unixLastActivityTimestamp = curPost1.last_activity_date;

  const isLastEditInSeconds = unixLastEditTimestamp < 10000000000;
  const isLastActivityInSeconds = unixLastActivityTimestamp < 10000000000;

  const lastEditInMillis = isLastEditInSeconds ? unixLastEditTimestamp * 1000 : unixLastEditTimestamp;
  const lastActivityInMillis = isLastActivityInSeconds ? unixLastActivityTimestamp * 1000 : unixLastActivityTimestamp;

  const lastEditDate = new Date(lastEditInMillis);
  const lastActivityDate = new Date(lastActivityInMillis);

  const lastEditTime = isLastEditInSeconds ? lastEditDate.getSeconds() + ' seconds' : lastEditDate.getMinutes() + ' minutes';
  const lastActivityTime = isLastActivityInSeconds ? lastActivityDate.getSeconds() + ' seconds' : lastActivityDate.getMinutes() + ' minutes';
  

  return {
    isLastEditInSeconds,
    lastEditTime,
    lastActivityTime
  };
});
return result

}
const Questions = () => {
  const {items, isLoading} = useGlobalContext(); 
  const result = timeonversion(items)
    if(isLoading) {
      return (
        <>
        <h1>Loading.....</h1>
        </>
      );
    }
    if ((!items || items.length === 0) ) {  
      return <div className='noSearch'> <h1>Search for the Correct Title in the Search Bar </h1></div>;
    }
  return (
        <>
        {items.map((curPost, index) => (
          <Questionlist key={index} curPost={curPost} item={result[index]} />
        ))}
      </>
        
  )
    }
  
    
export default Questions