import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

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
  }, [comments]);

  return (
    <div>
      {comments.map((comment) => (
        <Card
          key={comment.commentID}
          elevation={3}
          style={{
            marginBottom: "10px",
            background: "rgba(62, 57, 57, 0.7)",
            color: "white",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ color: "success.main", fontFamily: "PressStart2P" }}
            >
              Username: {comment.username}
            </Typography>
            <Typography
              sx={{
                fontFamily: "PressStart2P",
              }}
              variant="body1"
            >
              {comment.commentText}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommentList;
