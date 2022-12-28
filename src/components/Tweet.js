import React from 'react';
import '../App.css';

const Tweet = ({name, tweet,tweets,setTweets }) => {

  /* console.log(name)
  console.log(tweet)
  console.log(tweets)
  console.log(setTweets) */
  //! Delete Function
  
  const deleteTweet = () => { 
    setTweets(tweets.filter((t)=> t !== tweet));
  }

  return (
    <div className='App'>
      <h1> Name :{name} </h1>
      <h3>{tweet}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
}

export default Tweet
