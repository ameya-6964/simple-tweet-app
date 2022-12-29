import React ,{useState}  from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';

function App() { 
  const name = "Ameya";
  const [textInput,setTextInput] = useState("");
  const [tweets,setTweets] = useState([]); 
  return (
  <div className='App'>
    <h1> Welcome {name} Start Tweeting </h1>
    <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
    <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  
  );
}

export default App;
