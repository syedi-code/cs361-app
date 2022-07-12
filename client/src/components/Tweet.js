import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TwitterFeed.css';

export function Tweet(props) {
    const [tweets, setTweets] = useState([{ id: 0, text: "No user selected or invalid handle." }]);

    useEffect(() => {
        const fetchTweets = async () => {
            let path = 'http://localhost:9000/twitter/profile/' + props.handle;
            const result = await axios(
                path,
            ).then(result => {
                if (result.data) { 
                    setTweets(result.data);
                } else {
                    setTweets([{ id: 0, text: "No user selected or invalid handle." }])
                };
            });
        }
        fetchTweets();
        console.log(tweets)
    }, []) // Empty array arg prevents data from being retrieved over and over, instead only on mount

    const tweetMap = tweets.map((tweet) =>
        <div key={tweet.id} className="Twitter-feed-tweet">
            {tweet.text}
        </div>
    );

    return (
        <div>
            {tweetMap}
        </div>
    );
}