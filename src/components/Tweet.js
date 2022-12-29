import React from 'react';
import '../App.css';

const Tweet = ({name, tweet,tweets,setTweets }) => {
const t = {color:'blue'}
const h = {color:'red'}
const background ={background:'antiquewhite'}

  //! For Deleting Tweet
  
  const deleteTweet = () => { 
    setTweets(tweets.filter((state)=> state.id !== tweet.id));
  }

  return (
    <div className='App border' style={background}>
      <h2 style={t} >{tweet.message}</h2>
      <h4 style={h}> Twitted By {name} </h4>
      <button onClick={deleteTweet}>Delete ❌</button>
      <button>Like 👍</button>
    </div>
  );
}

export default Tweet
