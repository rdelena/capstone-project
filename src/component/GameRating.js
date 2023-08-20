import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaStar, FaRegStar } from "react-icons/fa";
import axios from "axios";
import cookie from "cookie";

const GameRating = ({ userID, username }) => {
  const [gameRate, setGameRate] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitStatus, setSubmitStatus] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("");
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const cookies = cookie.parse(document.cookie);

  const fetchRatingsAndCalculateAverage = async () => {
    try {
      const response = await axios.get(
        "https://gaoryn-server.onrender.com/rate"
      );
      setRatings(response.data);
      const totalRating = response.data.reduce(
        (sum, rating) => sum + rating.vote,
        0
      );
      const avgRating = totalRating / response.data.length;
      setAverageRating(Math.floor(avgRating));
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  useEffect(() => {
    fetchRatingsAndCalculateAverage();
  }, [ratings]);

  const handleClick = (value) => {
    setGameRate(value);
    console.log(value);
  };

  const handleMouseOver = (value) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  const handleGameRateSubmit = async () => {
    try {
      setEditStatus(null);
      setDeleteStatus(null);
      const response = await axios.post(
        "https://gaoryn-server.onrender.com/rate",
        {
          userID: userID,
          vote: gameRate,
        },
        {
          headers: { Authorization: `Bearer ${cookies.token}` },
        }
      );
      console.log("Vote submitted:", response.data);
      setSubmitStatus(`${username} Rated The Game ${gameRate} Stars`);
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };

  const handleEdit = async () => {
    try {
      setSubmitStatus(null);
      setDeleteStatus(null);
      const response = await axios.put(
        `https://gaoryn-server.onrender.com/rate/${userID}`,
        {
          userID: userID,
          vote: gameRate,
        },
        {
          headers: { Authorization: `Bearer ${cookies.token}` },
        }
      );
      console.log("Vote updated:", response.data);
      setEditStatus(`${username} Edited Their Vote to ${gameRate} Stars`);
    } catch (error) {
      console.error("Error updating vote:", error);
    }
  };

  const handleDelete = async () => {
    try {
      setSubmitStatus(null);
      setEditStatus(null);
      const response = await axios.delete(
        `https://gaoryn-server.onrender.com/rate/${userID}`,
        {
          headers: { Authorization: `Bearer ${cookies.token}` },
        }
      );
      setDeleteStatus(`${username} Has Deleted Their Vote`);
      console.log("Vote deleted:", response.data);
    } catch (error) {
      console.error("Error deleting vote:", error);
    }
  };

  const rateColors = {
    filled: "#FFAA1D",
    empty: "#CCCCCC",
  };

  const testRating = ratings.some((rating) => rating.userID === Number(userID));

  return (
    <div className="content-rating">
      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <h4>Rate:</h4>
        {[1, 2, 3, 4, 5].map((rate) => {
          let icon;
          if (rate <= gameRate || rate <= hover) {
            icon = <FaStar className="star-icon" color={rateColors.filled} />;
          } else {
            icon = <FaRegStar className="star-icon" color={rateColors.empty} />;
          }
          return (
            <div
              key={rate}
              onClick={() => handleClick(rate)}
              onMouseOver={() => handleMouseOver(rate)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer", marginTop: "22px" }}
            >
              {icon}
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="success"
          onClick={handleGameRateSubmit}
          style={{ fontFamily: "PressStart2P" }}
        >
          Submit
        </Button>
        {testRating ? (
          <>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="success"
              onClick={handleEdit}
              style={{ fontFamily: "PressStart2P" }}
            >
              Edit
            </Button>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="success"
              onClick={handleDelete}
              style={{ fontFamily: "PressStart2P" }}
            >
              Delete
            </Button>
          </>
        ) : null}
      </div>
      <div className="average-rating">
        <h5 style={{ textAlign: "center" }}>
          Average User Rating: {averageRating} Stars ({ratings.length} Votes)
          {submitStatus && <div>{submitStatus}</div>}
          {editStatus && <div>{editStatus}</div>}
          {deleteStatus && <div>{deleteStatus}</div>}
        </h5>
      </div>
    </div>
  );
};

export default GameRating;
