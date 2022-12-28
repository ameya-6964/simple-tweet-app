import React from 'react';
import '../App.css';
const CreateTweet = () => {
  return (
    <div className='App'>
      <form>
       <textarea cols="60" rows="5" ></textarea>
       <div>
       <button> Submit </button>
       </div>
      </form>
    </div>
  )
}

export default CreateTweet
