import React from "react";
import ReactDOM from "react-dom";
import { Feed } from "semantic-ui-react";
import data from "./datafeed";
import "./feed.css";

function App(props) {
  return (
    <div className="container">
      <div className="header">
        <img
          src="./img/fwitter.png"
          className="twitterLogo"
          alt="twitter logo"
        />
        <span className="twitterText">Fwitter</span>
      </div>
      <Tweet tweets={props.tweets} />
    </div>
  );
}

function Tweet(props) {
  const tweetArray = props.tweets;
  const tweets = tweetArray.map((tweet, i) => (
    <li key={i} className="tweetList">
      <div className="tweet">
        <Avatar avatar={tweet.avatar} />
        <div className="content">
          <NameWithHandle name={tweet.name} handle={tweet.handle} />
          <Time time={tweet.time} />
          <Message message={tweet.message} />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    </li>
  ));

  return <ul>{tweets}</ul>;
}

function Avatar(props) {
  return <img src={props.avatar} className="avatar" alt="avatar" />;
}

function Message(props) {
  return <div className="message">{props.message}</div>;
}

function NameWithHandle(props) {
  return (
    <span className="name-with-handle">
      <span className="name">{props.name}</span>
      <span className="handle">@{props.handle}</span>
    </span>
  );
}

const Time = (props) => <span className="time">{props.time}</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button"></i>;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App tweets={data} />, rootElement);

export default Feed;
