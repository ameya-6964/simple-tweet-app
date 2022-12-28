import React from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';


const CreateTweet = ({tweets,setTweets,textInput,setTextInput}) => {

//? Functions
 const userInputHandler = (e) =>{
 setTextInput(e.target.value);
}

const submitTweetHandler = (e) =>
{
    e.preventDefault();
    setTweets([...tweets,{message: textInput, id: uuidv4()}])
    setTextInput("");
}
  return (
    <div className='App'>
      <form onSubmit={submitTweetHandler}>
       <textarea onChange={userInputHandler} value={textInput} cols="60" rows="5" ></textarea>
       <div>
       <button> Tweet🔥 </button>
       </div>
      </form>
    </div>
  )
}

export default CreateTweet
