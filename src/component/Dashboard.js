import React, { useEffect, useState } from "react";
import GameRating from "./GameRating";
import Social from "./Social";
import Description from "./Description";
import Controls from "./Controls";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import axios from "axios";
import Credits from "./Credits";

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState(localStorage.getItem("userID"));

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, [username]);

  const fetchComments = async () => {
    try {
      const response = await axios.get("/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async (commentData) => {
    try {
      const response = await axios.post("/comments", commentData);
      if (response.status === 201) {
        fetchComments();
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <div className="content-dashboard">
      <iframe
        src="https://i.simmer.io/@Benyji/epics-of-gaoryn"
        style={{ width: "960px", height: "600px", margin: "30px" }}
        title="WebGLGame_Epics_of_Gaoryn"
      ></iframe>

      <h3>Epics of Gaoryn</h3>
      <div className="dashboard-container">
        <Description />
        <GameRating userID={userID} username={username} />
      </div>
      <Controls />
      <Credits />
      <h4>Write a Comment:</h4>
      <CommentForm
        onCommentSubmit={handleCommentSubmit}
        userID={userID}
        username={username}
      />
      <h4>Comments</h4>
      <CommentList username={username} userID={userID} comments={comments} />
      <Social />
    </div>
  );
};

export default Dashboard;
