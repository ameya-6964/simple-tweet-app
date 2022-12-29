import React from 'react';
import '../App.css';

const Tweet = ({name, tweet,tweets,setTweets }) => {

  //! For Deleting Tweet
  
  const deleteTweet = () => { 
    setTweets(tweets.filter((state)=> state.id !== tweet.id));
  }

  return (
    <div className='App'>
      <h2>{tweet.message}</h2>
      <h4> Twitted By {name} </h4>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
}

export default Tweet
