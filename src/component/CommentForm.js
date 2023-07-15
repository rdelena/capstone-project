// import { useState } from "react";

// const CommentForm = ({
//   handleSubmit,
//   submitLabel,
//   hasCancelButton = false,
//   handleCancel,
//   initialText = "",
// }) => {
//   const [text, setText] = useState(initialText);
//   const isTextareaDisabled = text.length === 0;
//   const onSubmit = (event) => {
//     event.preventDefault();
//     handleSubmit(text);
//     setText("");
//   };
//   return (
//     <form onSubmit={onSubmit}>
//       <textarea
//         className="comment-form-textarea"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button className="comment-form-button" disabled={isTextareaDisabled}>
//         {submitLabel}
//       </button>
//       {hasCancelButton && (
//         <button
//           type="button"
//           className="comment-form-button comment-form-cancel-button"
//           onClick={handleCancel}
//         >
//           Cancel
//         </button>
//       )}
//     </form>
//   );
// };

// export default CommentForm;

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const CommentForm = ({ onCommentSubmit }) => {
  const [commentText, setCommentText] = useState("");
  const [userID, setUserID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4001/comment", {
        commentText,
        userID,
      });
      if (response.status === 201) {
        onCommentSubmit();
        setCommentText("");
        setUserID("");
      }
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
      />
      <Button variant="contained">Submit</Button>
      <Button variant="contained">Cancel</Button>
      {/* <input
        type="number"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
        placeholder="User ID"
      /> */}
    </form>
  );
};

export default CommentForm;
