import React from 'react'
import '../App.css'
import Tweet from './Tweet'

const TweetList = ({name,message}) => {
  return (
    <div className='App'>
    <div className='tweet-list'> 
     <Tweet name={name} message={message} />
     <Tweet name={name} message={message}  />
    </div>  
    </div>
  )
}

export default TweetList
