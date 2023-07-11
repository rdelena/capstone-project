import React from "react";
import GameRating from "./GameRating";
import Social from "./Social";
import Description from "./Description";
import CommentList from "./CommentList";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <iframe
        src="https://i.simmer.io/@Benyji/cool-snowboarder-xtreme"
        style={{ width: "960px", height: "600px", margin: "50px" }}
      ></iframe> */}
      <div
        style={{
          width: "960px",
          height: "600px",
          backgroundColor: "purple",
          margin: "50px",
        }}
      ></div>
      <h2>Epics of Gaoryn</h2>
      <GameRating />
      <Description />
      <CommentList currentUserId="1" />
      <Social />
    </div>
  );
};

export default Dashboard;
