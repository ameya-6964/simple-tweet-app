import React from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';


const CreateTweet = ({tweets,setTweets,textInput,setTextInput}) => {

//! For Getting Text From Text Area
 const userInputHandler = (e) =>{
 setTextInput(e.target.value);
}

//! For Adding Tweets After Clicking Submit Button
const submitTweetHandler = (e) =>
{
    e.preventDefault();
    setTweets([...tweets,{message: textInput, id: uuidv4()}])
    setTextInput("");
}
  return (
    <div className='App'>
      <form onSubmit={submitTweetHandler}>
       <textarea className='text-area' onChange={userInputHandler} value={textInput} cols="60" rows="5" ></textarea>
       <div>
       <button> Tweet🔥 </button>
       </div>
      </form>
    </div>
  )
}

export default CreateTweet
