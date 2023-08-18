import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const CommentForm = ({ onCommentSubmit, userID }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://gaoryn-server.onrender.com/comment",
        {
          commentText,
          userID,
        }
      );
      if (response.status === 201) {
        onCommentSubmit();
      }
      setCommentText("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="comment-form-textarea"
        multiline
        rows={4}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        label="Enter your comment"
        variant="outlined"
        color="success"
      />
      <Button variant="contained" color="success" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CommentForm;
