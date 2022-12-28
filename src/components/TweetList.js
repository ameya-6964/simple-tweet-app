import React from 'react'
import '../App.css'
import Tweet from './Tweet'

const TweetList = ({name,tweets,setTweets}) => {
  return (
    <div className='App'>
    <div className='tweet-list'> 
     {tweets.map((tweet) => (
      <Tweet setTweets={setTweets} name={name} tweet={tweet} tweets={tweets} />
     )) }
    </div>  
    </div>
  )
}

export default TweetList
