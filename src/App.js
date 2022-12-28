import './App.css';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';
function App() {
  //! Here We Can Write Normal JavaScript
  const name = "Ameya Belvalkar";
  const message = "This Is Demo String Message To Check My React";
  
  return (
  <div className='App'>
    <h1> Hello World </h1>
    <CreateTweet />
    <TweetList name={name} message={message} />
  </div>
  );
}

export default App;
