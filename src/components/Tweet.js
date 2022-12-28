import React from 'react';
import '../App.css';

const Tweet = ({name,message}) => {
  return (
    <div className='App'>
      <h1> Name :{name} </h1>
      <h3> Tweet Description : {message} </h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
}

export default Tweet
