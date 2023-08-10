import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Typography } from "@mui/material";

const CommentList = ({ userID }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          "https://gaoryn-server.onrender.com/comment"
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <Paper
          key={comment.commentID}
          elevation={3}
          style={{
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h6" sx={{ color: "success.main" }}>
            Username: {comment.username}
          </Typography>
          <Typography variant="body1">{comment.commentText}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default CommentList;
