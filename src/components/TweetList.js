import React from 'react'
import '../App.css'
import Tweet from './Tweet'

const TweetList = ({name,tweets,setTweets}) => {
  return (
    <div className='App'>
    <div className='tweet-list'> 
    
    {/*//! For Creating Individual Tweets*/}
     {tweets.map((tweet) => (
      <Tweet setTweets={setTweets} name={name} tweet={tweet} tweets={tweets} key={tweet.id} />
     )) }
    </div>  
    </div>
  )
}

export default TweetList
