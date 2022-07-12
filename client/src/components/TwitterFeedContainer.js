import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Tweet} from './Tweet.js'
import './TwitterFeed.css';

export function TwitterFeed(props) {
    const [status, setStatus] = useState("Not connected.");
    const [handle, setHandle] = useState("none");

    // Connects to the Express Twitter API and updates status accordingly
    useEffect(() => {
        const fetchStatus = async () => {
            const result = await axios(
                'http://localhost:9000/twitter/status',
            ).then(result => {
                setStatus(result.data);
            });

        }
        fetchStatus();
    }, []) // Empty array arg prevents data from being retrieved over and over, instead only on mount

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Do handle validation here
            setHandle(event.target.value);
        }
    }

    return (
        <div className="Twitter-feed-container">
            <a href="" onClick={props.delete} className="Twitter-feed-delete">Delete</a>
            <p>{status}</p>
            <input
                type="text"
                placeholder="Twitter handle"
                onKeyDown={handleKeyDown}
            />
            <Tweet key={handle} handle={handle} />
        </div>
    );
}