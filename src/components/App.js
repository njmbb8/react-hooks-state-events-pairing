import { useState } from "react";
import video from "../data/video.js";
import LikeButton from "./LikeButton.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(false)

  function increaseUpVotes(){
    setUpVotes(upVotes + 1);
  }

  function increaseDownVotes(){
    setDownVotes(downVotes + 1);
  }

  function hideComments(){
    setShowComments(!showComments);
    const buttonText = showComments ? "Show Comments" : "Hide Comments"
    document.getElementById("hideCommentsButton").textContent = buttonText
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <LikeButton 
        votes = {upVotes} 
        thumbs="up"
        onChangeLike={increaseUpVotes}
        /><LikeButton 
        votes = {downVotes} 
        thumbs="down"
        onChangeLike={increaseDownVotes}
        />
        <br/>
        <button id = "hideCommentsButton" onClick={hideComments}>Hide Comments</button>
        <Comments showComments = {showComments} commentList = {video.comments}/>
    </div>
  );
}

export default App;
