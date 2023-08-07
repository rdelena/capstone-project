import React, { useEffect, useState } from "react";
import GameRating from "./GameRating";
import Social from "./Social";
import Description from "./Description";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import axios from "axios";

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userID, setUserID] = useState(localStorage.getItem("userID"));

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    const fetchAvatar = async () => {
      try {
        const response = await axios.get(
          `https://robohash.org/${storedUsername}`
        );
        setAvatar(response.config.url);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };

    if (storedUsername) {
      fetchAvatar();
    }
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
    <div
      className="PressStart2P"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Welcome to the Dashboard</h1>
      <h2>
        {avatar && (
          <img
            src={avatar}
            alt="robot"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
        )}
        {username}
      </h2>

      <iframe
        src="https://i.simmer.io/@Benyji/epics-of-gaoryn"
        style={{ width: "960px", height: "600px" }}
      ></iframe>

      <h2>Epics of Gaoryn</h2>
      <GameRating userID={userID} username={username} />
      <Description />
      <h1>Comment Form</h1>
      <CommentForm
        onCommentSubmit={handleCommentSubmit}
        userID={userID}
        username={username}
      />
      <h1>Comments</h1>
      <CommentList userID={userID} username={username} />
      <Social />
    </div>
  );
};

export default Dashboard;
