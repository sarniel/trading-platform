import "../App.scss";
import React from "react";

function Tweet(props) {
    return (
        <div className="tweet-container">
            <h3>{props.name}</h3>
            <p>{props.tweet}</p>
            <h3>{props.likes}</h3>
        </div>
    );
}

export default Tweet;
