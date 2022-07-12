import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {TwitterFeed} from "./components/TwitterFeedContainer.js";
import {AddNew} from "./components/AddNew.js";

function App() {
  const [twitterFeeds, updateTwitterFeeds] = useState([0]);

  const addNewTwitterFeed = () => {
    if (twitterFeeds.length < 10) {
      var newFeeds = twitterFeeds.slice()
      newFeeds.push(twitterFeeds.length);
      updateTwitterFeeds(newFeeds)
      console.log(newFeeds)
    }
  }

  const removeTwitterFeed = (feed, event) => {
    event.preventDefault();
    const newFeeds = twitterFeeds.filter((item) => item !== feed);
    updateTwitterFeeds(newFeeds);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width={50} height={50} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="App-header-new">New feature! Add personalized Twitter feeds to your workspace with the "Add New" button!</p>
      </header>
      <div className="App-workspace">
        {twitterFeeds.map((feed) => <TwitterFeed key={feed} delete={(event) => removeTwitterFeed(feed, event)}/>)}
        <button
            className="App-add-new-button"
            onClick={addNewTwitterFeed}
        >
            (+) ADD NEW
        </button>
      </div>
    </div>
  );
}

export default App;
