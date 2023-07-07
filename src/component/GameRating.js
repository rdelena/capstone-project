import { useState } from "react";
import { FaSun } from "react-icons/fa";

const GameRating = () => {
  const [gameRate, setGameRate] = useState(0);
  const [hover, setHover] = useState(0);
  const rating = Array(5).fill(0);

  const handleClick = (value) => {
    setGameRate(value);
  };

  const handleMouseOver = (newHover) => {
    setHover(newHover);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  const rateColors = {
    filled: "#FFAA1D",
    empty: "#CCCCCC",
  };

  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <h4>Rate the game:</h4>
      {rating.map((rate, idx) => {
        return (
          <FaSun
            key={idx}
            onClick={() => handleClick(idx + 1)}
            onMouseOver={() => handleMouseOver(idx + 1)}
            onMouseLeave={handleMouseLeave}
            color={
              (hover || gameRate) > idx ? rateColors.filled : rateColors.empty
            }
            style={{
              cursor: "pointer",
              marginTop: "22px",
            }}
          />
        );
      })}
    </div>
  );
};

export default GameRating;
