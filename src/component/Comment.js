import { Button } from "@mui/material";
import React from "react";

function Comment() {
  return (
    <div>
      <label>
        <h4>Write a Comment:</h4>
        <textarea name="postContent" rows={4} cols={40} />
      </label>
      <Button type="submit" className="reply-button" variant="contained">
        Reply
      </Button>
    </div>
  );
}

export default Comment;
