import React ,{useState}  from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';

function App() { 
  const name = "Ameya Belvalkar";
  const [textInput,setTextInput] = useState("");
  const [tweets,setTweets] = useState([]); 
  //const message = "This Is Demo String Message To Check My React";
  return (
  <div className='App'>
    <h1> Hello {name} </h1>
    <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
    <TweetList name={name} tweets={tweets} setTweets={setTweets} />
  </div>
  );
}

export default App;
